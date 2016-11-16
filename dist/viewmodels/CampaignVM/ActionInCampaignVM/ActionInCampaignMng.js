var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', './ActionInCampaignUpdateDlg', './ActionInCampaignDeleteDlg', './ActionInCampaignDetailDlg', './InputCoinConfigDlg', './RestrictCoinConfigDlg', '../../../services/Action/ActionInCampaignService', '../../../models/ActionInCampaign', 'aurelia-dialog'], function (require, exports, aurelia_framework_1, ActionInCampaignUpdateDlg_1, ActionInCampaignDeleteDlg_1, ActionInCampaignDetailDlg_1, InputCoinConfigDlg_1, RestrictCoinConfigDlg_1, ActionInCampaignService_1, ActionInCampaign_1, aurelia_dialog_1) {
    "use strict";
    ;
    var ActionInCampaignMng = (function () {
        function ActionInCampaignMng(actionInCampaignService, dialogService) {
            this.actionInCampaignService = actionInCampaignService;
            this.itemperpage = 10;
            this.pagesize = 6;
            this.current = 1;
            this.dialogService = dialogService;
        }
        ActionInCampaignMng.prototype.activate = function (params) {
            var _this = this;
            this.params = params;
            return Promise.all([this.actionInCampaignService.GetActionInCampaignsByCampaignId(params.campaignId)]).then(function (rs) {
                _this.listActionInCampaign = rs[0];
                _this.total = rs[0].length;
                console.log('rs', rs[0][0].Action.ActionName);
            });
        };
        ActionInCampaignMng.prototype.RestrictCoinConfig = function (item) {
            var _this = this;
            this.dialogService.open({ viewModel: RestrictCoinConfigDlg_1.RestrictCoinConfigDlg, model: item }).then(function (result) {
                if (!result.wasCancelled) {
                    _this.actionInCampaignService.UpdateActionInCampaignRestrictCoinConfig(result.output).then(function (res) {
                        console.log('res', res);
                        if (res = "Cập nhật thành công!") {
                            swal('Cập nhật', 'Cập nhật ActionInCampaignRestrictCoinConfig thành công', 'success');
                        }
                        else {
                            swal('Cập nhật', 'Cập nhật ActionInCampaignRestrictCoinConfig không thành công', 'error');
                        }
                    });
                }
            });
        };
        ActionInCampaignMng.prototype.InputCoinConfig = function (item) {
            var _this = this;
            this.dialogService.open({ viewModel: InputCoinConfigDlg_1.InputCoinConfigDlg, model: item }).then(function (result) {
                if (!result.wasCancelled) {
                    _this.actionInCampaignService.UpdateActionInCampaignInputCoinConfig(result.output).then(function (res) {
                        console.log('res', res);
                        if (res = "Cập nhật thành công!") {
                            swal('Cập nhật', 'Cập nhật ActionInCampaignInputCoinConfig thành công', 'success');
                        }
                        else {
                            swal('Cập nhật', 'Cập nhật ActionInCampaignInputCoinConfig không thành công', 'error');
                        }
                    });
                }
            });
        };
        ActionInCampaignMng.prototype.CreateActionInCampaign = function (item) {
            var _this = this;
            if (item == undefined) {
                item = {};
                item.Campaign = {};
                item.CampaignId = this.params.campaignId;
                item.Campaign.Name = this.listActionInCampaign[0].Campaign.Name;
            }
            this.dialogService.open({ viewModel: ActionInCampaignUpdateDlg_1.ActionInCampaignUpdateDlg, model: item }).then(function (result) {
                if (!result.wasCancelled) {
                    var data = new ActionInCampaign_1.ActionInCampaign(result.output);
                    console.log('data', JSON.stringify(data));
                    if (data.Id == 0) {
                        _this.actionInCampaignService.CreateActionInCampaign(data).then(function (res) {
                            console.log('Save response: ', res);
                            if (res) {
                                swal('Cập nhật', 'Tạo Action in Campaign thành công', 'success');
                                _this.activate(_this.params);
                            }
                            else {
                                swal('Cập nhật', 'Tạo Action in Campaign không thành công', 'error');
                            }
                        });
                    }
                    else if (data.Id > 0) {
                        _this.actionInCampaignService.UpdateActionInCampaign(data).then(function (res) {
                            console.log('Save response: ', res);
                            if (res.status == 204) {
                                swal('Cập nhật', 'Tạo Action in Campaign thành công', 'success');
                                _this.activate(_this.params);
                            }
                            else {
                                swal('Cập nhật', 'Tạo Action in Campaign không thành công', 'error');
                            }
                        });
                    }
                }
                else {
                    console.log('bad');
                }
            });
        };
        ActionInCampaignMng.prototype.DeleteActionInCampaign = function (item) {
            var _this = this;
            this.dialogService.open({ viewModel: ActionInCampaignDeleteDlg_1.ActionInCamPaignDeleteDlg, model: item }).then(function (result) {
                console.log('item', item);
                if (!result.wasCancelled) {
                    _this.actionInCampaignService.DeleteActionInCampaign(result.output.Id).then(function (res) {
                        console.log('Save response: ', res);
                        if (res) {
                            swal('Cập nhật', 'Xóa Action in Campaign thành công', 'success');
                            _this.activate(_this.params);
                        }
                        else {
                            swal('Cập nhật', 'Xóa Action in Campaign không thành công', 'error');
                        }
                    });
                }
                else {
                    console.log('bad');
                }
            });
        };
        ActionInCampaignMng.prototype.DetailActionInCampaign = function (item) {
            this.dialogService.open({ viewModel: ActionInCampaignDetailDlg_1.ActionInCampaignDetailDlg, model: item }).then(function (result) {
                if (!result.wasCancelled) {
                    console.log('good');
                }
                else {
                    console.log('bad');
                }
            });
        };
        ActionInCampaignMng = __decorate([
            aurelia_framework_1.inject(ActionInCampaignService_1.ActionInCampaignService, aurelia_dialog_1.DialogService), 
            __metadata('design:paramtypes', [Object, Object])
        ], ActionInCampaignMng);
        return ActionInCampaignMng;
    }());
    exports.ActionInCampaignMng = ActionInCampaignMng;
    var SearchActionDisplayNameValueConverter = (function () {
        function SearchActionDisplayNameValueConverter() {
        }
        SearchActionDisplayNameValueConverter.prototype.toView = function (array, obj) {
            if (obj == "") {
                return array;
            }
            else if (obj) {
                var filteredArr = array.filter(function (x) { return x.Action.ActionDisplayName == obj; });
                return filteredArr;
            }
            return array;
        };
        return SearchActionDisplayNameValueConverter;
    }());
    exports.SearchActionDisplayNameValueConverter = SearchActionDisplayNameValueConverter;
    var SearchActionNameValueConverter = (function () {
        function SearchActionNameValueConverter() {
        }
        SearchActionNameValueConverter.prototype.toView = function (array, obj) {
            if (obj == "") {
                return array;
            }
            else if (obj) {
                var filteredArr = array.filter(function (x) { return x.Action.ActionName == obj; });
                return filteredArr;
            }
            return array;
        };
        return SearchActionNameValueConverter;
    }());
    exports.SearchActionNameValueConverter = SearchActionNameValueConverter;
});

//# sourceMappingURL=ActionInCampaignMng.js.map
