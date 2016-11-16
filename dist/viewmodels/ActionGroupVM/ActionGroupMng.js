var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', '../../services/Action/ActionService', '../../models/Action', './ActionGroupDeleteDlg', 'aurelia-dialog', './ActionGroupUpdateDlg', './ActionGroupListDlg'], function (require, exports, aurelia_framework_1, ActionService_1, Action_1, ActionGroupDeleteDlg_1, aurelia_dialog_1, ActionGroupUpdateDlg_1, ActionGroupListDlg_1) {
    "use strict";
    var ActionGroupMng = (function () {
        function ActionGroupMng(actionService, dialogService) {
            this.actionService = actionService;
            this.itemperpage = 10;
            this.pagesize = 6;
            this.current = 1;
            this.dialogService = dialogService;
        }
        ActionGroupMng.prototype.activate = function () {
            var _this = this;
            return Promise.all([this.actionService.GetListActionGroup()]).then(function (rs) {
                _this.actionGroup = rs[0];
                console.log(rs[0]);
                _this.total = rs[0].length;
            });
        };
        ActionGroupMng.prototype.ActionGroupList = function (item) {
            var _this = this;
            this.dialogService.open({ viewModel: ActionGroupListDlg_1.ActionGroupListDlg, model: item }).then(function (result) {
                if (!result.wasCancelled) {
                    _this.actionService.UpdateListActionByActionGroupId(result.output).then(function (rs) {
                        if (rs.result == true) {
                            _this.activate();
                            swal({ title: "Thông báo", text: "Cập nhật Action Group List thành công", timer: 3000, showConfirmButton: true, type: "success" });
                        }
                        else {
                            swal({ title: "Thông báo", text: "Cập nhật Action Group List thất bại", timer: 3000, showConfirmButton: true, type: "success" });
                        }
                    });
                }
            });
        };
        ActionGroupMng.prototype.DeleteActionGroup = function (item) {
            var _this = this;
            this.dialogService.open({ viewModel: ActionGroupDeleteDlg_1.ActionGroupDeleteDlg, model: item }).then(function (result) {
                if (!result.wasCancelled) {
                    _this.actionService.DeleteActionGroup(new Action_1.Action(result.output).Id).then(function (rs) {
                        if (rs) {
                            swal({ title: "Thông báo", text: "Xóa action group thành công", timer: 4000, showConfirmButton: true, type: "success" });
                            _this.activate();
                        }
                        else {
                            swal({ title: "Thông báo", text: "Xóa action group thất bại", timer: 2500, showConfirmButton: true });
                        }
                    });
                }
                else {
                    console.log('bad');
                }
            });
        };
        ActionGroupMng.prototype.EditActionGroup = function (item) {
            var _this = this;
            this.dialogService.open({ viewModel: ActionGroupUpdateDlg_1.ActionGroupUpdateDlg, model: item }).then(function (result) {
                if (!result.wasCancelled) {
                    if (result.output.Id > 0) {
                        _this.actionService.UpdateActionGroup(result.output).then(function (rs) {
                            if (rs) {
                                swal({ title: "Thông báo", text: "Cập nhật action group thành công", timer: 4000, showConfirmButton: true, type: "success" });
                                _this.activate();
                            }
                            else {
                                swal({ title: "Thông báo", text: "Cập nhật action group thất bại", timer: 2500, showConfirmButton: true });
                            }
                        });
                    }
                    else {
                        _this.actionService.CreateActionGroup(result.output).then(function (rs) {
                            if (rs) {
                                swal({ title: "Thông báo", text: "Tạo mới action group thành công", timer: 4000, showConfirmButton: true, type: "success" });
                                _this.activate();
                            }
                            else {
                                swal({ title: "Thông báo", text: "Tạo mới action group thất bại", timer: 2500, showConfirmButton: true });
                            }
                        });
                    }
                }
                else {
                    console.log('bad');
                }
            });
        };
        ActionGroupMng = __decorate([
            aurelia_framework_1.inject(ActionService_1.ActionService, aurelia_dialog_1.DialogService), 
            __metadata('design:paramtypes', [Object, Object])
        ], ActionGroupMng);
        return ActionGroupMng;
    }());
    exports.ActionGroupMng = ActionGroupMng;
    var SearchPublicDomainNameValueConverter = (function () {
        function SearchPublicDomainNameValueConverter() {
        }
        SearchPublicDomainNameValueConverter.prototype.toView = function (array, obj) {
            if (obj == "") {
                return array;
            }
            else if (obj) {
                var filteredArr = array.filter(function (x) { return x.PublicDomainName == obj; });
                return filteredArr;
            }
            return array;
        };
        return SearchPublicDomainNameValueConverter;
    }());
    exports.SearchPublicDomainNameValueConverter = SearchPublicDomainNameValueConverter;
    var SearchNameValueConverter = (function () {
        function SearchNameValueConverter() {
        }
        SearchNameValueConverter.prototype.toView = function (array, obj) {
            if (obj == "") {
                return array;
            }
            else if (obj) {
                var filteredArr = array.filter(function (x) { return x.Name.indexOf(obj) > -1; });
                return filteredArr;
            }
            return array;
        };
        return SearchNameValueConverter;
    }());
    exports.SearchNameValueConverter = SearchNameValueConverter;
    var SearchTitleValueConverter = (function () {
        function SearchTitleValueConverter() {
        }
        SearchTitleValueConverter.prototype.toView = function (array, obj) {
            if (obj == "") {
                return array;
            }
            else if (obj) {
                var filteredArr = array.filter(function (x) { return x.Title.indexOf(obj) > -1; });
                return filteredArr;
            }
            return array;
        };
        return SearchTitleValueConverter;
    }());
    exports.SearchTitleValueConverter = SearchTitleValueConverter;
    var SearchCodeNameValueConverter = (function () {
        function SearchCodeNameValueConverter() {
        }
        SearchCodeNameValueConverter.prototype.toView = function (array, obj) {
            if (obj == "") {
                return array;
            }
            else if (obj) {
                var filteredArr = array.filter(function (x) { return x.CodeName == obj; });
                return filteredArr;
            }
            return array;
        };
        return SearchCodeNameValueConverter;
    }());
    exports.SearchCodeNameValueConverter = SearchCodeNameValueConverter;
});

//# sourceMappingURL=ActionGroupMng.js.map
