define(["require", "exports"], function (require, exports) {
    "use strict";
    var CheatingMonitor = (function () {
        function CheatingMonitor() {
        }
        CheatingMonitor.prototype.configureRouter = function (config, router) {
            this.id = 0;
            config.map([
                { route: ['', 'TopUser'], name: 'CampaignMng', moduleId: '../../viewmodels/CheatingMonitorVM/TopUser', nav: true, settings: { roles: [] }, title: 'Quản lý cheating' },
                { route: 'UsersTransaction/:userId', name: 'UsersTransaction', moduleId: '../../viewmodels/CheatingMonitorVM/UsersTransaction', nav: true, settings: { roles: [] }, title: 'Quản lý giao dịch', href: 'CheatingMonitorMenu/UsersTransaction/0' },
            ]);
            this.router = router;
            this.router.refreshNavigation();
        };
        return CheatingMonitor;
    }());
    exports.CheatingMonitor = CheatingMonitor;
});

//# sourceMappingURL=CheatingMonitorMenu.js.map
