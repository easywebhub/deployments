var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-router', '../../services/CampaignGift/CampaignGiftService', "../../resources/const", 'aurelia-dialog', './CampaignGiftCreateDlg', './CampaignGiftDetailDlg', './CampaignGiftEditDlg', './CampaignGiftDeleteDlg', './CoinSettingDlg', '../../models/CampaignGift'], function (require, exports, aurelia_framework_1, aurelia_router_1, CampaignGiftService_1, const_1, aurelia_dialog_1, CampaignGiftCreateDlg_1, CampaignGiftDetailDlg_1, CampaignGiftEditDlg_1, CampaignGiftDeleteDlg_1, CoinSettingDlg_1, CampaignGift_1) {
    "use strict";
    var CampaignGiftMng = (function () {
        function CampaignGiftMng(campaignGiftService, router, dialogService) {
            this.campaignGiftService = campaignGiftService;
            this.router = router;
            this.itemperpage = 10;
            this.pagesize = 6;
            this.current = 1;
            this.dialogService = dialogService;
        }
        CampaignGiftMng.prototype.activate = function () {
            var _this = this;
            return Promise.all([this.campaignGiftService.GetCampaignGift()]).then(function (rs) {
                _this.campaignGits = rs[0];
                _this.total = rs[0].length;
                _this.Types = const_1.CampaignGiftTypes;
            });
        };
        CampaignGiftMng.prototype.attached = function () {
            $(function () {
                $('.pop').on('click', function () {
                    $('.imagepreview').attr('src', this.src);
                    $('#imagemodal').modal('show');
                });
            });
        };
        CampaignGiftMng.prototype.bind = function (ct, ovr) {
            ovr.bindingContext.total = this.total;
        };
        CampaignGiftMng.prototype.DeleteCampaignGift = function (item) {
            var _this = this;
            this.dialogService.open({ viewModel: CampaignGiftDeleteDlg_1.CampaignGiftDeleteDlg, model: item }).then(function (result) {
                if (!result.wasCancelled) {
                    _this.campaignGiftService.DeleteCampaignGift(result.output.Id).then(function (rs) {
                        if (rs) {
                            _this.activate();
                            swal({ title: "Thông báo", text: "Xóa CampaignGift thành công", timer: 2500, showConfirmButton: true, type: "success" });
                        }
                        else {
                            swal({ title: "Thông báo", text: "Xóa CampaignGift thất bại", timer: 2500, showConfirmButton: true, type: "warning" });
                        }
                    });
                }
            });
        };
        CampaignGiftMng.prototype.SettingCampaignGift = function (item) {
            var _this = this;
            this.dialogService.open({ viewModel: CoinSettingDlg_1.CoinSettingDlg, model: item }).then(function (result) {
                if (!result.wasCancelled) {
                    _this.campaignGiftService.UpdateConfig(result.output).then(function (rs) {
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
        CampaignGiftMng.prototype.DetailCampaignGift = function (item) {
            this.dialogService.open({ viewModel: CampaignGiftDetailDlg_1.CampaignGiftDetailDlg, model: item }).then(function (result) {
                if (!result.wasCancelled) {
                }
            });
        };
        CampaignGiftMng.prototype.EditCampaignGift = function (item) {
            var _this = this;
            this.dialogService.open({ viewModel: CampaignGiftEditDlg_1.CampaignGiftEditDlg, model: item }).then(function (result) {
                if (!result.wasCancelled) {
                    _this.update = new CampaignGift_1.CampaignGift(result.output);
                    _this.campaignGiftService.EditCampaignGift(_this.update).then(function (rs) {
                        if (rs.status == 204) {
                            _this.activate();
                            swal({ title: "Thông báo", text: "Cập nhật CampaignGift thành công", timer: 2500, showConfirmButton: true, type: "success" });
                        }
                        else {
                            swal({ title: "Thông báo", text: "Cập nhật CampaignGift thất bại", timer: 2500, showConfirmButton: true, type: "warning" });
                        }
                    });
                }
            });
        };
        CampaignGiftMng.prototype.createCampaignGift = function () {
            var _this = this;
            this.dialogService.open({ viewModel: CampaignGiftCreateDlg_1.CampaignGiftCreateDlg }).then(function (result) {
                if (!result.wasCancelled) {
                    _this.create = new CampaignGift_1.CampaignGift(result.output);
                    _this.campaignGiftService.CreateCampaignGift(_this.create).then(function (rs) {
                        if (rs) {
                            _this.activate();
                            swal({ title: "Thông báo", text: "Tạo mới CampaignGift thành công", timer: 2500, showConfirmButton: true, type: "success" });
                        }
                        else {
                            swal({ title: "Thông báo", text: "Tạo mới CampaignGift thất bại", timer: 2500, showConfirmButton: true, type: "warning" });
                        }
                    });
                }
                else {
                }
            });
        };
        CampaignGiftMng = __decorate([
            aurelia_framework_1.inject(CampaignGiftService_1.CampaignGiftService, aurelia_router_1.Router, aurelia_dialog_1.DialogService), 
            __metadata('design:paramtypes', [Object, Object, Object])
        ], CampaignGiftMng);
        return CampaignGiftMng;
    }());
    exports.CampaignGiftMng = CampaignGiftMng;
    var SearchTypesValueConverter = (function () {
        function SearchTypesValueConverter() {
        }
        SearchTypesValueConverter.prototype.toView = function (array, obj) {
            if (obj == "") {
                return array;
            }
            else if (obj) {
                var filteredArr = array.filter(function (x) { return x.Type == obj; });
                return filteredArr;
            }
            return array;
        };
        return SearchTypesValueConverter;
    }());
    exports.SearchTypesValueConverter = SearchTypesValueConverter;
    var SearchNameValueConverter = (function () {
        function SearchNameValueConverter() {
        }
        SearchNameValueConverter.prototype.toView = function (array, obj) {
            if (obj == "") {
                return array;
            }
            else if (obj) {
                var filteredArr = array.filter(function (x) { return x.Name.indexOf(obj) != -1; });
                return filteredArr;
            }
            return array;
        };
        return SearchNameValueConverter;
    }());
    exports.SearchNameValueConverter = SearchNameValueConverter;
});

//# sourceMappingURL=CampaignGiftMng.js.map
