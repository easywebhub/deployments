var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'ckeditor'], function (require, exports, aurelia_framework_1) {
    "use strict";
    var Editor = (function () {
        function Editor(el) {
            this.el = el;
        }
        Editor.prototype.activate = function (params) {
        };
        Editor.prototype.attached = function () {
            CKEDITOR.basePath = "/bower_components/ckeditor/";
            CKEDITOR.replace('editor1');
        };
        Editor = __decorate([
            aurelia_framework_1.customElement('ckeditor'),
            aurelia_framework_1.inject(Element), 
            __metadata('design:paramtypes', [Element])
        ], Editor);
        return Editor;
    }());
    exports.Editor = Editor;
});

//# sourceMappingURL=editor.js.map
