var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-dialog', '../../services/Account/UserServices', 'aurelia-router', 'aurelia-dependency-injection', 'aurelia-validation', '../../models//UserModels', '../../resources/bootstrap-validation/bootstrap-form-render'], function (require, exports, aurelia_dialog_1, UserServices_1, aurelia_router_1, aurelia_dependency_injection_1, aurelia_validation_1, UserModels_1, bootstrap_form_render_1) {
    "use strict";
    var UserConfigDlg = (function () {
        function UserConfigDlg(dialogController, userServices, router, controllerFact) {
            this.controller = null;
            this.userServices = userServices;
            this.router = router;
            this.controller = controllerFact.createForCurrentScope();
            this.controller.addRenderer(new bootstrap_form_render_1.BootstrapFormRenderer());
            this.dialogController = dialogController;
            this.meda = '<ul><li>asdf</li></ul>';
        }
        UserConfigDlg.prototype.activate = function (data) {
            var _this = this;
            return Promise.all([this.userServices.GetUserRoles()]).then(function (rs) {
                _this.roles = rs[0];
                _this.User = new UserModels_1.UserModel(data);
                console.log('User', JSON.stringify(_this.User));
                _this.User.Roles = _this.User.roles.role.map(function (x) { return x.RoleId; });
            });
        };
        UserConfigDlg.prototype.attached = function () {
            $("select").val(this.User.Roles);
        };
        UserConfigDlg.prototype.backToUser = function () {
            this.router.navigate('UserMng');
        };
        UserConfigDlg.prototype.updateLoad = function () {
            var _this = this;
            this.controller.validate().then(function (rs) {
                console.log('Roles', _this.User.Roles);
                if (rs.length == 0) {
                    _this.dialogController.ok(_this.User);
                }
            });
        };
        UserConfigDlg = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_dialog_1.DialogController, UserServices_1.UserServices, aurelia_router_1.Router, aurelia_validation_1.ValidationControllerFactory), 
            __metadata('design:paramtypes', [Object, Object, Object, aurelia_validation_1.ValidationControllerFactory])
        ], UserConfigDlg);
        return UserConfigDlg;
    }());
    exports.UserConfigDlg = UserConfigDlg;
});

//# sourceMappingURL=UserConfigDlg.js.map
