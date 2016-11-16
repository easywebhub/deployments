var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', '../../services/Account/CustomerServices'], function (require, exports, aurelia_framework_1, CustomerServices_1) {
    "use strict";
    var CustomerVTA = (function () {
        function CustomerVTA(customerServices, bindingEngine) {
            var _this = this;
            this.customerServices = customerServices;
            this.itemperpage = 10;
            this.pagesize = 6;
            this.current = 1;
            this.meta = {};
            this.meta.EntityFrom = this.itemperpage * (this.current - 1);
            this.meta.EntityTo = this.itemperpage;
            var subscriptioncurrent = bindingEngine.propertyObserver(this, 'current')
                .subscribe(function () {
                _this.getData();
            });
        }
        CustomerVTA.prototype.activate = function () {
            var _this = this;
            this.meta.EntityFrom = this.itemperpage * (this.current - 1);
            this.meta.EntityTo = this.itemperpage * this.current;
            return Promise.all([this.customerServices.GetListCustomer(this.meta)]).then(function (rs) {
                _this.listCustomer = rs[0].Data;
                _this.total = rs[0].ItemsCount;
                if (_this.total == 0) {
                    swal('Thông báo', 'Không tìm thấy kết quả vơi điều kiện tìm kiếm', 'warning');
                }
            });
        };
        CustomerVTA.prototype.getData = function () {
            this.activate();
        };
        CustomerVTA.prototype.searchBy = function () {
            if (this.meta) {
                this.getData();
            }
        };
        CustomerVTA.prototype.UpdateGeneralCode = function (item) {
            var _this = this;
            this.customerServices.UpdateGeneralCode(item).then(function (rs) {
                if (rs.result == true) {
                    swal({ title: "Thông báo", text: "Sinh mã thành công", timer: 2500, showConfirmButton: true, type: "success" });
                    _this.activate();
                }
                else {
                    {
                        swal({ title: "Thông báo", text: "Sinh mã thất bại", timer: 2500, showConfirmButton: true, type: "warning" });
                        _this.activate();
                    }
                }
            });
        };
        CustomerVTA.prototype.SendSmsCode = function (item) {
            var _this = this;
            this.customerServices.SendSmsCode(item).then(function (rs) {
                if (rs.result == true) {
                    swal({ title: "Thông báo", text: "Send sms thành công", timer: 2500, showConfirmButton: true, type: "success" });
                    _this.activate();
                }
                else {
                    {
                        swal({ title: "Thông báo", text: "Send sms thất bại", timer: 2500, showConfirmButton: true, type: "warning" });
                        _this.activate();
                    }
                }
            });
        };
        CustomerVTA = __decorate([
            aurelia_framework_1.inject(CustomerServices_1.CustomerServices, aurelia_framework_1.BindingEngine), 
            __metadata('design:paramtypes', [Object, Object])
        ], CustomerVTA);
        return CustomerVTA;
    }());
    exports.CustomerVTA = CustomerVTA;
});

//# sourceMappingURL=CustomerVTA.js.map
