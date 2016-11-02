var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-router', 'aurelia-dependency-injection', '../../services/Account/LoggingServices'], function (require, exports, aurelia_router_1, aurelia_dependency_injection_1, LoggingServices_1) {
    "use strict";
    var Resgister = (function () {
        function Resgister(router, loggingServices) {
            this.theRouter = router;
            this.loggingServices = loggingServices;
        }
        Resgister.prototype.attached = function () {
            var rules = {
                username: {
                    identifier: 'username',
                    rules: [{
                            type: 'empty',
                            prompt: 'Xin vui lòng nhập tài khoản'
                        }]
                },
                password: {
                    identifier: 'password',
                    rules: [{
                            type: 'minLength[6]',
                            prompt: 'Mật khẩu ít nhất {ruleValue} ký tự'
                        }]
                },
                name: {
                    identifier: 'name',
                    rules: [{
                            type: 'empty',
                            prompt: 'Xin vui lòng nhập tên'
                        }]
                },
                age: {
                    identifier: 'age',
                    rules: [{
                            type: 'empty',
                            prompt: 'Xin vui lòng nhập tuổi'
                        }]
                },
                address: {
                    identifier: 'address',
                    rules: [{
                            type: 'empty',
                            prompt: 'Xin vui lòng nhập địa chỉ'
                        }]
                }
            };
            $(".ui.form").form(rules, {
                inline: true,
                on: 'blur'
            });
        };
        Resgister.prototype.submit = function () {
            var _this = this;
            this.SignUp.status = "verified";
            this.SignUp.accountType = "user";
            console.log('signup', this.SignUp);
            return Promise.all([this.loggingServices.SignUp(this.SignUp)]).then(function (rs) {
                if (rs[0].Result == true) {
                    _this.theRouter.navigateToRoute('login');
                    swal({ title: "Thông báo", text: rs[0].Message, timer: 2500, showConfirmButton: true, type: "success" });
                }
                else {
                    swal({ title: "Thông báo", text: rs[0].Message, timer: 2500, showConfirmButton: true, type: "warning" });
                }
            });
        };
        Resgister = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_router_1.Router, LoggingServices_1.LoggingServices), 
            __metadata('design:paramtypes', [Object, Object])
        ], Resgister);
        return Resgister;
    }());
    exports.Resgister = Resgister;
});

//# sourceMappingURL=resgister.js.map
