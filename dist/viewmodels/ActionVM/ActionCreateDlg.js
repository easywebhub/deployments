var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-dialog', 'aurelia-dependency-injection', '../../models/Action'], function (require, exports, aurelia_dialog_1, aurelia_dependency_injection_1, Action_1) {
    "use strict";
    var ActionCreateDlg = (function () {
        function ActionCreateDlg(dialogController) {
            this.dialogController = dialogController;
        }
        ActionCreateDlg.prototype.activate = function () {
            this.Entity = new Action_1.Action({});
        };
        ActionCreateDlg.prototype.submit = function (Entity) {
            this.Entity = new Action_1.Action(Entity);
            console.log('entity: ', this.Entity);
            if (this.Entity.StartDate != null && this.Entity.EndDate != null) {
                if (new Date(this.Entity.StartDate) <= new Date(this.Entity.EndDate)) {
                    this.dialogController.ok(Entity);
                }
                else {
                    swal({ title: "Thông báo", text: "Vui lòng nhập thời gian đúng", showConfirmButton: true, type: "warning" });
                }
            }
            else if (this.Entity.StartDate == undefined || this.Entity.EndDate == undefined) {
                console.log('data', this.Entity.StartDate);
                this.dialogController.ok(Entity);
            }
        };
        ActionCreateDlg = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_dialog_1.DialogController), 
            __metadata('design:paramtypes', [Object])
        ], ActionCreateDlg);
        return ActionCreateDlg;
    }());
    exports.ActionCreateDlg = ActionCreateDlg;
});

//# sourceMappingURL=ActionCreateDlg.js.map
