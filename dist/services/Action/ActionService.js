var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-fetch-client', '../../services/HttpService'], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1, HttpService_1) {
    "use strict";
    var ActionService = (function () {
        function ActionService(httpService) {
            this.http = httpService.httpInstance;
        }
        ActionService.prototype.GetListAction = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("api/Actions", { method: 'get' }).then(function (response) { return response.json(); }).then(function (data) { resolve(data); }).catch(function (err) { return reject(Error(err)); });
            });
        };
        ActionService.prototype.DetailAction = function (id) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("api/Actions/" + id, { method: 'get' }).then(function (response) { return response.json(); }).then(function (data) { resolve(data); }).catch(function (err) { return reject(Error(err)); });
            });
        };
        ActionService.prototype.UpdateAction = function (meta) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("api/Actions/" + meta.Id, {
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
        ActionService.prototype.CreateAction = function (meta) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("api/Actions", { method: 'post', body: aurelia_fetch_client_1.json(meta) }).then(function (response) { return response.json(); }).then(function (data) { resolve(data); }).catch(function (err) { return reject(Error(err)); });
            });
        };
        ActionService.prototype.DeleteAction = function (id) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("api/Actions/" + id, { method: 'delete' }).then(function (response) { return response.json(); }).then(function (data) { resolve(data); }).catch(function (err) { return reject(Error(err)); });
            });
        };
        ActionService.prototype.UpdateActionInputCoinConfig = function (meta) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("api/action/UpdateActionInputCoinConfig", { method: 'post', body: aurelia_fetch_client_1.json(meta) }).then(function (response) { return response.json(); }).then(function (data) { resolve(data); }).catch(function (err) { return reject(Error(err)); });
            });
        };
        ActionService.prototype.GetActionCoinConfig = function (id) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("api/action/getActionCoinConfigByActionId/" + id, { method: 'get' }).then(function (response) { return response.json(); }).then(function (data) { resolve(data); }).catch(function (err) { return reject(Error(err)); });
            });
        };
        ActionService.prototype.GetListActionGroup = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("api/ActionGroups", { method: 'get' }).then(function (response) { return response.json(); }).then(function (data) { resolve(data); }).catch(function (err) { return reject(Error(err)); });
            });
        };
        ActionService.prototype.GetGroupId = function (id) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("api/ActionGroups/" + id, { method: 'get' }).then(function (response) { return response.json(); }).then(function (data) { resolve(data); }).catch(function (err) { return reject(Error(err)); });
            });
        };
        ActionService.prototype.UpdateActionGroup = function (meta) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("api/ActionGroups/" + meta.Id, { method: 'put', body: aurelia_fetch_client_1.json(meta) }).then(function (data) { resolve(data); }).catch(function (err) { return reject(Error(err)); });
            });
        };
        ActionService.prototype.CreateActionGroup = function (meta) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("api/ActionGroups", { method: 'post', body: aurelia_fetch_client_1.json(meta) }).then(function (response) { return response.json(); }).then(function (data) { resolve(data); }).catch(function (err) { return reject(Error(err)); });
            });
        };
        ActionService.prototype.DeleteActionGroup = function (id) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("api/ActionGroups/" + id, { method: 'delete' }).then(function (response) { return response.json(); }).then(function (data) { resolve(data); }).catch(function (err) { return reject(Error(err)); });
            });
        };
        ActionService.prototype.UpdateListActionByActionGroupId = function (meta) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("api/actiongroup/UpListActionByActionGroupId", { method: 'post', body: aurelia_fetch_client_1.json(meta) }).then(function (response) { return response.json(); }).then(function (data) { resolve(data); }).catch(function (err) { return reject(Error(err)); });
            });
        };
        ActionService.prototype.GetListActionByActionGroupId = function (id) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("api/actiongroup/getListActionByActionGroupId/" + id, { method: 'get' }).then(function (response) { return response.json(); }).then(function (data) { resolve(data); }).catch(function (err) { return reject(Error(err)); });
            });
        };
        ActionService = __decorate([
            aurelia_framework_1.inject(HttpService_1.HttpService),
            aurelia_framework_1.transient(), 
            __metadata('design:paramtypes', [HttpService_1.HttpService])
        ], ActionService);
        return ActionService;
    }());
    exports.ActionService = ActionService;
});

//# sourceMappingURL=ActionService.js.map
