var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-router", "aurelia-framework"], function (require, exports, aurelia_router_1, aurelia_framework_1) {
    "use strict";
    var UserToolbarController = (function () {
        function UserToolbarController(router) {
            this.router = router;
        }
        UserToolbarController.prototype.history = function () {
            this.router.navigate('#/Account/UserHistory/' + this.userId);
        };
        UserToolbarController.prototype.transaction = function () {
            this.router.navigate("#/CheatingMonitorMenu/UsersTransaction/" + this.userId);
        };
        UserToolbarController = __decorate([
            aurelia_framework_1.inject(aurelia_router_1.Router), 
            __metadata('design:paramtypes', [aurelia_router_1.Router])
        ], UserToolbarController);
        return UserToolbarController;
    }());
    exports.UserToolbarController = UserToolbarController;
});

//# sourceMappingURL=userToolbarController.js.map
