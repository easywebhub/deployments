var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-dialog', '../../../services/CampaignServices/CampaignService', '../../../services/CampaignGift/CampaignGiftService', 'aurelia-dialog'], function (require, exports, aurelia_framework_1, aurelia_dialog_1, CampaignService_1, CampaignGiftService_1, aurelia_dialog_2) {
    "use strict";
    var CampaigngiftQuantumConfigDlg = (function () {
        function CampaigngiftQuantumConfigDlg(dialogController, campaignService, dialogService, campaignGiftService) {
            this.campaignGiftService = campaignGiftService;
            this.controller = dialogController;
            this.campaignService = campaignService;
            this.dialogService = dialogService;
            this.campaignGiftService = campaignGiftService;
        }
        CampaigngiftQuantumConfigDlg.prototype.activate = function (dto) {
            var _this = this;
            this.Entity = dto;
            return Promise.all([
                this.campaignGiftService.GetCampaignGift().then(function (rs) { return _this.campaignGifts = rs; })
            ]);
        };
        CampaigngiftQuantumConfigDlg.prototype.attached = function () {
        };
        Object.defineProperty(CampaigngiftQuantumConfigDlg.prototype, "Title", {
            get: function () {
                switch (this.Entity.Id) {
                    case 0:
                        return "Thêm mới Cấu hình số lượng CampaignGift ";
                    default:
                        return "Cập nhật Cấu hinh só lượng CampaignGift ";
                }
            },
            enumerable: true,
            configurable: true
        });
        CampaigngiftQuantumConfigDlg = __decorate([
            aurelia_framework_1.inject(aurelia_dialog_1.DialogController, CampaignService_1.CampaignService, aurelia_dialog_2.DialogService, CampaignGiftService_1.CampaignGiftService), 
            __metadata('design:paramtypes', [Object, Object, Object, CampaignGiftService_1.CampaignGiftService])
        ], CampaigngiftQuantumConfigDlg);
        return CampaigngiftQuantumConfigDlg;
    }());
    exports.CampaigngiftQuantumConfigDlg = CampaigngiftQuantumConfigDlg;
    aurelia_framework_1.declarePropertyDependencies(CampaigngiftQuantumConfigDlg, "Title", ["Entity"]);
});

//# sourceMappingURL=CampaignGiftQuantumConfigDlg.js.map
