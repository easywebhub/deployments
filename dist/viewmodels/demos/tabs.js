define(["require", "exports"], function (require, exports) {
    "use strict";
    var ViewModel = (function () {
        function ViewModel() {
            this.title1 = "this this title 1";
            this.myTabValues = [
                { id: 'section-one', label: 'My First Section', selected: true },
                { id: 'section-two', label: 'Users' },
                { id: 'section-three', label: 'Browse Items' }
            ];
        }
        return ViewModel;
    }());
    exports.ViewModel = ViewModel;
});

//# sourceMappingURL=tabs.js.map
