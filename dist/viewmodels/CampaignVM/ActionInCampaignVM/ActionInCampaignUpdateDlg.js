var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-dialog', 'aurelia-dependency-injection', '../../../services/Action/ActionService'], function (require, exports, aurelia_dialog_1, aurelia_dependency_injection_1, ActionService_1) {
    "use strict";
    var ActionInCampaignUpdateDlg = (function () {
        function ActionInCampaignUpdateDlg(dialogController, actionService) {
            this.dialogController = dialogController;
            this.actionService = actionService;
        }
        ActionInCampaignUpdateDlg.prototype.activate = function (data) {
            var _this = this;
            if (data.Id == undefined) {
                this.check = false;
            }
            else {
                this.check = true;
            }
            return Promise.all([data, this.actionService.GetListAction()]).then(function (rs) {
                _this.listAction = rs[1];
                _this.Entity = rs[0];
                console.log('detail', JSON.stringify(_this.Entity));
            });
        };
        ActionInCampaignUpdateDlg.prototype.submit = function (Entity) {
            console.log('entity:ádfsdf', JSON.stringify(this.Entity));
            this.dialogController.ok(Entity);
        };
        ActionInCampaignUpdateDlg = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_dialog_1.DialogController, ActionService_1.ActionService), 
            __metadata('design:paramtypes', [Object, Object])
        ], ActionInCampaignUpdateDlg);
        return ActionInCampaignUpdateDlg;
    }());
    exports.ActionInCampaignUpdateDlg = ActionInCampaignUpdateDlg;
});

//# sourceMappingURL=ActionInCampaignUpdateDlg.js.map
