define(["require", "exports"], function (require, exports) {
    "use strict";
    var ActionMenu = (function () {
        function ActionMenu() {
        }
        ActionMenu.prototype.configureRouter = function (config, router) {
            config.map([
                { route: ['', 'ActionMng'], name: 'ActionMng', moduleId: '../../viewmodels/ActionVM/ActionMng', nav: true, settings: { roles: [] }, title: 'Quản lý Action' },
                { route: 'ActionGroupMng', name: 'ActionGroupMng', moduleId: '../../viewmodels/ActionGroupVM/ActionGroupMng', nav: true, settings: { roles: [] }, title: 'Quản lý Action Group' }
            ]);
            this.router = router;
        };
        return ActionMenu;
    }());
    exports.ActionMenu = ActionMenu;
});

//# sourceMappingURL=ActionMenu.js.map
