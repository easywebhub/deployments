define(["require", "exports"], function (require, exports) {
    "use strict";
    var OrderCampaignMenu = (function () {
        function OrderCampaignMenu() {
        }
        OrderCampaignMenu.prototype.configureRouter = function (config, router) {
            config.map([
                { route: ['', 'cpgouput'], name: 'cpgouput', moduleId: '../../viewmodels/OrderCampaignMngVM/CampaignGiftOutputExporter', nav: true, settings: { roles: [] }, title: 'Quản lý quà trúng' },
                { route: 'OrderMng', name: 'OrderMng', moduleId: '../../viewmodels/OrderCampaignMngVM/OrderMng', nav: true, settings: { roles: [] }, title: 'Quản lý Đơn hàng' },
                { route: 'Order/:campaignGiftOutputId/:OrderId', name: 'Order', moduleId: '../../viewmodels/OrderCampaignMngVM/Order', nav: false, settings: { roles: [] }, title: 'Chi tiết' },
                { route: 'OrderDetailByOrderId/:Id', name: 'OrderDetailByOrderId', moduleId: '../../viewmodels/OrderCampaignMngVM/OrderDetailByOrderId', nav: false, settings: { roles: [] } },
                { route: 'CampaignOutputMng', name: 'CampaignOutputMng', moduleId: '../../viewmodels/OrderCampaignMngVM/CampaignOutputMng', nav: true, settings: { roles: [] }, title: 'Quản lý mã trúng thưởng' }
            ]);
            this.router = router;
        };
        return OrderCampaignMenu;
    }());
    exports.OrderCampaignMenu = OrderCampaignMenu;
});

//# sourceMappingURL=OrderCampaignMenu.js.map
