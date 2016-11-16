define(["require", "exports", 'aurelia-validation'], function (require, exports, aurelia_validation_1) {
    "use strict";
    var Campaign = (function () {
        function Campaign(DTO) {
            this.Id = DTO.Id || 0;
            this.Type = DTO.Type;
            this.CodeName = DTO.CodeName;
            this.Name = DTO.Name;
            this.Title = DTO.Title;
            this.Description = DTO.Description;
            this.Content = DTO.Content;
            this.Policies = DTO.Policies;
            this.Guide = DTO.Guide;
            this.NumberValue = DTO.NumberValue;
            this.ImagePath = DTO.ImagePath;
            this.ImagePathMobile = DTO.ImagePathMobile;
            this.WaitingImagePath = DTO.WaitingImagePath;
            this.RunningImagePath = DTO.RunningImagePath;
            this.EndedImagePath = DTO.EndedImagePath;
            this.NotAllowedDevice = DTO.NotAllowedDevice;
            this.ShowTime = DTO.ShowTime || new Date();
            this.StartTime = DTO.StartTime || new Date();
            this.EndTime = DTO.EndTime || new Date();
            this.Status = DTO.Status;
            this.IsFeatured = DTO.IsFeatured;
            this.Link = DTO.Link;
            this.LinkTarget = DTO.LinkTarget;
            this.Group = DTO.Group;
            this.Priority = DTO.Priority;
            this.ViewCount = DTO.ViewCount;
            this.LikeCount = DTO.LikeCount;
            this.ListRoles = DTO.ListRoles;
            this.CampaignInRoles = DTO.CampaignInRoles;
            this.PrioritySettings = DTO.PrioritySettings;
            this.ActionInCampaigns = DTO.ActionInCampaigns;
            this.CampaignGiftOutputs = DTO.CampaignGiftOutputs;
            this.CampaignGiftQuantumConfigs = DTO.CampaignGiftQuantumConfigs;
            this.CampaignOutputs = DTO.CampaignGiftOutputs;
        }
        return Campaign;
    }());
    exports.Campaign = Campaign;
    aurelia_validation_1.ValidationRules
        .ensure(function (x) { return x.Type; }).required()
        .ensure((function (x) { return x.Name; })).required()
        .ensure(function (x) { return x.StartTime; }).required()
        .ensure(function (x) { return x.EndTime; }).required().
        on(Campaign);
});

//# sourceMappingURL=Campaign.js.map
