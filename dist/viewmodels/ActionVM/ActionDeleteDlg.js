var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-dialog', 'aurelia-dependency-injection'], function (require, exports, aurelia_dialog_1, aurelia_dependency_injection_1) {
    "use strict";
    var ActionDeleteDlg = (function () {
        function ActionDeleteDlg(dialogController) {
            this.dialogController = dialogController;
        }
        ActionDeleteDlg.prototype.activate = function (entity) {
            var _this = this;
            return Promise.all([entity]).then(function (rs) {
                _this.deleteAction = rs[0];
            });
        };
        ActionDeleteDlg.prototype.delete = function (deleteAction) {
            this.dialogController.ok(deleteAction);
        };
        ActionDeleteDlg = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_dialog_1.DialogController), 
            __metadata('design:paramtypes', [Object])
        ], ActionDeleteDlg);
        return ActionDeleteDlg;
    }());
    exports.ActionDeleteDlg = ActionDeleteDlg;
});

//# sourceMappingURL=ActionDeleteDlg.js.map
