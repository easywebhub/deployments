var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-router', 'aurelia-dependency-injection', '../../services/Account/LoggingServices', 'lockr', 'tinymce'], function (require, exports, aurelia_router_1, aurelia_dependency_injection_1, LoggingServices_1, Lockr) {
    "use strict";
    var LoginViewModel = (function () {
        function LoginViewModel(router, loggingServices) {
            {
                this.theRouter = router;
                this.loggingServices = loggingServices;
            }
        }
        LoginViewModel.prototype.attached = function () {
            var rules = {
                UserName: {
                    identifier: 'UserName',
                    rules: [{
                            type: 'empty',
                            prompt: 'Xin vui lòng nhập tên vào'
                        }]
                },
                Password: {
                    identifier: 'Password',
                    rules: [{
                            type: 'minLength[6]',
                            prompt: 'Mật khẩu ít nhất {ruleValue} ký tự'
                        }]
                },
            };
            $(".ui.form").form(rules, {
                inline: true,
                on: 'blur'
            });
            tinymce.init({
                selector: 'textarea',
                plugins: [
                    'paste',
                    'link',
                    'autoresize',
                    'imagetools',
                    'table'
                ]
            });
        };
        LoginViewModel.prototype.routeRegister = function () {
            this.theRouter.navigateToRoute('register');
        };
        LoginViewModel.prototype.submit = function () {
            var _this = this;
            return Promise.all([this.loggingServices.CheckLogin(this.Login)]).then(function (rs) {
                if (rs[0].Result == true) {
                    Lockr.set('UserInfo', rs[0]);
                    window.setTimeout(function () {
                        _this.theRouter.navigateToRoute('Dashboard');
                        location.reload();
                    }, 1200);
                    swal({ title: "Thông báo", text: "Đăng nhập thành công", timer: 2500, showConfirmButton: true, type: "success" });
                }
                else {
                    swal({ title: "Thông báo", text: "Đăng nhập thất bại", timer: 2500, showConfirmButton: true, type: "warning" });
                }
            });
        };
        LoginViewModel = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_router_1.Router, LoggingServices_1.LoggingServices), 
            __metadata('design:paramtypes', [aurelia_router_1.Router, Object])
        ], LoginViewModel);
        return LoginViewModel;
    }());
    exports.LoginViewModel = LoginViewModel;
});

//# sourceMappingURL=login.js.map
