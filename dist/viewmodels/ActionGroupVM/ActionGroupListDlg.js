var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', '../../services/Action/ActionService', 'aurelia-dialog'], function (require, exports, aurelia_framework_1, ActionService_1, aurelia_dialog_1) {
    "use strict";
    var ActionGroupListDlg = (function () {
        function ActionGroupListDlg(actionService, dialogController) {
            this.actionService = actionService;
            this.itemperpage = 10;
            this.pagesize = 6;
            this.current = 1;
            this.dialogController = dialogController;
        }
        ActionGroupListDlg.prototype.activate = function (item) {
            var _this = this;
            return Promise.all([this.actionService.GetListActionByActionGroupId(item.Id)]).then(function (rs) {
                _this.listActionGroup = rs[0];
                _this.total = rs[0].length;
            });
        };
        ActionGroupListDlg.prototype.UpdateActionGroupList = function () {
            this.dialogController.ok(this.listActionGroup);
        };
        ActionGroupListDlg = __decorate([
            aurelia_framework_1.inject(ActionService_1.ActionService, aurelia_dialog_1.DialogController), 
            __metadata('design:paramtypes', [Object, Object])
        ], ActionGroupListDlg);
        return ActionGroupListDlg;
    }());
    exports.ActionGroupListDlg = ActionGroupListDlg;
    var SearchNameValueConverter = (function () {
        function SearchNameValueConverter() {
        }
        SearchNameValueConverter.prototype.toView = function (array, obj) {
            if (obj == "") {
                return array;
            }
            else if (obj) {
                var filteredArr = array.filter(function (x) { return x.ActionModel.ControllerName == obj; });
                return filteredArr;
            }
            return array;
        };
        return SearchNameValueConverter;
    }());
    exports.SearchNameValueConverter = SearchNameValueConverter;
});

//# sourceMappingURL=ActionGroupListDlg.js.map
