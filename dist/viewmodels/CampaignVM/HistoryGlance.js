var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', '../../services/CampaignServices/CampaignService', 'aurelia-router', '../../resources/Excel/importExcel'], function (require, exports, aurelia_framework_1, CampaignService_1, aurelia_router_1, importExcel_1) {
    "use strict";
    var HistoryGlance = (function () {
        function HistoryGlance(campaignService, bindingEngine, router, excelCls) {
            var _this = this;
            this.meta = { "IsExport": false, "EntityFrom": 0, "EntityTo": 10, "ActionId": 0 };
            this.itemperpage = 10;
            this.pagesize = 6;
            this.current = 1;
            this.total = 0;
            this.testTypes = {
                "ActionDisplayName": "String",
                "CreatedDate": "String",
                "LastUpdatedDate": "String",
                "Email": "String",
                "FullName": "String",
                "Sex": "String"
            };
            this.headerTable = ["Tên Action", "Ngày tạo", "Ngày cập nhật", "Email", "Họ tên", "Giới tính"];
            this.excelCls = excelCls;
            this.router = router;
            this.campaignService = campaignService;
            var subscriptioncurrent = bindingEngine.propertyObserver(this, 'current')
                .subscribe(function () {
                _this.activate(_this.params);
            });
        }
        HistoryGlance.prototype.activate = function (params) {
            var _this = this;
            this.navigationServer(params);
            return Promise.all([this.campaignService.GetActionsByCampaignId(this.meta.CampaignId), this.campaignService.GetCampaignHistoryGlance(this.meta)]).then(function (rs) {
                return _this.checkByExcel() == true ? (Promise.resolve(rs[1].Data)) : _this.resultNotExcel(rs);
            });
        };
        HistoryGlance.prototype.resultNotExcel = function (rs) {
            this.meta.IsExport == false;
            this.listActionCampaign = rs[0];
            this.listHistory = rs[1].Data;
            this.total = rs[1].ItemsCount;
            return;
        };
        HistoryGlance.prototype.checkByExcel = function () {
            return this.meta.IsExport == true ? true : false;
        };
        HistoryGlance.prototype.navigationServer = function (params) {
            this.params = params;
            this.meta.CampaignId = params.CampaignId;
            this.meta.EntityFrom = this.itemperpage * (this.current - 1);
            this.meta.EntityTo = this.itemperpage * this.current;
        };
        HistoryGlance.prototype.compareDate = function () {
            return (new Date(this.meta.DateTo) >= new Date(this.meta.DateFrom) ? true : false);
        };
        HistoryGlance.prototype.searchBy = function () {
            console.log('meta', JSON.stringify(this.meta));
            for (var i in this.meta) {
                if (this.meta[i] == "")
                    delete this.meta[i];
            }
            this.meta.IsExport = false;
            this.activate(this.params);
        };
        HistoryGlance.prototype.exportExcel = function () {
            var _this = this;
            var excel = {};
            var testJson = [];
            this.searchBy();
            this.meta.IsExport = true;
            this.activate(this.params).then(function (rs) {
                console.log('export', rs);
                if (rs && rs.length == 0) {
                    swal('Warning', 'Không tìm thấy lịch sử theo điều kiện tìm kiếm', 'warning');
                    return;
                }
                for (var _i = 0, rs_1 = rs; _i < rs_1.length; _i++) {
                    var item = rs_1[_i];
                    excel.ActionDisplayName = item.Action.ActionDisplayName;
                    excel.CreatedDate = item.CreatedDate;
                    excel.LastUpdatedDate = item.LastUpdatedDate;
                    excel.Email = item.User.Email;
                    excel.FullName = item.User.FullName;
                    excel.Sex = item.User.Sex;
                    testJson.push(excel);
                    excel = {};
                }
                _this.download(_this.excelCls.jsonToSsXml(testJson, _this.headerTable, _this.testTypes), 'Excel.xls', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            });
        };
        HistoryGlance.prototype.download = function (content, filename, contentType) {
            if (!contentType)
                contentType = 'application/octet-stream';
            var a = document.createElement('a');
            var blob = new Blob([content], {
                'type': contentType
            });
            a.href = window.URL.createObjectURL(blob);
            a.download = filename;
            a.target = '_blank';
            a.click();
        };
        HistoryGlance.prototype.goToBack = function () {
            this.router.navigateToRoute("Campaign");
        };
        HistoryGlance = __decorate([
            aurelia_framework_1.inject(CampaignService_1.CampaignService, aurelia_framework_1.BindingEngine, aurelia_router_1.Router, importExcel_1.ExcelCls), 
            __metadata('design:paramtypes', [Object, Object, Object, Object])
        ], HistoryGlance);
        return HistoryGlance;
    }());
    exports.HistoryGlance = HistoryGlance;
});

//# sourceMappingURL=HistoryGlance.js.map
