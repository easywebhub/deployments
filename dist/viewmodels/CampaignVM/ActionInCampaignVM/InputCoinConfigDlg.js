var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-dialog', 'aurelia-dependency-injection', '../../../services/Action/ActionInCampaignService'], function (require, exports, aurelia_dialog_1, aurelia_dependency_injection_1, ActionInCampaignService_1) {
    "use strict";
    var InputCoinConfigDlg = (function () {
        function InputCoinConfigDlg(dialogController, actionInCampaignService) {
            this.actionInCampaignService = actionInCampaignService;
            this.dialogController = dialogController;
        }
        InputCoinConfigDlg.prototype.activate = function (params) {
            var _this = this;
            return Promise.all([this.actionInCampaignService.GetActionInCampaignInputCoinConfigByActionInCampaignId(params.Id)]).then(function (rs) {
                _this.actionConfig = rs[0];
            });
        };
        InputCoinConfigDlg.prototype.inputCoinConfigDlg = function (actionConfig) {
            this.dialogController.ok(actionConfig);
        };
        InputCoinConfigDlg = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_dialog_1.DialogController, ActionInCampaignService_1.ActionInCampaignService), 
            __metadata('design:paramtypes', [Object, Object])
        ], InputCoinConfigDlg);
        return InputCoinConfigDlg;
    }());
    exports.InputCoinConfigDlg = InputCoinConfigDlg;
});

//# sourceMappingURL=InputCoinConfigDlg.js.map
