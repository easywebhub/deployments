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
    var SemanticAccordion = (function () {
        function SemanticAccordion(element) {
            this.element = element;
        }
        SemanticAccordion.prototype.attached = function () {
            $(this.element).accordion();
        };
        SemanticAccordion = __decorate([
            aurelia_framework_1.customAttribute("semantic_accordion"),
            aurelia_framework_1.inject(Element), 
            __metadata('design:paramtypes', [Object])
        ], SemanticAccordion);
        return SemanticAccordion;
    }());
    exports.SemanticAccordion = SemanticAccordion;
});

//# sourceMappingURL=semantic-accordion.js.map
