var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', '../../services/HttpService', 'aurelia-fetch-client'], function (require, exports, aurelia_framework_1, HttpService_1, aurelia_fetch_client_1) {
    "use strict";
    var CampaignGiftService = (function () {
        function CampaignGiftService(httpService) {
            this.http = httpService.httpInstance;
        }
        CampaignGiftService.prototype.DeleteCampaignGift = function (id) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("api/CampaignGift/" + id, {
                    method: 'delete'
                })
                    .then(function (response) { return response.json(); })
                    .then(function (data) {
                    resolve(data);
                })
                    .catch(function (err) { return reject(Error(err)); });
            });
        };
        CampaignGiftService.prototype.DetailCampaignGift = function (id) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("api/CampaignGift/" + id, {
                    method: 'get'
                })
                    .then(function (response) { return response.json(); })
                    .then(function (data) {
                    resolve(data);
                })
                    .catch(function (err) { return reject(Error(err)); });
            });
        };
        CampaignGiftService.prototype.EditCampaignGift = function (meta) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("api/CampaignGift/" + meta.Id, {
                    method: 'PUT',
                    body: aurelia_fetch_client_1.json(meta)
                })
                    .then(function (data) {
                    console.log('data from service: ', data);
                    resolve(data);
                })
                    .catch(function (err) { return reject(Error(err)); });
            });
        };
        CampaignGiftService.prototype.GetCampaignGift = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("api/CampaignGift", {
                    method: 'get'
                })
                    .then(function (response) { return response.json(); })
                    .then(function (data) {
                    resolve(data);
                })
                    .catch(function (err) { return reject(Error(err)); });
            });
        };
        CampaignGiftService.prototype.CreateCampaignGift = function (meta) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("api/CampaignGift", {
                    method: 'post',
                    body: aurelia_fetch_client_1.json(meta)
                })
                    .then(function (response) { return response.json(); })
                    .then(function (data) {
                    resolve(data);
                })
                    .catch(function (err) { return reject(Error(err)); });
            });
        };
        CampaignGiftService.prototype.GetCampaignCoinCongiByCampaignGiftId = function (id) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("api/campaigngift/getCampaignCoinCongiByCampaignGiftId?CampaignGiftID=" + id, {
                    method: 'get'
                })
                    .then(function (response) { return response.json(); })
                    .then(function (data) {
                    resolve(data);
                })
                    .catch(function (err) { return reject(Error(err)); });
            });
        };
        CampaignGiftService.prototype.UpdateConfig = function (meta) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("api/campaigngift/updateConfig", {
                    method: 'post',
                    body: aurelia_fetch_client_1.json(meta)
                })
                    .then(function (response) { return response.json(); })
                    .then(function (data) {
                    resolve(data);
                })
                    .catch(function (err) { return reject(Error(err)); });
            });
        };
        CampaignGiftService = __decorate([
            aurelia_framework_1.inject(HttpService_1.HttpService),
            aurelia_framework_1.transient(), 
            __metadata('design:paramtypes', [Object])
        ], CampaignGiftService);
        return CampaignGiftService;
    }());
    exports.CampaignGiftService = CampaignGiftService;
});

//# sourceMappingURL=CampaignGiftService.js.map
