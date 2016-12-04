var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', '../../services/Account/UserServices'], function (require, exports, aurelia_framework_1, UserServices_1) {
    "use strict";
    var UserMng = (function () {
        function UserMng(userServices, bindingEngine) {
            this.pendding = true;
            this.userServices = userServices;
            this.itemperpage = 10;
            this.pagesize = 6;
            this.current = 1;
            this.total = 0;
        }
        UserMng.prototype.activate = function () {
            var _this = this;
            this.pendding = !this.pendding;
            this.userServices.GetListUser().then(function (rs) {
                if (rs.Result == true) {
                    _this.pendding = !_this.pendding;
                    _this.listUser = rs.Data;
                    _this.total = rs.ItemsCount;
                }
                else {
                    console.log('bad');
                }
            });
        };
        UserMng.prototype.updateUser = function (item) {
            console.log('updateUser');
        };
        UserMng.prototype.deleteUser = function (item) {
            console.log('delete user');
        };
        UserMng = __decorate([
            aurelia_framework_1.inject(UserServices_1.UserServices, aurelia_framework_1.BindingEngine), 
            __metadata('design:paramtypes', [Object, Object])
        ], UserMng);
        return UserMng;
    }());
    exports.UserMng = UserMng;
    var SearchUserNameValueConverter = (function () {
        function SearchUserNameValueConverter() {
        }
        SearchUserNameValueConverter.prototype.toView = function (array, obj) {
            if (obj == "") {
                return array;
            }
            else if (obj) {
                var filteredArr = array.filter(function (x) { return x.UserName.toLowerCase().indexOf(obj.toLowerCase()) != -1; });
                return filteredArr;
            }
            return array;
        };
        return SearchUserNameValueConverter;
    }());
    exports.SearchUserNameValueConverter = SearchUserNameValueConverter;
    var SearchAccountTypeValueConverter = (function () {
        function SearchAccountTypeValueConverter() {
        }
        SearchAccountTypeValueConverter.prototype.toView = function (array, obj) {
            if (obj == "") {
                return array;
            }
            else if (obj) {
                var filteredArr = array.filter(function (x) { return x.AccountType.toLowerCase().indexOf(obj.toLowerCase()) != -1; });
                return filteredArr;
            }
            return array;
        };
        return SearchAccountTypeValueConverter;
    }());
    exports.SearchAccountTypeValueConverter = SearchAccountTypeValueConverter;
});

//# sourceMappingURL=UserMng.js.map
