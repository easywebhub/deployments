var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-dialog', '../../services/CampaignServices/CampaignService', '../../services/ordersvc/orderservice'], function (require, exports, aurelia_framework_1, aurelia_dialog_1, CampaignService_1, orderservice_1) {
    "use strict";
    var OrderDlg = (function () {
        function OrderDlg(dialogController, campaignService, orderService) {
            this.data = {};
            this.order = {};
            this.campaignGiftId = 0;
            this.controller = dialogController;
            this.campaignService = campaignService;
            this.orderService = orderService;
        }
        OrderDlg.prototype.activate = function (data) {
            var _this = this;
            console.log('i am from activate');
            this.data = data;
            console.log('data dto', data);
            this.campaignGiftId = data.Order.OrderCampaignGiftDetails[0].CampaignGiftOutput.CampaignGiftId;
            console.log('this.campaignGiftId', this.campaignGiftId);
            if (data.Order.Id == 0) {
                if (data.Order.OrderCampaignGiftDetails) {
                    var User = data.Order.OrderCampaignGiftDetails[0].CampaignGiftOutput.User;
                    console.log('User', User);
                    if (typeof User == 'object') {
                        this.order.Fullname = User.FullName ? User.FullName : "";
                        this.order.Phone = User.PhoneNumber ? User.PhoneNumber : "";
                        this.order.Email = User.Email ? User.Email : "";
                        this.order.PersonalId = User.PersonalId ? User.PersonalId : "";
                        this.order.Address = User.Address ? User.Address : "";
                    }
                }
            }
            else {
                this.order = data.Order;
            }
            return Promise.all([
                this.campaignService.GetCampaignGift(this.campaignGiftId)
                    .then(function (rs) {
                    console.log('CampaignGift ', rs);
                    _this.CampaignGift = rs;
                })
                    .catch(function (err) {
                    console.error('Error GetCampaignGift(id)', err);
                }),
                this.orderService.GetStoreVta()
                    .then(function (rs) {
                    console.log('Store Vta: ', rs);
                    _this.StoreVta = rs;
                })
            ]);
        };
        OrderDlg.prototype.attached = function () {
        };
        OrderDlg.prototype.loadCampaignGift = function (id) {
            var _this = this;
            this.campaignService.GetCampaignGift(id)
                .then(function (rs) {
                console.log('CampaignGift ', rs);
                _this.CampaignGift = rs;
            })
                .then(function (err) {
                console.error('Error GetCampaignGift(id)', err);
            });
        };
        OrderDlg = __decorate([
            aurelia_framework_1.inject(aurelia_dialog_1.DialogController, CampaignService_1.CampaignService, orderservice_1.OrderService), 
            __metadata('design:paramtypes', [Object, Object, Object])
        ], OrderDlg);
        return OrderDlg;
    }());
    exports.OrderDlg = OrderDlg;
});

//# sourceMappingURL=OrderDlg.js.map
