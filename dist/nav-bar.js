define(["require", "exports"], function (require, exports) {
    "use strict";
    var navbar = (function () {
        function navbar() {
        }
        navbar.prototype.activate = function () {
            this.checkNav = Lockr.get('UserInfo');
            console.log('this.nav', this.checkNav);
        };
        return navbar;
    }());
    exports.navbar = navbar;
});

//# sourceMappingURL=nav-bar.js.map
