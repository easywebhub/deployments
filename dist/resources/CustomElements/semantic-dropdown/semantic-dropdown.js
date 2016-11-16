var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    "use strict";
    var SemanticDropDown = (function () {
        function SemanticDropDown(element) {
            this.element = element;
            this.vdrop = '';
            console.log('default', this.vdrop);
        }
        SemanticDropDown.prototype.attached = function () {
            $(this.element).dropdown('set value(value)', this.vdrop);
            $(this.element)
                .dropdown({
                action: 'hide',
                onChange: function (value, text, $selectedItem) {
                    console.log('value change', value);
                }
            });
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }), 
            __metadata('design:type', Object)
        ], SemanticDropDown.prototype, "vdrop", void 0);
        SemanticDropDown = __decorate([
            aurelia_framework_1.customElement('semantic_dropdown'),
            aurelia_framework_1.inject(Element), 
            __metadata('design:paramtypes', [Object])
        ], SemanticDropDown);
        return SemanticDropDown;
    }());
    exports.SemanticDropDown = SemanticDropDown;
});

//# sourceMappingURL=semantic-dropdown.js.map
