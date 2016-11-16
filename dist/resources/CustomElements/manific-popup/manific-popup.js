var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', '../../helpers/lib', 'magnificPopup'], function (require, exports, aurelia_framework_1, lib_1) {
    "use strict";
    var ManificPopup = (function () {
        function ManificPopup() {
            this.controlValue = new Date().toDateString();
            this.cls = lib_1.Lib.generateUUID();
            this.galleryData = [];
        }
        ManificPopup.prototype.attached = function () {
            $("." + this.cls).each(function () {
                $(this).magnificPopup({
                    delegate: 'a',
                    type: 'image',
                    gallery: {
                        enabled: true
                    }
                });
            });
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], ManificPopup.prototype, "controlValue", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], ManificPopup.prototype, "cls", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Array)
        ], ManificPopup.prototype, "galleryData", void 0);
        ManificPopup = __decorate([
            aurelia_framework_1.customElement('manific-popup'), 
            __metadata('design:paramtypes', [])
        ], ManificPopup);
        return ManificPopup;
    }());
    exports.ManificPopup = ManificPopup;
    var Gallery = (function () {
        function Gallery(title, src, width, height) {
            this.width = 0;
            this.height = 0;
            this.title = title;
            this.src = src;
            this.width = width;
            this.height = height;
        }
        return Gallery;
    }());
    exports.Gallery = Gallery;
});

//# sourceMappingURL=manific-popup.js.map
