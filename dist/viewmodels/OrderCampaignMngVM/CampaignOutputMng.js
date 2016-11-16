var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '../../services/CampaignServices/CampaignOutputService', '../../services/CampaignServices/CampaignService', 'aurelia-framework', '../../viewmodels/OrderCampaignMngVm/SetWinCampaignOutputDlg', 'aurelia-dialog', 'sweetalert'], function (require, exports, CampaignOutputService_1, CampaignService_1, aurelia_framework_1, SetWinCampaignOutputDlg_1, aurelia_dialog_1) {
    "use strict";
    var CampaignOutput = (function () {
        function CampaignOutput(campaignOutputService, campaignService, dialogService, bindingEngine) {
            var _this = this;
            this.meta = {};
            this.campaignOutputService = campaignOutputService;
            this.campaignService = campaignService;
            this.dialogService = dialogService;
            this.itemperpage = 10;
            this.pagesize = 6;
            this.current = 1;
            this.meta.EntityFrom = 0;
            this.meta.EntityTo = this.meta.EntityFrom + this.itemperpage;
            var subscriptioncurrent = bindingEngine.propertyObserver(this, 'current')
                .subscribe(function () {
                _this.getData();
            });
        }
        CampaignOutput.prototype.activate = function () {
            var _this = this;
            this.meta.EntityFrom = (this.current - 1) * this.itemperpage;
            this.meta.EntityTo = this.current * this.itemperpage;
            return Promise.all([
                this.campaignOutputService.GetByMeta(this.meta)
                    .then(function (rs) {
                    console.log('CampaignOutput', rs);
                    _this.data = rs;
                    _this.total = rs.Count;
                    _this.CampaignOutputs = rs.Data;
                    _this.campaignService.GetCampaigns()
                        .then(function (cps) {
                        _this.Campaigns = cps;
                        console.log('Campaigns: ', _this.Campaigns);
                    });
                })
            ]);
        };
        CampaignOutput.prototype.getData = function () {
            this.activate();
        };
        CampaignOutput.prototype.setWinCampaignOutput = function (obj, isWin) {
            var _this = this;
            this.dialogService.open({ viewModel: SetWinCampaignOutputDlg_1.SetWinCampaignOutputDlg, model: { CampaignOutput: obj } }).then(function (result) {
                if (!result.wasCancelled) {
                    console.log('result.output', result.output);
                    _this.campaignOutputService.SetWinCampginOutput(obj.Id, result.output[0], isWin)
                        .then(function (rs) {
                        _this.activate();
                        swal("Thiết lập quà", "Thành công", "success");
                    }, function (rj) {
                        swal("Thiết lập quà", "Không thành công", "error");
                    });
                }
                else {
                }
            });
        };
        CampaignOutput = __decorate([
            aurelia_framework_1.inject(CampaignOutputService_1.CampaignOutputService, CampaignService_1.CampaignService, aurelia_dialog_1.DialogService, aurelia_framework_1.BindingEngine), 
            __metadata('design:paramtypes', [Object, Object, Object, Object])
        ], CampaignOutput);
        return CampaignOutput;
    }());
    exports.CampaignOutput = CampaignOutput;
    var FilterValueConverter = (function () {
        function FilterValueConverter() {
        }
        FilterValueConverter.prototype.toView = function (arr, selectedCampaign, selectedStatus, code) {
            if (selectedCampaign != '') {
                arr = arr.filter(function (x) { return x.CampaignId == selectedCampaign; });
            }
            if (selectedStatus) {
                arr = arr.filter(function (x) { return x.Status == selectedStatus; });
            }
            if (code) {
                arr = arr.filter(function (x) { return x.Output == code; });
            }
            return arr;
        };
        return FilterValueConverter;
    }());
    exports.FilterValueConverter = FilterValueConverter;
});

//# sourceMappingURL=CampaignOutputMng.js.map
