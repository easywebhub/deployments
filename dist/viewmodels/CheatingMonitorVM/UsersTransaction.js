var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', '../../services/CheatingMonitor/CheatingMonitorService', 'aurelia-validation', '../../resources/bootstrap-validation/bootstrap-form-render', '../../views/userToolbarController', 'aurelia-router'], function (require, exports, aurelia_framework_1, CheatingMonitorService_1, aurelia_validation_1, bootstrap_form_render_1, userToolbarController_1, aurelia_router_1) {
    "use strict";
    var UsersTransaction = (function () {
        function UsersTransaction(cheatingMonitorService, validateFact, toolbar, router) {
            this.obj = new Search();
            this.pendding = true;
            this.controller = null;
            this.logger = null;
            this.controller = validateFact.createForCurrentScope();
            this.controller.addRenderer(new bootstrap_form_render_1.BootstrapFormRenderer());
            this.controller.validateTrigger = aurelia_validation_1.validateTrigger.manual;
            this.toolbar = toolbar;
            this.router = router;
            console.log('route from vm', this.router, this.router.currentInstruction);
            this.cheatingMonitorService = cheatingMonitorService;
            this.itemperpage = 10;
            this.pagesize = 6;
            this.current = 1;
            this.meta = {};
            this.meta.From = this.itemperpage * (this.current - 1);
            this.meta.Take = this.itemperpage;
            this.total = 0;
        }
        UsersTransaction.prototype.activate = function (params, routeConfig, $navigationInstruction) {
            var _this = this;
            console.log("routeConfig", routeConfig);
            this.title = this.title || routeConfig.title;
            console.log('route from vm', "currentInstruction", this.router['baseUrl'], Object.keys(this.router));
            this.pendding = !this.pendding;
            this.params = params;
            if (this.params.userId == 0) {
                this.pendding = !this.pendding;
                return;
            }
            else {
                this.obj.UserId = this.params.userId;
                this.toolbar.userId = this.obj.UserId;
                return Promise.all([this.cheatingMonitorService.GetLstTransaction(this.obj)]).then(function (rs) {
                    _this.pendding = !_this.pendding;
                    _this.listUsersTransacTion = rs[0];
                    _this.total = rs[0].length;
                });
            }
        };
        UsersTransaction.prototype.attached = function () {
            console.log("attached", this.router.currentInstruction.config);
        };
        UsersTransaction.prototype.search = function (obj) {
            var _this = this;
            console.log('obj', obj);
            console.log('obj', this.obj);
            this.controller.validate()
                .then(function (v) {
                if (v.length === 0) {
                    obj.IsSubmit = true;
                    _this.callToServer(obj);
                }
            });
            this.activate(this.params, null, null);
        };
        UsersTransaction.prototype.isNoResultRes = function () {
            return (this.obj.IsSubmit && (this.total == 0)) || false;
        };
        UsersTransaction.prototype.callToServer = function (obj) {
            var _this = this;
            this.pendding = !this.pendding;
            for (var i in obj) {
                if (obj[i] == "")
                    delete obj[i];
            }
            return Promise.all([this.cheatingMonitorService.GetLstTransaction(obj)]).then(function (rs) {
                console.log('test', JSON.stringify(obj));
                _this.total = rs[0].length || 0;
                swal('Kết quả', "T\u00ECm th\u1EA5y " + _this.total + " giao d\u1ECBch", 'info');
                _this.pendding = !_this.pendding;
                _this.listUsersTransacTion = rs[0];
            });
        };
        UsersTransaction = __decorate([
            aurelia_framework_1.inject(CheatingMonitorService_1.CheatingMonitorService, aurelia_validation_1.ValidationControllerFactory, userToolbarController_1.UserToolbarController, aurelia_router_1.Router), 
            __metadata('design:paramtypes', [Object, aurelia_validation_1.ValidationControllerFactory, userToolbarController_1.UserToolbarController, aurelia_router_1.Router])
        ], UsersTransaction);
        return UsersTransaction;
    }());
    exports.UsersTransaction = UsersTransaction;
    var Search = (function () {
        function Search() {
            this.IsSubmit = false;
        }
        return Search;
    }());
    exports.Search = Search;
    aurelia_validation_1.ValidationRules.customRule('moreThanDate', function (value, obj, otherPropertyName) {
        if (value) {
            if (!obj[otherPropertyName])
                return false;
        }
        return (value === null
            || value === undefined
            || value === ''
            || obj[otherPropertyName] === null
            || obj[otherPropertyName] === undefined
            || obj[otherPropertyName] === '')
            && (!(value === null
                || value === undefined
                || value === '') !== (obj[otherPropertyName] === null
                || obj[otherPropertyName] === undefined
                || obj[otherPropertyName] === ''))
            || (new Date(value) > new Date(obj[otherPropertyName])
                && obj[otherPropertyName]);
    }, '${$displayName} không hợp lệ', function (otherPropertyName) { return ({ otherPropertyName: otherPropertyName }); });
    aurelia_validation_1.ValidationRules.customRule('lessThanDate', function (value, obj, otherPropertyName) {
        if (value) {
            if (!obj[otherPropertyName])
                return false;
        }
        return (value === null
            || value === undefined
            || value === ''
            || obj[otherPropertyName] === null
            || obj[otherPropertyName] === undefined
            || obj[otherPropertyName] === '')
            && (!(value === null
                || value === undefined
                || value === '') !== (obj[otherPropertyName] === null
                || obj[otherPropertyName] === undefined
                || obj[otherPropertyName] === ''))
            || (new Date(value) < new Date(obj[otherPropertyName])
                && obj[otherPropertyName]);
    }, '${$displayName} không hợp lệ', function (otherPropertyName) { return ({ otherPropertyName: otherPropertyName }); });
    aurelia_validation_1.ValidationRules.customRule('serve', function (value, obj) {
        return value === null
            || value === undefined
            || value === '' || value === "1231231233";
    }, '${$displayName} ${$config.value} không đúng định dạng SĐT');
    aurelia_validation_1.ValidationRules.customRule('phoneNumber', function (value, obj) {
        return value === null
            || value === undefined
            || value === '' || isValidPhoneNumber(value)
            && (value.length >= 10 && value.length <= 11);
    }, "${$displayName} không đúng định dạng. Vui lòng nhập lại.");
    aurelia_validation_1.ValidationRules
        .ensure(function (x) { return x.Email; }).displayName('Email').email().withMessage('${$displayName} không đúng định dạng. Vui lòng nhập lại.')
        .ensure(function (x) { return x.Phone; }).satisfiesRule("phoneNumber")
        .ensure(function (x) { return x.StartDate; }).satisfiesRule('lessThanDate', 'EndDate')
        .ensure(function (x) { return x.EndDate; }).satisfiesRule('moreThanDate', 'StartDate')
        .on(Search);
    function isValidPhoneNumber(value) {
        return !isNaN(value);
    }
});

//# sourceMappingURL=UsersTransaction.js.map
