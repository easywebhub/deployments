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
    var CreateWebDlg = (function () {
        function CreateWebDlg(dialogController) {
            this.dialogController = dialogController;
            this.Web = [];
            this.Account = [];
        }
        CreateWebDlg.prototype.submit = function () {
            this.Web.Accounts = [];
            this.Account.AccountId = Lockr.get("UserInfo").Data.AccountId;
            this.Account.AccessLevel = [];
            this.Web.Accounts = this.Account;
            console.log('dialog', this.Web);
            this.dialogController.ok(this.Web);
        };
        CreateWebDlg.prototype.attached = function () {
            var rules = {
                Name: {
                    identifier: 'Name',
                    rules: [{
                            type: 'empty',
                            prompt: 'Xin vui lòng nhập tên vào'
                        }]
                },
                PasswoDisplayName: {
                    identifier: 'DisplayName',
                    rules: [{
                            type: 'empty',
                            prompt: 'Xin vui lòng nhập DisplayName'
                        }]
                },
                Link: {
                    identifier: 'Link',
                    rules: [{
                            type: 'empty',
                            prompt: 'Xin vui lòng nhập Link'
                        }]
                }
            };
            $(".ui.form").form(rules, {
                inline: true,
                on: 'blur'
            });
        };
        CreateWebDlg = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_dialog_1.DialogController), 
            __metadata('design:paramtypes', [Object])
        ], CreateWebDlg);
        return CreateWebDlg;
    }());
    exports.CreateWebDlg = CreateWebDlg;
});

//# sourceMappingURL=CreateWebDlg.js.map