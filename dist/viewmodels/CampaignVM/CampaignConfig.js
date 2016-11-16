var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', '../../services/CampaignServices/CampaignService'], function (require, exports, aurelia_framework_1, CampaignService_1) {
    "use strict";
    var CampaignConfig = (function () {
        function CampaignConfig(campaignService) {
            this.campaignService = campaignService;
            this.campaignService = campaignService;
        }
        CampaignConfig.prototype.activate = function (paras) {
            var _this = this;
            console.log('paras', paras);
            return Promise.all([
                this.campaignService.GetCampaignQuantumConfigs({ CampaignId: paras.id })
                    .then(function (rs) {
                    _this.CampaignGiftQuantumConfig = rs;
                })
            ]);
        };
        CampaignConfig.prototype.attached = function () {
        };
        CampaignConfig = __decorate([
            aurelia_framework_1.inject(CampaignService_1.CampaignService), 
            __metadata('design:paramtypes', [CampaignService_1.CampaignService])
        ], CampaignConfig);
        return CampaignConfig;
    }());
    exports.CampaignConfig = CampaignConfig;
});

//# sourceMappingURL=CampaignConfig.js.map
