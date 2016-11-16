var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '../../../services/CampaignServices/CampaignGiftQuantumConfigService', '../../../models/CampaignGiftQuantumConfig', './CampaignGiftQuantumConfigDlg', 'aurelia-dialog', 'aurelia-framework'], function (require, exports, CampaignGiftQuantumConfigService_1, CampaignGiftQuantumConfig_1, CampaignGiftQuantumConfigDlg_1, aurelia_dialog_1, aurelia_framework_1) {
    "use strict";
    var CampaignQuantumConfig = (function () {
        function CampaignQuantumConfig(campaignQuantumConfigService, dialogService) {
            this.campaignQuantumConfigService = campaignQuantumConfigService;
            this.dialogService = dialogService;
            this.campaignQuantumConfigService = campaignQuantumConfigService;
            this.dialogService = dialogService;
        }
        CampaignQuantumConfig.prototype.activate = function (params, routeConfig, $navigationInstruction) {
            var _this = this;
            this.params = params;
            if (routeConfig) {
                this.routeConfig = routeConfig;
            }
            return Promise.all([
                this.campaignQuantumConfigService.GetByCampaignId(this.params.campaignId)
                    .then(function (rs) {
                    _this.quantumConfigs = rs;
                    console.log('rs', rs);
                })
            ]);
        };
        CampaignQuantumConfig.prototype.add = function () {
            var _this = this;
            var entity = new CampaignGiftQuantumConfig_1.CampaignGiftQuantumConfig();
            entity.Campaign = this.quantumConfigs[0].Campaign || {};
            entity.CampaignId = this.quantumConfigs[0].CampaignId || 0;
            this.dialogService.open({ viewModel: CampaignGiftQuantumConfigDlg_1.CampaigngiftQuantumConfigDlg, model: entity })
                .then(function (rs) {
                if (!rs.wasCancelled) {
                    console.log('output', rs.output);
                    delete rs.output.Campaign;
                    _this.campaignQuantumConfigService.Create(rs.output)
                        .then(function (rs) {
                        console.log('response from server : ', rs);
                        if (rs.Id > 0) {
                            swal('Thêm mới', 'Thêm mới thành công', 'success');
                            _this.activate(_this.params);
                        }
                        else {
                            swal('Thêm mới', 'Thêm mới không thành công', 'error');
                        }
                    });
                }
            });
        };
        CampaignQuantumConfig.prototype.edit = function (item) {
            var _this = this;
            this.dialogService.open({ viewModel: CampaignGiftQuantumConfigDlg_1.CampaigngiftQuantumConfigDlg, model: item })
                .then(function (rs) {
                if (!rs.wasCancelled) {
                    _this.campaignQuantumConfigService.Update(rs.output)
                        .then(function (rs) {
                        if (rs.ok) {
                            swal('Cập nhật', 'Cập nhật thành công', 'success');
                            _this.activate(_this.params);
                        }
                        else {
                            swal('Cập nhật', 'Cập nhật không thành công', 'error');
                        }
                    });
                }
            });
        };
        CampaignQuantumConfig.prototype.remove = function (item) {
            var _this = this;
            swal({
                title: "Bạn chắc chắn không?",
                text: "Xóa cấu hình số lượng campaignGift ",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, Xóa",
                cancelButtonText: "No, Quay lại",
                closeOnConfirm: false,
                closeOnCancel: false
            }, function (isConfirm) {
                if (isConfirm) {
                    _this.campaignQuantumConfigService.Delete(item.Id)
                        .then(function (rs) {
                        swal("Deleted!", "X\u00F3a th\u00E0nh c\u00F4ng c\u1EA5u h\u00ECnh Campaign", "success");
                        _this.activate(_this.params);
                    });
                }
                else {
                    swal("Cancelled", "Cancelled", "error");
                }
            });
        };
        CampaignQuantumConfig = __decorate([
            aurelia_framework_1.inject(CampaignGiftQuantumConfigService_1.CampaignGiftQuantumConfigService, aurelia_dialog_1.DialogService), 
            __metadata('design:paramtypes', [CampaignGiftQuantumConfigService_1.CampaignGiftQuantumConfigService, aurelia_dialog_1.DialogService])
        ], CampaignQuantumConfig);
        return CampaignQuantumConfig;
    }());
    exports.CampaignQuantumConfig = CampaignQuantumConfig;
});

//# sourceMappingURL=CampaignGiftQuantumConfig.js.map
