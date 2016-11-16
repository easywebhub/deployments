var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-fetch-client', '../../services/HttpService', 'aurelia-fetch-client'], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1, HttpService_1, aurelia_fetch_client_2) {
    "use strict";
    var OrderService = (function () {
        function OrderService(httpService, http) {
            this.http = httpService.httpInstance;
            this.theHttp = http;
        }
        OrderService.prototype.CreateOrUpdateOrder = function (order) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("order-api/CreateOrUpdateOrder", {
                    method: 'post',
                    body: aurelia_fetch_client_1.json(order)
                })
                    .then(function (response) { return response.json(); })
                    .then(function (data) {
                    resolve(data);
                })
                    .catch(function (err) { return reject(Error(err)); });
            });
        };
        OrderService.prototype.GetOrderByCampaignGiftOutputId = function (campaignGiftOutputId) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("order-api/GetOrderByCampaignGiftOutputId?campaignGiftOutputId=" + campaignGiftOutputId, {
                    method: 'get',
                })
                    .then(function (response) { return response.json(); })
                    .then(function (data) {
                    resolve(data);
                })
                    .catch(function (err) { return reject(Error(err)); });
            });
        };
        OrderService.prototype.GetOrderByOrderId = function (orderId) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("order-api/GetOrderByOrderId?orderId=" + orderId, {
                    method: 'get',
                })
                    .then(function (response) { return response.json(); })
                    .then(function (data) {
                    resolve(data);
                })
                    .catch(function (err) { return reject(Error(err)); });
            });
        };
        OrderService.prototype.OrderToPos = function (orderId) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("order-api/OrderToPost?orderId=" + orderId, {
                    method: 'get',
                })
                    .then(function (response) { return response.json(); })
                    .then(function (data) {
                    resolve(data);
                })
                    .catch(function (err) { return reject(Error(err)); });
            });
        };
        OrderService.prototype.CancelOrder = function (orderId) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("order-api/CancelOrder?orderId=" + orderId, {
                    method: 'get',
                })
                    .then(function (response) { return response.json(); })
                    .then(function (data) {
                    resolve(data);
                })
                    .catch(function (err) { return reject(Error(err)); });
            });
        };
        OrderService.prototype.GetOrders = function (orderMeta) {
            var _this = this;
            console.log('orderMeta ', orderMeta);
            return new Promise(function (resolve, reject) {
                _this.http.fetch("order-api/GetOrders", {
                    method: 'post',
                    body: aurelia_fetch_client_1.json(orderMeta),
                })
                    .then(function (response) { return response.json(); })
                    .then(function (data) {
                    resolve(data);
                })
                    .catch(function (err) { return reject(Error(err)); });
            });
        };
        OrderService.prototype.GetStoreVta = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("https://apivnpost.vienthonga.vn//public-api/GetMapAffiliate?affiliate=webvta", {
                    method: 'get'
                })
                    .then(function (response) { return response.json(); })
                    .then(function (data) {
                    resolve(data.Data[0].ListStoreCode);
                })
                    .catch(function (err) { return reject(Error(err)); });
            });
        };
        OrderService = __decorate([
            aurelia_framework_1.inject(HttpService_1.HttpService, aurelia_fetch_client_2.HttpClient),
            aurelia_framework_1.transient(), 
            __metadata('design:paramtypes', [Object, Object])
        ], OrderService);
        return OrderService;
    }());
    exports.OrderService = OrderService;
});

//# sourceMappingURL=OrderService.js.map
