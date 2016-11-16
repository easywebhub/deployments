var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-dialog', '../../services/CampaignGift/CampaignGiftService', 'aurelia-router', 'aurelia-dependency-injection', 'aurelia-validation', '../../models/CampaignGift', "../../resources/const", '../../resources/bootstrap-validation/bootstrap-form-render'], function (require, exports, aurelia_dialog_1, CampaignGiftService_1, aurelia_router_1, aurelia_dependency_injection_1, aurelia_validation_1, CampaignGift_1, const_1, bootstrap_form_render_1) {
    "use strict";
    var CampaignGiftEditDlg = (function () {
        function CampaignGiftEditDlg(dialogController, campaignGiftService, router, validationController) {
            this.validationController = null;
            this.campaignGiftService = campaignGiftService;
            this.router = router;
            this.validationController = validationController.createForCurrentScope();
            this.validationController.addRenderer(new bootstrap_form_render_1.BootstrapFormRenderer());
            this.dialogController = dialogController;
        }
        CampaignGiftEditDlg.prototype.activate = function (data) {
            var _this = this;
            this.editCampaignGift = new CampaignGift_1.CampaignGift(data);
            return Promise.all([this.editCampaignGift]).then(function (rs) {
                _this.editCampaignGift = rs[0];
                _this.Types = const_1.CampaignGiftTypes;
                _this.StoreCode = const_1.StoreCodes;
            });
        };
        CampaignGiftEditDlg.prototype.submit = function (editCampaignGift) {
            var _this = this;
            var errors = this.validationController.validate().then(function (rs) {
                if (rs.length == 0) {
                    _this.dialogController.ok(editCampaignGift);
                }
            });
        };
        CampaignGiftEditDlg = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_dialog_1.DialogController, CampaignGiftService_1.CampaignGiftService, aurelia_router_1.Router, aurelia_validation_1.ValidationControllerFactory), 
            __metadata('design:paramtypes', [Object, Object, Object, aurelia_validation_1.ValidationControllerFactory])
        ], CampaignGiftEditDlg);
        return CampaignGiftEditDlg;
    }());
    exports.CampaignGiftEditDlg = CampaignGiftEditDlg;
});

//# sourceMappingURL=CampaignGiftEditDlg.js.map
