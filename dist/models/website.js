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
    var CreateRoleWeb = (function () {
        function CreateRoleWeb(entity) {
            this.AccountId = entity.AccountId;
            this.WebsiteId = entity.WebsiteId;
            this.WebsiteDisplayName = entity.WebsiteDisplayName;
            this.AccessLevel = entity.AccessLevel;
        }
        return CreateRoleWeb;
    }());
    exports.CreateRoleWeb = CreateRoleWeb;
});

//# sourceMappingURL=website.js.map
