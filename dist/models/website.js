define(["require", "exports"], function (require, exports) {
    "use strict";
    var CreateWeb = (function () {
        function CreateWeb(entity) {
            this.Name = entity.Name;
            this.DisplayName = entity.DisplayName;
            this.Url = entity.Url;
            this.Accounts = entity.Accounts;
        }
        return CreateWeb;
    }());
    exports.CreateWeb = CreateWeb;
});

//# sourceMappingURL=website.js.map
