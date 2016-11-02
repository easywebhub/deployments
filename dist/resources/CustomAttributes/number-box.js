var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", 'aurelia-binding'], function (require, exports, aurelia_framework_1, aurelia_binding_1) {
    "use strict";
    var NumberBox = (function () {
        function NumberBox(element, bindingEngine) {
            this.min = 0;
            this.max = 100;
            this.element = element;
            this.bindingEngine = bindingEngine;
        }
        NumberBox.prototype.bind = function () {
            this.min = parseFloat(this.min);
            this.max = parseFloat(this.max);
        };
        NumberBox.prototype.attached = function () {
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
        ], NumberBox.prototype, "format", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], NumberBox.prototype, "decimals", void 0);
        NumberBox = __decorate([
            aurelia_framework_1.customAttribute("number-box"),
            aurelia_framework_1.inject(Element, aurelia_binding_1.BindingEngine), 
            __metadata('design:paramtypes', [Object, Object])
        ], NumberBox);
        return NumberBox;
    }());
    exports.NumberBox = NumberBox;
});

//# sourceMappingURL=number-box.js.map
