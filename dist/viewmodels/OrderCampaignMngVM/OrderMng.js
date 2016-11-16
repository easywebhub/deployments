var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", '../../services/OrderSvc/OrderService', 'aurelia-router'], function (require, exports, aurelia_framework_1, OrderService_1, aurelia_router_1) {
    "use strict";
    var OrderMng = (function () {
        function OrderMng(orderService, router, bindingEngine) {
            var _this = this;
            this.OrderMeta = {};
            this.search = {};
            this.logger = aurelia_framework_1.LogManager.getLogger('OrderMng');
            this.orderService = orderService;
            this.subscriptionchecklst = bindingEngine;
            this.router = router;
            this.OrderMeta.OrderFrom = 0;
            this.OrderMeta.OrderTo = 20;
            this.current = 1;
            this.itemperpage = 10;
            this.pagesize = 5;
            var subscriptioncurrent = bindingEngine.propertyObserver(this, 'current')
                .subscribe(function () {
                _this.OrderMeta.OrderFrom = (_this.current - 1) * 10;
                _this.OrderMeta.OrderTo = (_this.current) * 10;
                _this.activate();
            });
        }
        OrderMng.prototype.activate = function () {
            var _this = this;
            return Promise.all([
                this.orderService.GetOrders(this.OrderMeta)
                    .then(function (rs) {
                    _this.logger.info('SUCCESS LOAD ORDERS');
                    _this.Orders = rs.Data;
                    _this.total = rs.ItemsCount;
                })
            ]);
        };
        OrderMng.prototype.attached = function () {
            $(function () { $('[data-toggle="tooltip"]').tooltip(); });
        };
        OrderMng.prototype.doSubmit = function () {
            this.activate();
        };
        OrderMng.prototype.GoToOrderDetail = function (orderId) {
            $('#tt' + orderId).tooltip('destroy');
            this.router.navigateToRoute('Order', { campaignGiftOutputId: 0, OrderId: orderId });
        };
        OrderMng = __decorate([
            aurelia_framework_1.inject(OrderService_1.OrderService, aurelia_router_1.Router, aurelia_framework_1.BindingEngine), 
            __metadata('design:paramtypes', [Object, Object, Object])
        ], OrderMng);
        return OrderMng;
    }());
    exports.OrderMng = OrderMng;
});

//# sourceMappingURL=OrderMng.js.map
