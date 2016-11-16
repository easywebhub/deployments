var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-dialog', '../../services/CampaignGift/CampaignGiftService', 'aurelia-router', 'aurelia-dependency-injection'], function (require, exports, aurelia_dialog_1, CampaignGiftService_1, aurelia_router_1, aurelia_dependency_injection_1) {
    "use strict";
    var CampaignGiftDeleteDlg = (function () {
        function CampaignGiftDeleteDlg(dialogController, campaignGiftService, router, validationController) {
            this.campaignGiftService = campaignGiftService;
            this.router = router;
            this.dialogController = dialogController;
        }
        CampaignGiftDeleteDlg.prototype.activate = function (data) {
            var _this = this;
            return Promise.all([data]).then(function (rs) {
                _this.detailCampaignGift = rs[0];
            });
        };
        CampaignGiftDeleteDlg = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_dialog_1.DialogController, CampaignGiftService_1.CampaignGiftService, aurelia_router_1.Router), 
            __metadata('design:paramtypes', [Object, Object, Object, Object])
        ], CampaignGiftDeleteDlg);
        return CampaignGiftDeleteDlg;
    }());
    exports.CampaignGiftDeleteDlg = CampaignGiftDeleteDlg;
});

//# sourceMappingURL=CampaignGiftDeleteDlg.js.map
