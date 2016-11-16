var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', '../../services/Action/ActionService', '../../models/Action', 'aurelia-dialog', './ActionDeleteDlg', './ActionUpdateDlg', '../ActionVM/CoinSettingDlg'], function (require, exports, aurelia_framework_1, ActionService_1, Action_1, aurelia_dialog_1, ActionDeleteDlg_1, ActionUpdateDlg_1, CoinSettingDlg_1) {
    "use strict";
    var ActionMng = (function () {
        function ActionMng(actionService, dialogService) {
            this.actionService = actionService;
            this.itemperpage = 10;
            this.pagesize = 6;
            this.current = 1;
            this.dialogService = dialogService;
        }
        ActionMng.prototype.activate = function () {
            var _this = this;
            this.item = new Action_1.Action({});
            return Promise.all([this.actionService.GetListAction()]).then(function (rs) {
                _this.listAction = rs[0];
                _this.total = rs[0].length;
            });
        };
        ActionMng.prototype.SettingCoin = function (item) {
            var _this = this;
            this.dialogService.open({ viewModel: CoinSettingDlg_1.CoinSettingDlg, model: item }).then(function (result) {
                if (!result.wasCancelled) {
                    console.log('data', result);
                    _this.actionService.UpdateActionInputCoinConfig(result.output).then(function (rs) {
                        if (rs.result == true) {
                            _this.activate();
                            swal({ title: "Thông báo", text: "Cập nhật setting config thành công", timer: 2500, showConfirmButton: true, type: "success" });
                        }
                        else {
                            swal({ title: "Thông báo", text: "Cập nhật CampaignGift thất bại", timer: 2500, showConfirmButton: true, type: "success" });
                        }
                    });
                }
            });
        };
        ActionMng.prototype.DeleteAction = function (item) {
            var _this = this;
            this.dialogService.open({ viewModel: ActionDeleteDlg_1.ActionDeleteDlg, model: item }).then(function (result) {
                if (!result.wasCancelled) {
                    _this.actionService.DeleteAction(new Action_1.Action(result.output).Id).then(function (rs) {
                        if (rs) {
                            swal({ title: "Thông báo", text: "Xóa action thành công", timer: 4000, showConfirmButton: true, type: "success" });
                            _this.activate();
                        }
                        else {
                            swal({ title: "Thông báo", text: "Xóa action thất bại", timer: 2500, showConfirmButton: true });
                        }
                    });
                }
                else {
                    console.log('bad');
                }
            });
        };
        ActionMng.prototype.CreateAction = function (item) {
            var _this = this;
            this.dialogService.open({ viewModel: ActionUpdateDlg_1.ActionUpdateDlg, model: item }).then(function (result) {
                if (!result.wasCancelled) {
                    if (result.output.Id == 0) {
                        _this.actionService.CreateAction(result.output).then(function (rs) {
                            if (rs) {
                                swal({ title: "Thông báo", text: "Tạo mới Action thành công", timer: 4000, showConfirmButton: true, type: "success" });
                                _this.activate();
                            }
                            else {
                                swal({ title: "Thông báo", text: "Tạo mới Action thất bại", timer: 2500, showConfirmButton: true });
                            }
                        });
                    }
                    else if (result.output.Id > 0) {
                        _this.actionService.UpdateAction(result.output).then(function (rs) {
                            if (rs) {
                                swal({ title: "Thông báo", text: "Cập nhật Action thành công", timer: 4000, showConfirmButton: true, type: "success" });
                                _this.activate();
                            }
                            else {
                                swal({ title: "Thông báo", text: "Cập nhật Action thất bại", timer: 2500, showConfirmButton: true });
                            }
                        });
                    }
                }
                else {
                    console.log('bad');
                }
            });
        };
        ActionMng = __decorate([
            aurelia_framework_1.inject(ActionService_1.ActionService, aurelia_dialog_1.DialogService), 
            __metadata('design:paramtypes', [Object, Object])
        ], ActionMng);
        return ActionMng;
    }());
    exports.ActionMng = ActionMng;
    var SearchPublicDomainNameValueConverter = (function () {
        function SearchPublicDomainNameValueConverter() {
        }
        SearchPublicDomainNameValueConverter.prototype.toView = function (array, obj) {
            if (obj == "") {
                return array;
            }
            else if (obj) {
                var filteredArr = array.filter(function (x) { return x.PublicDomainName && x.PublicDomainName.indexOf(obj) !== -1; });
                return filteredArr;
            }
            return array;
        };
        return SearchPublicDomainNameValueConverter;
    }());
    exports.SearchPublicDomainNameValueConverter = SearchPublicDomainNameValueConverter;
    var SearchControllerNameValueConverter = (function () {
        function SearchControllerNameValueConverter() {
        }
        SearchControllerNameValueConverter.prototype.toView = function (array, obj) {
            if (obj == "") {
                return array;
            }
            else if (obj) {
                var filteredArr = array.filter(function (x) { return x.ControllerName && x.ControllerName.indexOf(obj) !== -1; });
                return filteredArr;
            }
            return array;
        };
        return SearchControllerNameValueConverter;
    }());
    exports.SearchControllerNameValueConverter = SearchControllerNameValueConverter;
    var SearchActionNameValueConverter = (function () {
        function SearchActionNameValueConverter() {
        }
        SearchActionNameValueConverter.prototype.toView = function (array, obj) {
            if (obj == "") {
                return array;
            }
            else if (obj) {
                var filteredArr = array.filter(function (x) { return x.ActionName == obj; });
                return filteredArr;
            }
            return array;
        };
        return SearchActionNameValueConverter;
    }());
    exports.SearchActionNameValueConverter = SearchActionNameValueConverter;
    var FilterByRangeDateValueConverter = (function () {
        function FilterByRangeDateValueConverter() {
        }
        FilterByRangeDateValueConverter.prototype.setDateGMT = function (x) {
            var a = new Date(x);
            return new Date(a.setHours(a.getHours() + a.getTimezoneOffset() / 60));
        };
        FilterByRangeDateValueConverter.prototype.toView = function (array, dateStartFilter, dateEndFilter) {
            var _this = this;
            var start = new Date(dateStartFilter);
            var end = new Date(dateEndFilter);
            if (dateStartFilter == undefined || dateEndFilter == undefined) {
                return array;
            }
            else if (start > end) {
                array = [];
                return array;
            }
            else if ((dateStartFilter != undefined && dateEndFilter != undefined) && end >= start) {
                return array.filter(function (x) {
                    return ((_this.setDateGMT(x.StartDate) >= start) && (_this.setDateGMT(x.EndDate) <= end));
                });
            }
            return array;
        };
        return FilterByRangeDateValueConverter;
    }());
    exports.FilterByRangeDateValueConverter = FilterByRangeDateValueConverter;
});

//# sourceMappingURL=ActionMng.js.map
