var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-dialog', '../../viewmodels/OrderCampaignMngVM/OrderDlg', '../../services/CampaignServices/CampaignService', '../../services/CampaignServices/CampaignGiftOutputService', '../../services/OrderSvc/OrderService', '../../services/appState', 'aurelia-router', 'lodash'], function (require, exports, aurelia_framework_1, aurelia_dialog_1, OrderDlg_1, CampaignService_1, CampaignGiftOutputService_1, OrderService_1, appState_1, aurelia_router_1, _) {
    "use strict";
    var CampaignGiftOutputExporter = (function () {
        function CampaignGiftOutputExporter(campaignService, campaignGiftOutputService, bindingEngine, dialogService, orderService, appState, router) {
            var _this = this;
            this.CampaignGiftOutputsCount = 50;
            this.campaignGiftOutputMeta = new CampaignGiftOutputService_1.CampaignGiftOutputMeta();
            this.itemperpage = 10;
            this.pagesize = 6;
            this.current = 1;
            this.campaignService = campaignService;
            this.router = router;
            this.appState = appState;
            this.logger = aurelia_framework_1.LogManager.getLogger('CampaignGiftOutputExporter');
            this.dialogService = dialogService;
            this.orderService = orderService;
            this.campaignGiftOutputService = campaignGiftOutputService;
            var subscriptionCampaign = bindingEngine.propertyObserver(this, 'selectedCampaign')
                .subscribe(function (newValue, oldValue) {
                if (newValue) {
                    _this.activate();
                }
            });
            var currentWatcher = bindingEngine.propertyObserver(this, 'current')
                .subscribe(function (newValue, oldValue) {
                _this.activate();
            });
            bindingEngine.propertyObserver(this, 'selectedCampaignGroup')
                .subscribe(function (newValue, oldValue) {
                if (newValue) {
                }
            });
        }
        CampaignGiftOutputExporter.prototype.activate = function () {
            var _this = this;
            this.setMetaFromTo();
            return Promise.all([
                this.Campaigns || this.campaignService.GetCampaigns().then(function (res) {
                    _this.Campaigns = res;
                    _this.CampaignGroups = _.uniqBy(Array.from(res), function (x) { return x.Group; }).map(function (o) { return o.Group; });
                    _this.CampaignTypes = _.uniqBy(Array.from(res), function (x) { return x.Type; }).map(function (o) { return o.Type; });
                }),
                this.StoreVta || this.orderService.GetStoreVta()
                    .then(function (rs) {
                    _this.StoreVta = rs;
                }),
                this.campaignGiftOutputService.GetCampaignGiftOutPutsByMeta(this.campaignGiftOutputMeta)
                    .then(function (rs) {
                    _this.CampaignGiftOutputsCount = rs.ItemsCount;
                    _this.CampaignGiftOutputs = rs.Data;
                })
            ]);
        };
        CampaignGiftOutputExporter.prototype.setMetaFromTo = function () {
            this.campaignGiftOutputMeta.EntityFrom = (this.current - 1) * this.itemperpage;
            this.campaignGiftOutputMeta.EntityTo = this.current * this.itemperpage;
        };
        CampaignGiftOutputExporter.prototype.bind = function (bindingContext, overrideContext) {
            overrideContext.bindingContext.total = this.CampaignGiftOutputsCount;
        };
        CampaignGiftOutputExporter.prototype.attached = function () {
        };
        CampaignGiftOutputExporter.prototype.loadCampaignGiftOutput = function (campaignId) {
        };
        CampaignGiftOutputExporter.prototype.CreatOrder = function (campaignGiftOutput) {
            var _this = this;
            console.log('campaignGiftOutput ', campaignGiftOutput);
            var order = {};
            order.Id = 0;
            order.OrderCampaignGiftDetails = [];
            order.OrderCampaignGiftDetails.push({ CampaignGiftOutput: campaignGiftOutput });
            this.dialogService.open({ viewModel: OrderDlg_1.OrderDlg, model: { Order: order } }).then(function (result) {
                if (!result.wasCancelled) {
                    _this.logger.info('result.output', result.output);
                    var order_1 = {};
                    order_1.IsCreate = true;
                    order_1 = result.output.Order;
                    order_1.IsUpdate = true;
                    order_1.OrderCampaignGiftDetails = [];
                    order_1.OrderCampaignGiftDetails.push({
                        CampaignGiftId: campaignGiftOutput.CampaignGiftId,
                        Amount: 1,
                        CampaignGiftOutputId: campaignGiftOutput.Id,
                    });
                    order_1.UserId = _this.appState.UserInfo.UserModel.UserId;
                    _this.orderService.CreateOrUpdateOrder(order_1)
                        .then(function (rs) {
                        if (rs.Result === true) {
                            _this.loadCampaignGiftOutput(_this.selectedCampaign);
                            swal('SUCCESS', 'Tạo phiếu xuất thành công', 'success');
                            _this.router.navigateToRoute('Order', { campaignGiftOutputId: campaignGiftOutput.Id, OrderId: 0 });
                        }
                        else {
                            swal('Error', 'Tạo phiếu xuất không thành công', 'error');
                        }
                    });
                }
                else {
                }
            });
        };
        CampaignGiftOutputExporter.prototype.GotoOrderDetail = function (campaignGiftOutput) {
            this.router.navigateToRoute('Order', { campaignGiftOutputId: campaignGiftOutput.Id, OrderId: 0 });
        };
        CampaignGiftOutputExporter = __decorate([
            aurelia_framework_1.inject(CampaignService_1.CampaignService, CampaignGiftOutputService_1.CampaignGiftOutputService, aurelia_framework_1.BindingEngine, aurelia_dialog_1.DialogService, OrderService_1.OrderService, appState_1.AppState, aurelia_router_1.Router), 
            __metadata('design:paramtypes', [Object, Object, Object, Object, Object, Object, Object])
        ], CampaignGiftOutputExporter);
        return CampaignGiftOutputExporter;
    }());
    exports.CampaignGiftOutputExporter = CampaignGiftOutputExporter;
    var CampaignGiftOutputStatusValueConverter = (function () {
        function CampaignGiftOutputStatusValueConverter() {
        }
        CampaignGiftOutputStatusValueConverter.prototype.toView = function (str) {
            {
                switch (str) {
                    case 'DAXUAT':
                        return 'Đã tạo phiếu xuất';
                    case 'CHUAXUAT':
                        return 'Chưa tạo phiếu xuất';
                    default:
                        return 'Chưa xử lý';
                }
            }
        };
        return CampaignGiftOutputStatusValueConverter;
    }());
    exports.CampaignGiftOutputStatusValueConverter = CampaignGiftOutputStatusValueConverter;
    var FilterValueConverter = (function () {
        function FilterValueConverter() {
        }
        FilterValueConverter.prototype.toView = function (arr, objFilter) {
            if (objFilter.Status) {
                if (objFilter.Status === 'CHUAXULY') {
                    arr = arr.filter(function (x) { return x.Status === null; });
                    return arr;
                }
                arr = arr.filter(function (x) { return x.Status === objFilter.Status; });
            }
            if (objFilter.FullName) {
                arr = arr.filter(function (x) { return x.User.FullName && x.User.FullName.toUpperCase().indexOf(objFilter.FullName.toUpperCase()) > -1; });
            }
            if (objFilter.PhoneNumber) {
                console.log('PhoneNumber', objFilter.PhoneNumber);
                arr = arr.filter(function (x) { return x.User.PhoneNumber && x.User.PhoneNumber.indexOf(objFilter.PhoneNumber) != -1; });
            }
            if (objFilter.Email) {
                arr = arr.filter(function (x) { return x.User.Email && x.User.Email === objFilter.Email; });
            }
            if (objFilter.PersonalId) {
                arr = arr.filter(function (x) { return x.User.PersonalId && (parseInt(x.User.PersonalId) == parseInt(objFilter.PersonalId)); });
            }
            if (objFilter.CampiagnId) {
                arr = arr.filter(function (x) { return x.CampaignId == objFilter.CampaignId; });
            }
            if (objFilter.DateFrom && objFilter.DateTo) {
                if (objFilter.DateFrom > objFilter.DateTo) {
                    swal("Warning", "Hãy nhập đúng ngày tìm kiếm ", "warning");
                }
                arr = arr.filter(function (x) {
                    return objFilter.DateFrom <= objFilter.DateTo && objFilter.DateTo >= x.CreateDate && objFilter.DateFrom <= x.CreateDate;
                });
            }
            return arr;
        };
        return FilterValueConverter;
    }());
    exports.FilterValueConverter = FilterValueConverter;
    var CampaignGroupFilterValueConverter = (function () {
        function CampaignGroupFilterValueConverter() {
        }
        CampaignGroupFilterValueConverter.prototype.toView = function (arr, cp) {
            if (cp) {
                arr = arr.filter(function (x) { return x.Group == cp; });
            }
            return arr;
        };
        return CampaignGroupFilterValueConverter;
    }());
    exports.CampaignGroupFilterValueConverter = CampaignGroupFilterValueConverter;
});

//# sourceMappingURL=CampaignGiftOutputExporter.js.map
