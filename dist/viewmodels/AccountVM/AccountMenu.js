define(["require", "exports"], function (require, exports) {
    "use strict";
    var AccountMenu = (function () {
        function AccountMenu() {
        }
        AccountMenu.prototype.configureRouter = function (config, router) {
            config.map([
                { route: ['', 'UserMng'], name: 'UserMng', moduleId: '../../viewmodels/AccountVM/UserMng', nav: true, settings: { roles: [] }, title: 'Quản lý User' }
            ]);
            this.router = router;
        };
        return AccountMenu;
    }());
    exports.AccountMenu = AccountMenu;
});

//# sourceMappingURL=AccountMenu.js.map
