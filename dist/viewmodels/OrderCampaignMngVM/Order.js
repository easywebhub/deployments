var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '../../services/OrderSvc/OrderService', 'aurelia-framework', 'aurelia-dialog', '../../viewmodels/OrderCampaignMngVM/OrderDlg', '../../services/appState', 'aurelia-router'], function (require, exports, OrderService_1, aurelia_framework_1, aurelia_dialog_1, OrderDlg_1, appState_1, aurelia_router_1) {
    "use strict";
    var STATUS = { success: 'SUCCESS', toPos: 'TOPOS', cancel: 'CANCEL', pending: 'PENDING' };
    var Order = (function () {
        function Order(orderService, dialogService, orderDlg, appState, router) {
            this._canToPos = false;
            this._canUpdate = false;
            this._canSetSuccess = false;
            this._canCancel = false;
            this.logger = aurelia_framework_1.LogManager.getLogger('Order');
            this.orderService = orderService;
            this.dialogService = dialogService;
            this.orderDlg = orderDlg;
            this.appState = appState;
            this.router = router;
        }
        Order.prototype.activate = function (paras) {
            var _this = this;
            this.paras = paras;
            this.campaignGiftOutputId = paras.campaignGiftOutputId;
            this.OrderId = paras.OrderId;
            if (paras.OrderId != 0) {
                return Promise.all([
                    this.orderService.GetOrderByOrderId(paras.OrderId)
                        .then(function (rs) {
                        _this.Order = rs;
                    }),
                    this.orderService.GetStoreVta().then(function (rs) {
                        _this.StoreVta = rs;
                    })
                ]);
            }
            else if (paras.campaignGiftOutputId != 0) {
                return Promise.all([
                    this.orderService.GetOrderByCampaignGiftOutputId(paras.campaignGiftOutputId)
                        .then(function (rs) {
                        _this.Order = rs;
                    }),
                    this.orderService.GetStoreVta().
                        then(function (rs) {
                        _this.StoreVta = rs;
                    })
                ]);
            }
        };
        Order.prototype.OrderToPos = function (order) {
            var _this = this;
            if (!order.OrderCampaignGiftDetails[0].StoreCode || !order.OrderCampaignGiftDetails[0].ProductCode) {
                swal('Warning', 'Đơn hàng không có mã sản phẩm và mã kho không đẩy được POS', 'warning');
                return;
            }
            this.orderService.OrderToPos(order.Id)
                .then(function (rs) {
                if (rs.Result == true) {
                    swal("Thành công", "Chuyển đơn hàng thành công", "success");
                    _this.activate(_this.paras);
                }
                else {
                    swal("Lỗi", "Chuyển đơn hàng không thành công", "error");
                }
            });
        };
        Order.prototype.CancelOrder = function (orderId) {
            var _this = this;
            this.orderService.CancelOrder(orderId)
                .then(function (rs) {
                if (rs.Result == true) {
                    swal("Thành công", "Hủy đơn hàng thành công", "success");
                    _this.router.navigateToRoute('OrderCampaignMenu');
                }
                else {
                    swal("Error", "Hủy đơn hàng thành công", "error");
                }
            });
        };
        Order.prototype.UpdateOrderDetail = function (campaignGiftOutput) {
            var _this = this;
            this.dialogService.open({ viewModel: OrderDlg_1.OrderDlg, model: { CampaignGiftOutput: campaignGiftOutput } }).then(function (result) {
                if (!result.wasCancelled) {
                    _this.logger.info('result.output', result.output);
                    var order = {};
                    order = result.output.Order;
                    order.IsUpdate = true;
                    order.Id = _this.Order.Id;
                    order.OrderCampaignGiftDetails = [];
                    order.OrderCampaignGiftDetails.push({
                        CampaignGiftId: result.output.CampaignGift.Id,
                        Amount: 1,
                        CampaignGiftOutputId: campaignGiftOutput.CampaignGiftOutputId,
                        OrderId: _this.Order.Id
                    });
                    order.UserId = _this.appState.UserInfo.UserModel.UserId;
                    _this.orderService.CreateOrUpdateOrder(order)
                        .then(function (rs) {
                        if (rs.Result == true) {
                            _this.activate(_this.paras);
                            swal("Thành công", "Đơn hàng cập nhật thành công", "success");
                        }
                        else {
                            swal("Lỗi", "Đơn hàng cập nhật không thành công", "error");
                        }
                    });
                }
                else {
                }
            });
        };
        Order.prototype.UpdateOrder = function () {
            var _this = this;
            console.log('this,Order: ', this.Order);
            var campaignGiftOutputId = this.Order.OrderCampaignGiftDetails[0].CampaignGiftOutputId;
            this.dialogService.open({ viewModel: OrderDlg_1.OrderDlg, model: { Order: this.Order } }).then(function (result) {
                if (!result.wasCancelled) {
                    _this.logger.info('result.output', result.output);
                    var order = {};
                    order = result.output.Order;
                    order.IsUpdate = true;
                    order.Id = _this.Order.Id;
                    order.OrderCampaignGiftDetails = [];
                    order.OrderCampaignGiftDetails.push({
                        CampaignGiftId: result.output.CampaignGift.CampaignGiftId,
                        Amount: 1,
                        CampaignGiftOutputId: campaignGiftOutputId,
                        OrderId: _this.Order.Id
                    });
                    order.UserId = _this.appState.UserInfo.UserModel.UserId;
                    _this.orderService.CreateOrUpdateOrder(order)
                        .then(function (rs) {
                        if (rs.Result == true) {
                            _this.activate(_this.paras);
                            swal("Thành công", "Đơn hàng cập nhật thành công", "success");
                        }
                        else {
                            swal("Lỗi", "Đơn hàng cập nhật không thành công", "error");
                        }
                    });
                }
                else {
                }
            });
        };
        Order.prototype.SetSucessOrder = function () {
            var _this = this;
            var order = this.Order;
            if (!order.OrderCampaignGiftDetails[0].StoreCode || !order.OrderCampaignGiftDetails[0].ProductCode) {
                swal('Warning', 'Hành động không hợp lệ, hãy kiếm tra lại đơn hàng', 'warning');
                return;
            }
            order.status = 'SUCCESS';
            this.orderService.CreateOrUpdateOrder(order)
                .then(function (rs) {
                if (rs.Result == true) {
                    _this.activate(_this.paras);
                    swal("Thành công", "Đơn hàng cập nhật trạng thái 'SUCCESS' thành công", "success");
                }
                else {
                    swal("Lỗi", "Thực hiện không thành công", "error");
                }
            });
        };
        Object.defineProperty(Order.prototype, "CanToPos", {
            get: function () {
                var status = this.Order.Status;
                if (status == STATUS.success || status == STATUS.cancel || status == STATUS.toPos) {
                    this._canToPos = true;
                }
                return this._canToPos;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Order.prototype, "CanUpdate", {
            get: function () {
                var status = this.Order.Status;
                if (status == STATUS.success || status == STATUS.cancel) {
                    this._canUpdate = true;
                }
                return this._canUpdate;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Order.prototype, "CanSetSuccess", {
            get: function () {
                var status = this.Order.Status;
                if (status == STATUS.success || status == STATUS.cancel) {
                    this._canSetSuccess = true;
                }
                return this._canSetSuccess;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Order.prototype, "CanCancel", {
            get: function () {
                var status = this.Order.Status;
                if (status == STATUS.success || status == STATUS.cancel) {
                    this._canCancel = true;
                }
                return this._canCancel;
            },
            enumerable: true,
            configurable: true
        });
        Order = __decorate([
            aurelia_framework_1.inject(OrderService_1.OrderService, aurelia_dialog_1.DialogService, OrderDlg_1.OrderDlg, appState_1.AppState, aurelia_router_1.Router), 
            __metadata('design:paramtypes', [Object, Object, Object, Object, Object])
        ], Order);
        return Order;
    }());
    exports.Order = Order;
    var FilterStoreCodeValueConverter = (function () {
        function FilterStoreCodeValueConverter() {
        }
        FilterStoreCodeValueConverter.prototype.toView = function (arr, storeCode) {
            if (typeof arr != 'undefined' && storeCode) {
                return arr.filter(function (x) { return x.MACS == storeCode; })[0].Diachi;
            }
            else
                return 'không xác định';
        };
        return FilterStoreCodeValueConverter;
    }());
    exports.FilterStoreCodeValueConverter = FilterStoreCodeValueConverter;
});

//# sourceMappingURL=Order.js.map
