define(["require", "exports"], function (require, exports) {
    "use strict";
    var CampaignMenu = (function () {
        function CampaignMenu() {
        }
        CampaignMenu.prototype.configureRouter = function (config, router) {
            config.map([
                { route: ['', 'CampaignMng'], name: 'CampaignMng', moduleId: '../../viewmodels/CampaignVM/CampaignMng', nav: true, settings: { roles: [] }, title: 'Quản lý Campaign' },
                { route: 'CampaignConfig/:id', name: 'CampaignConfig', moduleId: '../../viewmodels/CampaignVM/CampaignConfig', nav: false, settings: { roles: [] } },
                { route: 'CampaignGiftMng', name: 'CampaignGiftMng', moduleId: '../../viewmodels/CampaignGiftVM/CampaignGiftMng', nav: true, settings: { roles: [] }, title: 'Quản lý CampaignGift' },
                { route: 'CampaignGiftQuantumConfig/:campaignId', name: 'CampaignGiftQuantumConfig', moduleId: '../../viewmodels/CampaignVM/CampaignGiftQuantunConfig/CampaignGiftQuantumConfig', nav: false, settings: { roles: [] }, title: 'Quản lý số lượng CampaignGift' },
                { route: 'ActionInCampaignMng/:campaignId', name: 'ActionInCampaignMng', moduleId: '../../viewmodels/CampaignVM/ActionInCampaignVM/ActionInCampaignMng', nav: false, settings: { roles: [] }, title: 'Cấu hình action' },
                { route: 'HistoryGlance/:CampaignId', name: 'HistoryGlance', moduleId: '../../viewmodels/CampaignVM/HistoryGlance', nav: false, settings: { roles: [] }, title: 'Lịch sử Campaign' }
            ]);
            this.router = router;
        };
        return CampaignMenu;
    }());
    exports.CampaignMenu = CampaignMenu;
});

//# sourceMappingURL=CampaignMenu.js.map
