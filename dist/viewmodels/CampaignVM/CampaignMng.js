var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', '../../services/CampaignServices/CampaignService', 'aurelia-router', 'aurelia-dialog', '../../welcome', '../../models/campaign', './CampaignDlg', 'aurelia-event-aggregator'], function (require, exports, aurelia_framework_1, CampaignService_1, aurelia_router_1, aurelia_dialog_1, welcome_1, campaign_1, CampaignDlg_1, aurelia_event_aggregator_1) {
    "use strict";
    var CampaignMng = (function () {
        function CampaignMng(campaignService, dialogService, router, registrationForm, eventAggregator, bindingEngine) {
            this.filter = {};
            this.current = 1;
            this.itemperpage = 15;
            this.pagesize = 5;
            this.campaignService = campaignService;
            this.logger = aurelia_framework_1.LogManager.getLogger('CampaignMng');
            this.dialogService = dialogService;
            this.theRouter = router;
            registrationForm.firstName = "tung";
            registrationForm.lastName = "pham";
            this.registrationForm = registrationForm;
            this.eventAggregator = eventAggregator;
            this.bindingEngine = bindingEngine;
            console.log('registrationForm', this.registrationForm);
            console.log('eventAggregator', this.eventAggregator);
            console.log('router', this.theRouter);
        }
        CampaignMng.prototype.bind = function (ct, ovr) {
            console.log('context', ct);
            ovr.bindingContext.total = this.total;
        };
        CampaignMng.prototype.activate = function () {
            var _this = this;
            console.log('campaign : ', new campaign_1.Campaign({}));
            return Promise.all([
                this.campaignService.GetCampaigns().then(function (rs) {
                    _this.logger.info('Load GetCampaignsByMeta SUCCESS ');
                    _this.Campaigns = rs;
                    _this.total = rs.length;
                }),
                this.campaignService.GetCampaignGroups().then(function (rs) {
                    _this.CampaignGroups = rs;
                }),
                this.campaignService.GetCampaigntypes().then(function (rs) {
                    _this.CampaignTypes = rs;
                })
            ]);
        };
        CampaignMng.prototype.attached = function () {
        };
        CampaignMng.prototype.updateCampaign = function (campaign) {
            var _this = this;
            this.dialogService.open({ viewModel: CampaignDlg_1.CampignDlg, model: new campaign_1.Campaign(campaign) }).then(function (result) {
                if (!result.wasCancelled) {
                    console.log('good');
                    console.log(result.output);
                    _this.campaignService.Save(result.output).then(function (res) {
                        console.log('Save response: ', res);
                        if (res.status == 204) {
                            swal({ title: "Cập nhật", text: "Cập nhật Campaign thành công", timer: 4000, showConfirmButton: true, type: "success" });
                        }
                        else {
                            swal('Cập nhật', 'Cập nhật Campaign không thất bại', 'error');
                        }
                    });
                }
                else {
                    console.log('bad');
                }
            });
        };
        CampaignMng.prototype.create = function () {
            var _this = this;
            var model = new campaign_1.Campaign({});
            this.dialogService.open({ viewModel: CampaignDlg_1.CampignDlg, model: model }).then(function (result) {
                if (!result.wasCancelled) {
                    console.log('good');
                    console.log(result.output);
                    _this.campaignService.Save(result.output).then(function (res) {
                        console.log('Save response: ', res);
                    });
                }
                else {
                    console.log('bad');
                }
            });
        };
        CampaignMng.prototype.quantumConfig = function (cp) {
            this.theRouter.navigateToRoute("CampaignGiftQuantumConfig", { campaignId: cp.Id });
        };
        CampaignMng.prototype.ActionInCampaign = function (cp) {
            this.theRouter.navigateToRoute("ActionInCampaignMng", { campaignId: cp.Id });
        };
        CampaignMng.prototype.deleteCampign = function (cp) {
            var _this = this;
            swal({
                title: "Bạn chắc chắn không?",
                text: "Xóa campaign",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, Xóa",
                cancelButtonText: "No, Quay lại",
                closeOnConfirm: false,
                closeOnCancel: false
            }, function (isConfirm) {
                if (isConfirm) {
                    _this.campaignService.DeleteCampaigns(cp.Id)
                        .then(function (rs) {
                        swal("Deleted!", "X\u00F3a th\u00E0nh c\u00F4ng c\u1EA5u h\u00ECnh Campaign", "success");
                        _this.activate();
                    });
                }
                else {
                    swal("Cancelled", "Cancelled", "error");
                }
            });
        };
        CampaignMng.prototype.detailCampign = function (cp) {
            var htmlcontent = '<hr>' +
                '<dl class="dl-horizontal">' +
                '<dt>Tiêu đề</dt><dd>' + cp.Title + '</dd>' +
                '<dt>Thời gian bắt đầu</dt><dd>' + cp.StartTime + '</dd>' +
                '<dt>Thời gian kết thúc</dt><dd>' + cp.EndTime + '</dd>' +
                '<dt>Trạng thái</dt><dd>' + cp.Status + '</dd>' +
                '<dt>Nhóm</dt><dd>' + cp.Group + '</dd>' +
                '<dt>Type</dt><dd>' + cp.Type + '</dd>' +
                '</dl></br><hr>';
            swal({
                title: "Xem chi tiết Campaign",
                text: htmlcontent,
                html: true,
                showCancelButton: true,
                showConfirmButton: false,
            });
        };
        CampaignMng.prototype.historyToCampign = function (cp) {
            console.log('test', cp);
            this.theRouter.navigateToRoute("HistoryGlance", { CampaignId: cp.Id });
        };
        CampaignMng = __decorate([
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [CampaignService_1.CampaignService, aurelia_dialog_1.DialogService, aurelia_router_1.Router, welcome_1.RegistrationForm, aurelia_event_aggregator_1.EventAggregator, aurelia_framework_1.BindingEngine])
        ], CampaignMng);
        return CampaignMng;
    }());
    exports.CampaignMng = CampaignMng;
    var FilterValueConverter = (function () {
        function FilterValueConverter() {
        }
        FilterValueConverter.prototype.toView = function (arr, filter) {
            console.log("filter: ", filter);
            if (typeof filter === 'object') {
                if (filter.Title) {
                    arr = arr.filter(function (x) { return x.Title.toUpperCase().indexOf(filter.Title.toUpperCase()) != -1; });
                }
                if (filter.Type) {
                    arr = arr.filter(function (x) { return x.Type == filter.Type; });
                }
                if (filter.Group) {
                    arr = arr.filter(function (x) { return x.Group == filter.Group; });
                }
            }
            return arr;
        };
        return FilterValueConverter;
    }());
    exports.FilterValueConverter = FilterValueConverter;
});

//# sourceMappingURL=CampaignMng.js.map
