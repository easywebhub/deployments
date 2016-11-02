define(["require", "exports"], function (require, exports) {
    "use strict";
    var AccountMenu = (function () {
        function AccountMenu() {
        }
        AccountMenu.prototype.configureRouter = function (config, router) {
            config.map([
                { route: ['', 'WebSiteMng'], name: 'WebSiteMng', moduleId: '../../viewmodels/WebSiteVM/WebSiteMng', nav: true, settings: { roles: [] }, title: 'Quản lý WebSite' }
            ]);
            this.router = router;
        };
        return AccountMenu;
    }());
    exports.AccountMenu = AccountMenu;
});

//# sourceMappingURL=WebSiteMenu.js.map
