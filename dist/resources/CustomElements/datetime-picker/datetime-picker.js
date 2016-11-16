var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', '../../helpers/lib', 'datetimepicker'], function (require, exports, aurelia_framework_1, lib_1) {
    "use strict";
    var DateTimePicker = (function () {
        function DateTimePicker() {
            this.controlValue = new Date().toDateString();
            this.elId = lib_1.Lib.generateUUID();
            console.log('time', this.controlValue);
        }
        DateTimePicker.prototype.attached = function () {
            var _this = this;
            $("#" + this.elId).datetimepicker();
            $("#" + this.elId).val(this.controlValue);
            $("#" + this.elId).on('dp.change', function (e) {
                _this.controlValue = $("#" + _this.elId).val();
            });
        };
        DateTimePicker.prototype.controlValueChanged = function (vl) {
            $("#" + this.elId).val(this.controlValue);
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], DateTimePicker.prototype, "controlValue", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], DateTimePicker.prototype, "elId", void 0);
        DateTimePicker = __decorate([
            aurelia_framework_1.customElement('datetimepicker'), 
            __metadata('design:paramtypes', [])
        ], DateTimePicker);
        return DateTimePicker;
    }());
    exports.DateTimePicker = DateTimePicker;
});

//# sourceMappingURL=datetime-picker.js.map
