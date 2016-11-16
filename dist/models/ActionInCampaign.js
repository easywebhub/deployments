define(["require", "exports"], function (require, exports) {
    "use strict";
    var ActionInCampaign = (function () {
        function ActionInCampaign(entity) {
            this.Id = entity.Id || 0;
            this.CampaignId = entity.CampaignId;
            this.ActionId = entity.ActionId;
            this.Status = entity.Status;
            this.Description = entity.Description;
            this.ListRoles = entity.ListRoles;
            this.MaximumTotalPlayInDay = entity.MaximumTotalPlayInDay;
            this.MaximumTotalPlayInCampaign = entity.MaximumTotalPlayInCampaign;
        }
        return ActionInCampaign;
    }());
    exports.ActionInCampaign = ActionInCampaign;
});

//# sourceMappingURL=ActionInCampaign.js.map
