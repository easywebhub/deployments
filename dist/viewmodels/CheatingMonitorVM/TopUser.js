var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', '../../services/CheatingMonitor/CheatingMonitorService', 'aurelia-router'], function (require, exports, aurelia_framework_1, CheatingMonitorService_1, aurelia_router_1) {
    "use strict";
    var TopUser = (function () {
        function TopUser(cheatingMonitorService, router) {
            this.pendding = true;
            this.cheatingMonitorService = cheatingMonitorService;
            this.router = router;
            this.itemperpage = 10;
            this.pagesize = 6;
            this.current = 1;
            this.meta = {};
            this.meta.From = this.itemperpage * (this.current - 1);
            this.meta.Take = this.itemperpage;
            this.selectNumber = 5;
            this.selectData = "Vmoney";
        }
        TopUser.prototype.activate = function () {
        };
        TopUser.prototype.search = function () {
            var _this = this;
            this.pendding = !this.pendding;
            if (this.selectData == "Vmoney") {
                console.log(this.selectData, this.selectNumber);
                return Promise.all([this.cheatingMonitorService.GetLstCheatingVMoney(this.selectNumber)]).then(function (rs) {
                    _this.pendding = !_this.pendding;
                    _this.listTopUser = rs[0];
                    console.log('list', rs[0]);
                    _this.total = rs[0].length;
                    console.log('selectData', _this.total);
                    console.log('selectData', _this.selectData);
                    console.log('number', _this.selectNumber);
                });
            }
            else if (this.selectData == "Vpoint") {
                return Promise.all([this.cheatingMonitorService.GetLstCheatingVPoint(this.selectNumber)]).then(function (rs) {
                    _this.pendding = !_this.pendding;
                    _this.listTopUser = rs[0];
                    console.log('list', rs[0]);
                    _this.total = rs[0].length;
                    console.log('selectData', _this.selectData);
                    console.log('number', _this.selectNumber);
                });
            }
        };
        TopUser.prototype.routerToUser = function (item) {
            this.router.navigate("#/CheatingMonitorMenu/UsersTransaction/" + item.LOYUserId);
        };
        TopUser = __decorate([
            aurelia_framework_1.inject(CheatingMonitorService_1.CheatingMonitorService, aurelia_router_1.Router), 
            __metadata('design:paramtypes', [Object, Object])
        ], TopUser);
        return TopUser;
    }());
    exports.TopUser = TopUser;
});

//# sourceMappingURL=TopUser.js.map
