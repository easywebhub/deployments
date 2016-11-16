var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-fetch-client', 'aurelia-framework'], function (require, exports, aurelia_fetch_client_1, aurelia_framework_1) {
    "use strict";
    var OrderService = (function () {
        function OrderService(http) {
            http.configure(function (config) {
                config
                    .useStandardConfiguration()
                    .withBaseUrl('https://api.github.com/');
            });
            this.http = http;
        }
        OrderService.prototype.GetUser = function () {
            var _this = this;
            return new Promise(function (resole, reject) {
                _this.http.fetch('users')
                    .then(function (rs) { return rs.json(); })
                    .then(function (rs) { return resole(rs); });
            });
        };
        OrderService = __decorate([
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [aurelia_fetch_client_1.HttpClient])
        ], OrderService);
        return OrderService;
    }());
    exports.OrderService = OrderService;
});

//# sourceMappingURL=orderSrv.js.map
