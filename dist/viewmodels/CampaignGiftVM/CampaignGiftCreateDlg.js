var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-dialog', 'aurelia-dependency-injection', 'aurelia-validation', '../../models/CampaignGift', "../../resources/const", '../../resources/bootstrap-validation/bootstrap-form-render'], function (require, exports, aurelia_dialog_1, aurelia_dependency_injection_1, aurelia_validation_1, CampaignGift_1, const_1, bootstrap_form_render_1) {
    "use strict";
    var CampaignGiftCreateDlg = (function () {
        function CampaignGiftCreateDlg(dialogController, validationController) {
            this.validationController = null;
            this.validationController = validationController.createForCurrentScope();
            this.validationController.addRenderer(new bootstrap_form_render_1.BootstrapFormRenderer());
            this.dialogController = dialogController;
        }
        CampaignGiftCreateDlg.prototype.activate = function () {
            var _this = this;
            this.Entity = new CampaignGift_1.CampaignGift(this.Entity);
            return Promise.all([const_1.CampaignGiftTypes, const_1.StoreCodes]).then(function (rs) {
                _this.Types = rs[0];
                _this.StoreCode = rs[1];
            });
        };
        CampaignGiftCreateDlg.prototype.submit = function (Entity) {
            var _this = this;
            var errors = this.validationController.validate().then((function (rs) {
                if (rs.length == 0) {
                    _this.dialogController.ok(Entity);
                }
            }));
        };
        CampaignGiftCreateDlg = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_dialog_1.DialogController, aurelia_validation_1.ValidationControllerFactory), 
            __metadata('design:paramtypes', [Object, aurelia_validation_1.ValidationControllerFactory])
        ], CampaignGiftCreateDlg);
        return CampaignGiftCreateDlg;
    }());
    exports.CampaignGiftCreateDlg = CampaignGiftCreateDlg;
});

//# sourceMappingURL=CampaignGiftCreateDlg.js.map
