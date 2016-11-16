define(["require", "exports"], function (require, exports) {
    "use strict";
    var SelectListItem = (function () {
        function SelectListItem(text, value, selected) {
            switch (arguments.length) {
                case 2:
                    if (typeof arguments[0] === 'string' && typeof arguments[1] === 'string') {
                        this.Text = text;
                        this.Value = value;
                    }
                    break;
                case 3:
                    this.Text = text;
                    this.Value = value;
                    this.Selected = selected;
            }
        }
        return SelectListItem;
    }());
    exports.SelectListItem = SelectListItem;
});

//# sourceMappingURL=Common.js.map
