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
    var CampaignService = (function () {
        function CampaignService(httpService) {
            this.http = httpService.httpInstance;
        }
        CampaignService.prototype.GetCampaignHistoryGlance = function (meta) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("api/campaign/HistoryGlance", {
                    method: 'post',
                    body: aurelia_fetch_client_1.json(meta)
                })
                    .then(function (rs) { return rs.json(); })
                    .then(function (data) {
                    resolve(data);
                })
                    .catch(function (err) { return reject(Error(err)); });
            });
        };
        CampaignService.prototype.DeleteCampaigns = function (id) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("api/Campaigns/" + id, {
                    method: 'DELETE'
                })
                    .then(function (rs) { return rs.json(); })
                    .then(function (rs) { return resolve(rs); })
                    .catch(function (err) { return reject(Error(err)); });
            });
        };
        CampaignService.prototype.GetActionsByCampaignId = function (campaignId) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("api/action/GetActionsByCampaignId/" + campaignId, {
                    method: 'get',
                })
                    .then(function (response) { return response.json(); })
                    .then(function (data) {
                    resolve(data);
                })
                    .catch(function (err) { return reject(Error(err)); });
            });
        };
        CampaignService.prototype.GetCampaigns = function (campaignId) {
            var _this = this;
            if (!!campaignId) {
                return new Promise(function (resolve, reject) {
                    _this.http.fetch("campaign-api/GetCampaigns/" + campaignId, {
                        method: 'get',
                    })
                        .then(function (response) { return response.json(); })
                        .then(function (data) {
                        resolve(data);
                    })
                        .catch(function (err) { return reject(Error(err)); });
                });
            }
            return new Promise(function (resolve, reject) {
                _this.http.fetch("campaign-api/GetCampaigns", {
                    method: 'get',
                })
                    .then(function (response) { return response.json(); })
                    .then(function (data) {
                    resolve(data);
                })
                    .catch(function (err) { return reject(Error(err)); });
            });
        };
        CampaignService.prototype.GetCampaignsByMeta = function (meta) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("campaign-api/GetCampaignsByMeta", {
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
        CampaignService.prototype.GetCampaignGiftOutputs = function (campaignId) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("campaign-api/GetCampaignGiftOutputs?campaignId=" + campaignId, {
                    method: 'get',
                })
                    .then(function (rs) { return rs.json(); })
                    .then(function (data) {
                    resolve(data);
                })
                    .catch(function (err) { return reject(Error(err)); });
            });
        };
        CampaignService.prototype.GetCampaignGift = function (campaignGiftId) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("campaign-api/GetCampaignGift?campaignGiftId=" + campaignGiftId, {
                    method: 'get',
                })
                    .then(function (rs) { return rs.json(); })
                    .then(function (data) {
                    resolve(data);
                })
                    .catch(function (err) { return reject(Error(err)); });
            });
        };
        CampaignService.prototype.GetCampaignQuantumConfigs = function (meta) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("campaign-api/GetCampaignGiftQuantumConfigs", {
                    method: 'post',
                    body: aurelia_fetch_client_1.json(meta)
                })
                    .then(function (rs) { return rs.json(); })
                    .then(function (data) {
                    resolve(data);
                })
                    .catch(function (err) { return reject(Error(err)); });
            });
        };
        CampaignService.prototype.GetCampaigntypes = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("campaign-api/GetCampaigntypes", {
                    method: 'get'
                })
                    .then(function (rs) { return rs.json(); })
                    .then(function (data) {
                    resolve(data);
                })
                    .catch(function (err) { return reject(Error(err)); });
            });
        };
        CampaignService.prototype.GetCampaignGroups = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("campaign-api/GetCampaignGroups", {
                    method: 'get'
                })
                    .then(function (rs) { return rs.json(); })
                    .then(function (data) {
                    resolve(data);
                })
                    .catch(function (err) { return reject(Error(err)); });
            });
        };
        CampaignService.prototype.Save = function (campaign) {
            var _this = this;
            if (campaign.Id == 0) {
                return new Promise(function (resolve, reject) {
                    _this.http.fetch("campaign-api/PostCampaign", {
                        method: 'post',
                        body: aurelia_fetch_client_1.json(campaign)
                    })
                        .then(function (rs) { return rs.json(); })
                        .then(function (data) {
                        resolve(data);
                    })
                        .catch(function (err) { return reject(Error(err)); });
                });
            }
            else {
                return new Promise(function (resolve, reject) {
                    _this.http.fetch("campaign-api/PutCampaign/" + campaign.Id, {
                        method: 'put',
                        body: aurelia_fetch_client_1.json(campaign)
                    })
                        .then(function (data) {
                        resolve(data);
                    })
                        .catch(function (err) { return reject(Error(err)); });
                });
            }
        };
        CampaignService = __decorate([
            aurelia_framework_1.inject(HttpService_1.HttpService),
            aurelia_framework_1.transient(), 
            __metadata('design:paramtypes', [Object])
        ], CampaignService);
        return CampaignService;
    }());
    exports.CampaignService = CampaignService;
});

//# sourceMappingURL=CampaignService.js.map
