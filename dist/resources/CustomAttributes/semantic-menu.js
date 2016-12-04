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
    var SemanticModal = (function () {
        function SemanticModal(element) {
            this.element = element;
        }
        SemanticModal.prototype.attached = function () {
            $(this.element)
                .on('click', '.item', function () {
                if (!$(this).hasClass('dropdown')) {
                    $(this)
                        .addClass('active')
                        .siblings('.item')
                        .removeClass('active');
                }
            });
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], SemanticModal.prototype, "title", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], SemanticModal.prototype, "placement", void 0);
        SemanticModal = __decorate([
            aurelia_framework_1.customAttribute("semantic_menu"),
            aurelia_framework_1.inject(Element), 
            __metadata('design:paramtypes', [Object])
        ], SemanticModal);
        return SemanticModal;
    }());
    exports.SemanticModal = SemanticModal;
});

//# sourceMappingURL=semantic-menu.js.map
