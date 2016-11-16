var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-dialog', '../../services/CampaignServices/CampaignService', 'aurelia-binding', 'aurelia-validation', '../../resources/bootstrap-validation/bootstrap-form-render'], function (require, exports, aurelia_framework_1, aurelia_dialog_1, CampaignService_1, aurelia_binding_1, aurelia_validation_1, bootstrap_form_render_1) {
    "use strict";
    var CampignDlg = (function () {
        function CampignDlg(dialogController, campaignService, controllerFact) {
            this.controllerFact = controllerFact;
            this.controller = null;
            this.DlgController = dialogController;
            this.campaignService = campaignService;
            this.controller = controllerFact.createForCurrentScope();
            this.controller.addRenderer(new bootstrap_form_render_1.BootstrapFormRenderer());
        }
        Object.defineProperty(CampignDlg.prototype, "Title", {
            get: function () {
                switch (this.Entity.Id) {
                    case 0:
                        return "Thêm mới Campaign";
                    default:
                        return "Cập nhật Campaign";
                }
            },
            enumerable: true,
            configurable: true
        });
        CampignDlg.prototype.activate = function (data) {
            var _this = this;
            console.log('i am from activate');
            this.Entity = data;
            console.log('data dto', data);
            if (this.Entity.Id == 0) {
            }
            else {
            }
            return Promise.all([
                this.campaignService.GetCampaigntypes()
                    .then(function (rs) {
                    _this.CampaignTypes = rs;
                }),
                this.campaignService.GetCampaignGroups()
                    .then(function (rs) {
                    _this.CampaignGroups = rs;
                })
            ]);
        };
        CampignDlg.prototype.attached = function () {
        };
        CampignDlg.prototype.submit = function (Entity) {
            var _this = this;
            this.controller.validate()
                .then(function (v) {
                _this.errors = v.length;
                if (v.length == 0) {
                    _this.DlgController.ok(Entity);
                }
            });
        };
        CampignDlg = __decorate([
            aurelia_framework_1.inject(aurelia_dialog_1.DialogController, CampaignService_1.CampaignService, aurelia_validation_1.ValidationControllerFactory), 
            __metadata('design:paramtypes', [Object, Object, aurelia_validation_1.ValidationControllerFactory])
        ], CampignDlg);
        return CampignDlg;
    }());
    exports.CampignDlg = CampignDlg;
    aurelia_binding_1.declarePropertyDependencies(CampignDlg, "Title", ["Entity"]);
});

//# sourceMappingURL=CampaignDlg.js.map
