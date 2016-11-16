var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', '../../services/Account/LoggingServices'], function (require, exports, aurelia_framework_1, LoggingServices_1) {
    "use strict";
    var Logging = (function () {
        function Logging(loggingServices, bindingEngine) {
            var _this = this;
            this.loggingServices = loggingServices;
            this.logger = aurelia_framework_1.LogManager.getLogger('logging: Container: ', aurelia_framework_1.Container.instance);
            this.itemperpage = 10;
            this.pagesize = 6;
            this.current = 1;
            this.meta = {};
            this.meta.From = this.itemperpage * (this.current - 1);
            this.meta.Take = this.itemperpage;
            var subscriptioncurrent = bindingEngine.propertyObserver(this, 'current')
                .subscribe(function () {
                _this.getData();
            });
        }
        Logging.prototype.activate = function () {
            var _this = this;
            this.meta.From = this.itemperpage * (this.current - 1);
            this.meta.Take = this.itemperpage;
            return Promise.all([this.loggingServices.GetListLogging(this.meta)]).
                then(function (rs) {
                _this.listLogging = rs[0];
                _this.total = _this.listLogging[0].count;
            });
        };
        Logging.prototype.getData = function () {
            this.activate();
        };
        ;
        Logging.prototype.searchBy = function () {
            if (this.meta) {
                this.activate();
            }
        };
        Logging = __decorate([
            aurelia_framework_1.inject(LoggingServices_1.LoggingServices, aurelia_framework_1.BindingEngine), 
            __metadata('design:paramtypes', [Object, Object])
        ], Logging);
        return Logging;
    }());
    exports.Logging = Logging;
});

//# sourceMappingURL=Logging.js.map
