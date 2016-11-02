var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-binding'], function (require, exports, aurelia_framework_1, aurelia_binding_1) {
    "use strict";
    var NumberBox = (function () {
        function NumberBox(bindingEngine, element) {
            this.step = 0;
            this.decimals = 2;
            this.bindingEngine = bindingEngine;
            this.element = element;
        }
        NumberBox.prototype.currentValue$ = function (newValue) {
            return '$' + parseFloat(newValue).toFixed(this.decimals);
        };
        NumberBox.prototype.resultChange$ = function (newValue) {
            var _this = this;
            if (this.format == "$") {
                $('input[name="quantity"]').focus(function () {
                    _this.value = _this.inputResult(newValue);
                }).blur(function () {
                    _this.value = _this.currentValue$(_this.checkMax(newValue, _this.max));
                });
            }
        };
        NumberBox.prototype.resultChangePerce = function (newValue) {
            var _this = this;
            if (this.format == "p0") {
                $('input[name="quantity"]').focus(function () {
                    if (newValue)
                        _this.value = _this.inputResult(newValue);
                }).blur(function () {
                    _this.value = _this.currentValue$(_this.checkMax(newValue, _this.max));
                });
            }
        };
        NumberBox.prototype.valueChanged = function (newValue, oldValue) {
        };
        NumberBox.prototype.inputResult = function (newValue) {
            return this.check$(newValue) == true ? newValue.substring(1, newValue.length - (this.decimals + 1)) : newValue;
        };
        NumberBox.prototype.attached = function () {
        };
        NumberBox.prototype.check$ = function (newValue) {
            return newValue[0] == "$" ? true : false;
        };
        NumberBox.prototype.checkPerce = function (newValue) {
            return newValue[length] == "%" ? true : false;
        };
        NumberBox.prototype.checkMax = function (newValue, max) {
            return this.inputResult(newValue) > max ? max : newValue;
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], NumberBox.prototype, "value", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], NumberBox.prototype, "min", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], NumberBox.prototype, "max", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], NumberBox.prototype, "step", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], NumberBox.prototype, "format", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], NumberBox.prototype, "decimals", void 0);
        NumberBox = __decorate([
            aurelia_framework_1.customElement("number-box"),
            aurelia_framework_1.inject(aurelia_binding_1.BindingEngine, Element), 
            __metadata('design:paramtypes', [Object, Object])
        ], NumberBox);
        return NumberBox;
    }());
    exports.NumberBox = NumberBox;
});

//# sourceMappingURL=number-box.js.map
