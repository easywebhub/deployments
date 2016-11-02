var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "jquery"], function (require, exports, aurelia_framework_1, $) {
    "use strict";
    var SemanticDropdown = (function () {
        function SemanticDropdown(element) {
            this.element = element;
        }
        SemanticDropdown.prototype.attached = function () {
            $(this.element).dropdown({});
        };
        SemanticDropdown = __decorate([
            aurelia_framework_1.customAttribute("semantic_dropdown"),
            aurelia_framework_1.inject(Element), 
            __metadata('design:paramtypes', [Object])
        ], SemanticDropdown);
        return SemanticDropdown;
    }());
    exports.SemanticDropdown = SemanticDropdown;
});

//# sourceMappingURL=semantic-dropdown.js.map
