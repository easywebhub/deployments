var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-framework', 'aurelia-dialog', '../../services/CampaignServices/CampaignService', '../../services/CampaignServices/CampaignGiftService'], function (require, exports, aurelia_framework_1, aurelia_framework_2, aurelia_dialog_1, CampaignService_1, CampaignGiftService_1) {
    "use strict";
    var SetWinCampaignOutputDlg = (function () {
        function SetWinCampaignOutputDlg(dialogController, campaignService, campaignGiftService, bindingEngine) {
            var _this = this;
            this.dto = {};
            this.order = {};
            this.campaignGiftId = 0;
            this.checkedCampaignGift = [];
            this.controller = dialogController;
            this.campaignService = campaignService;
            this.campaignGiftService = campaignGiftService;
            var subscription = bindingEngine.collectionObserver(this.checkedCampaignGift)
                .subscribe(function (newValue, oldValue) { return console.log('checked', _this.checkedCampaignGift); });
        }
        SetWinCampaignOutputDlg.prototype.activate = function (dto) {
            var _this = this;
            this.dto = dto;
            console.log('dto', dto);
            return Promise.all([
                this.campaignGiftService.GetByCampaignId(dto.CampaignOutput.CampaignId)
                    .then(function (rs) {
                    _this.CampaignGifts = rs;
                    console.log('CamapaignGifts', rs);
                })
                    .catch(function (err) {
                    console.error('Error  , err');
                })
            ]);
        };
        SetWinCampaignOutputDlg.prototype.attached = function () {
            if (this.CampaignGifts.length > 0) {
                this.checkedCampaignGift.push(this.CampaignGifts[0].Id);
            }
        };
        SetWinCampaignOutputDlg.prototype.showChecedCampaignGift = function () {
            console.log('showChecedCampaignGift', this.checkedCampaignGift);
        };
        SetWinCampaignOutputDlg = __decorate([
            aurelia_framework_1.inject(aurelia_dialog_1.DialogController, CampaignService_1.CampaignService, CampaignGiftService_1.CampaignGiftService, aurelia_framework_2.BindingEngine), 
            __metadata('design:paramtypes', [Object, Object, Object, Object])
        ], SetWinCampaignOutputDlg);
        return SetWinCampaignOutputDlg;
    }());
    exports.SetWinCampaignOutputDlg = SetWinCampaignOutputDlg;
});

//# sourceMappingURL=SetWinCampaignOutputDlg.js.map
