var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-fetch-client', '../../services/HttpService', '../../models/BaseMeta'], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1, HttpService_1, BaseMeta_1) {
    "use strict";
    var CampaignGiftOutputService = (function () {
        function CampaignGiftOutputService(httpService) {
            this.http = httpService.httpInstance;
        }
        CampaignGiftOutputService.prototype.Get = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            if (args.length == 0) {
                return new Promise(function (resolve, reject) {
                    _this.http.fetch("api/CampaignGiftOutput", {
                        method: 'get',
                    })
                        .then(function (response) { console.log("res CampaignGiftOutout Service", response); return response.json(); })
                        .then(function (data) {
                        console.log("data:", data);
                        resolve(data);
                    })
                        .catch(function (err) { return reject(Error(err)); });
                });
            }
            else {
                return new Promise(function (resolve, reject) {
                    _this.http.fetch("api/CampaignGiftOutput/" + args[0], {
                        method: 'get',
                    })
                        .then(function (response) { return response.json(); })
                        .then(function (data) {
                        resolve(data);
                    })
                        .catch(function (err) { return reject(Error(err)); });
                });
            }
        };
        CampaignGiftOutputService.prototype.GetCampaignGiftOutPutsByMeta = function (meta) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("api/CampaignGiftOutput/GetCampaignGiftOutPutsByMeta", {
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
        CampaignGiftOutputService.prototype.GetCampaignGiftOutputByCampaignId = function (campaignId) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("api/CampaignGiftOutput/GetCampaignGiftOutputsByCampaignId?campaignId=" + campaignId, {
                    method: 'get',
                })
                    .then(function (response) { return response.json(); })
                    .then(function (data) {
                    resolve(data);
                })
                    .catch(function (err) { return reject(Error(err)); });
            });
        };
        CampaignGiftOutputService = __decorate([
            aurelia_framework_1.inject(HttpService_1.HttpService),
            aurelia_framework_1.transient(), 
            __metadata('design:paramtypes', [HttpService_1.HttpService])
        ], CampaignGiftOutputService);
        return CampaignGiftOutputService;
    }());
    exports.CampaignGiftOutputService = CampaignGiftOutputService;
    var CampaignGiftOutputMeta = (function (_super) {
        __extends(CampaignGiftOutputMeta, _super);
        function CampaignGiftOutputMeta() {
            _super.apply(this, arguments);
        }
        return CampaignGiftOutputMeta;
    }(BaseMeta_1.BaseMeta));
    exports.CampaignGiftOutputMeta = CampaignGiftOutputMeta;
});

//# sourceMappingURL=CampaignGiftOutputService.js.map
