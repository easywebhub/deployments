var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', '../../services/Account/UserServices', 'aurelia-router', '../../resources/Excel/importExcel', '../../resources/const'], function (require, exports, aurelia_framework_1, UserServices_1, aurelia_router_1, importExcel_1, const_1) {
    "use strict";
    var UserHistory = (function () {
        function UserHistory(userServices, router, bindingEngine, excelCls) {
            var _this = this;
            this.meta = {};
            this.isExport = false;
            this.testTypes = {
                "Title": "String",
                "Input": "String",
                "Output": "String",
                "Time": "String"
            };
            this.headerTable = ["Tham gia quay trúng ngay", "Input", "Output", "Time"];
            this.router = router;
            this.userServices = userServices;
            this.itemperpage = 10;
            this.pagesize = 6;
            this.current = 1;
            this.meta = {};
            this.meta.EntityFrom = this.itemperpage * (this.current - 1);
            this.meta.EntityTo = this.itemperpage;
            this.meta.ActionGroup = "HoatDongTichLuy";
            this.excelCls = excelCls;
            var subscriptioncurrent = bindingEngine.propertyObserver(this, 'current')
                .subscribe(function () {
                _this.getData();
            });
            this.isExport = false;
        }
        UserHistory.prototype.goToBack = function () {
            this.router.navigate('UserMng');
        };
        UserHistory.prototype.activate = function (params) {
            var _this = this;
            this.params = params;
            this.meta.UserId = params.userId;
            this.meta.EntityFrom = this.itemperpage * (this.current - 1);
            this.meta.EntityTo = this.itemperpage * this.current;
            return Promise.all([this.userServices.GetUserHistory(this.meta)]).then(function (rs) {
                if (_this.isExport == true) {
                    return Promise.resolve(rs[0].Data);
                }
                else if (_this.isExport == false) {
                    _this.userHistory = rs[0].Data;
                    console.log("userHistory", _this.userHistory);
                    _this.total = rs[0].ItemsCount;
                    _this.listAction = const_1.ActionGroupCollection;
                }
            });
        };
        UserHistory.prototype.getData = function () {
            this.activate(this.params);
        };
        ;
        UserHistory.prototype.searchBy = function () {
            this.isExport = false;
            if (this.meta) {
                this.getData();
                console.log("this", JSON.stringify(this.meta));
            }
        };
        UserHistory.prototype.exportExcel = function () {
            var _this = this;
            var excel = {};
            var testJson = [];
            this.meta.IsExport = true;
            this.searchBy();
            this.isExport = true;
            this.activate(this.params).then(function (rs) {
                if (rs && rs.length == 0) {
                    swal('Warning', 'Không tìm thấy lịch sử theo điều kiện tìm kiếm', 'warning');
                    return;
                }
                for (var _i = 0, rs_1 = rs; _i < rs_1.length; _i++) {
                    var item = rs_1[_i];
                    excel.Title = item.Title;
                    excel.Input = item.Input;
                    excel.Output = item.Output;
                    excel.Time = item.Time;
                    testJson.push(excel);
                    excel = {};
                }
                _this.download(_this.excelCls.jsonToSsXml(testJson, _this.headerTable, _this.testTypes), 'Excel.xls', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            });
        };
        UserHistory.prototype.download = function (content, filename, contentType) {
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
        UserHistory = __decorate([
            aurelia_framework_1.inject(UserServices_1.UserServices, aurelia_router_1.Router, aurelia_framework_1.BindingEngine, importExcel_1.ExcelCls), 
            __metadata('design:paramtypes', [Object, Object, Object, Object])
        ], UserHistory);
        return UserHistory;
    }());
    exports.UserHistory = UserHistory;
});

//# sourceMappingURL=UserHistory.js.map
