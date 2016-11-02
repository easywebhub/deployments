var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'semantic-ui-calendar'], function (require, exports, aurelia_framework_1) {
    "use strict";
    var SemanCalendar = (function () {
        function SemanCalendar(element) {
            this.element = element;
        }
        SemanCalendar.prototype.attached = function () {
            console.log('elemt', this.element);
            $(this.element).calendar({
                type: 'datetime',
                ampm: false,
                formatter: {
                    datetime: function (date, settings) {
                        if (!date)
                            return '';
                        var day = date.getDate();
                        var month = date.getMonth() + 1;
                        var year = date.getFullYear();
                        var hh = date.getHours();
                        var mm = date.getMinutes();
                        if (hh <= 9 && hh >= 0) {
                            hh = '0' + hh;
                        }
                        hh = hh;
                        if (mm <= 9 && mm >= 0) {
                            mm = '0' + mm;
                        }
                        mm = mm;
                        var ss = date.getMilliseconds();
                        return day + '/' + month + '/' + year + ' ' + hh + ':' + mm;
                    }
                },
                onChange: function (date, text) {
                    console.log('data', date);
                }
            });
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], SemanCalendar.prototype, "VCalendar", void 0);
        SemanCalendar = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customAttribute('semantic_calendar'), 
            __metadata('design:paramtypes', [Object])
        ], SemanCalendar);
        return SemanCalendar;
    }());
    exports.SemanCalendar = SemanCalendar;
});

//# sourceMappingURL=seman-calendar.js.map
