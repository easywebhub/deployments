var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-dialog', 'aurelia-dependency-injection', 'aurelia-validation', '../../resources/bootstrap-validation/bootstrap-form-render'], function (require, exports, aurelia_dialog_1, aurelia_dependency_injection_1, aurelia_validation_1, bootstrap_form_render_1) {
    "use strict";
    var ActionUpdateDlg = (function () {
        function ActionUpdateDlg(dialogController, ValidationControllerFactory) {
            this.controller = null;
            this.dialogController = dialogController;
            this.controller = ValidationControllerFactory.createForCurrentScope();
            this.controller.addRenderer(new bootstrap_form_render_1.BootstrapFormRenderer());
            this.controller.validateTrigger = aurelia_validation_1.validateTrigger.manual;
        }
        ActionUpdateDlg.prototype.activate = function (Entity) {
            var _this = this;
            return Promise.all([Entity]).then(function (rs) {
                _this.Entity = rs[0];
                console.log('obj', JSON.stringify(rs[0]));
            });
        };
        ActionUpdateDlg.prototype.submit = function (Entity) {
            var _this = this;
            this.Entity = this.Entity;
            this.controller.validate()
                .then(function (v) {
                if (v.length === 0) {
                    _this.dialogController.ok(Entity);
                }
            });
        };
        ActionUpdateDlg = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_dialog_1.DialogController, aurelia_validation_1.ValidationControllerFactory), 
            __metadata('design:paramtypes', [Object, aurelia_validation_1.ValidationControllerFactory])
        ], ActionUpdateDlg);
        return ActionUpdateDlg;
    }());
    exports.ActionUpdateDlg = ActionUpdateDlg;
});

//# sourceMappingURL=ActionUpdateDlg.js.map
