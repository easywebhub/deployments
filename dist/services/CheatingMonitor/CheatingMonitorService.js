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
    var CheatingMonitorService = (function () {
        function CheatingMonitorService(httpService) {
            this.http = httpService.httpInstance;
        }
        CheatingMonitorService.prototype.GetLstCheatingVMoney = function (id) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("api/CheatingMonitor/GetLstCheatingVMoney?number=" + id, { method: 'get' }).then(function (response) { return response.json(); }).then(function (data) { resolve(data); }).catch(function (err) { return reject(Error(err)); });
            });
        };
        CheatingMonitorService.prototype.GetLstCheatingVPoint = function (number) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("api/CheatingMonitor/GetLstCheatingVPoint?number=" + number, { method: 'get' }).then(function (response) { return response.json(); }).then(function (data) { resolve(data); }).catch(function (err) { return reject(Error(err)); });
            });
        };
        CheatingMonitorService.prototype.GetLstTransaction = function (meta) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.fetch("api/CheatingMonitor/GetLstTransaction", {
                    method: 'post',
                    body: aurelia_fetch_client_1.json(meta)
                })
                    .then(function (response) {
                    console.log(response);
                    if (response.status == 500) {
                        swal("warning", 'User không có giao dịch', 'warning');
                    }
                    return response.json();
                })
                    .then(function (data) {
                    resolve(data);
                })
                    .catch(function (err) {
                    return reject(Error(err));
                });
            });
        };
        CheatingMonitorService = __decorate([
            aurelia_framework_1.inject(HttpService_1.HttpService),
            aurelia_framework_1.transient(), 
            __metadata('design:paramtypes', [HttpService_1.HttpService])
        ], CheatingMonitorService);
        return CheatingMonitorService;
    }());
    exports.CheatingMonitorService = CheatingMonitorService;
});

//# sourceMappingURL=CheatingMonitorService.js.map
