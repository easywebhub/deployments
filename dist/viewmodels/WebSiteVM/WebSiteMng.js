var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', '../../services/WebSite/WebSiteServices', 'aurelia-dialog', './CreateWebDlg', '../../models//website'], function (require, exports, aurelia_framework_1, WebSiteServices_1, aurelia_dialog_1, CreateWebDlg_1, website_1) {
    "use strict";
    var WebSiteMng = (function () {
        function WebSiteMng(webSiteServices, bindingEngine, dialogService) {
            this.webSiteServices = webSiteServices;
            this.itemperpage = 10;
            this.pagesize = 6;
            this.current = 1;
            this.total = 0;
            this.dialogService = dialogService;
        }
        WebSiteMng.prototype.activate = function () {
            var _this = this;
            return Promise.all([this.webSiteServices.GetListWebSite()]).then(function (rs) {
                _this.listWebSite = rs[0].Data;
                console.log('listWebSite', _this.listWebSite);
                _this.total = _this.listWebSite.length;
            });
        };
        WebSiteMng.prototype.createWeb = function () {
            var _this = this;
            this.dialogService.open({ viewModel: CreateWebDlg_1.CreateWebDlg }).then(function (result) {
                if (!result.wasCancelled) {
                    console.log('result.output', result.output);
                    _this.webSiteServices.CreateWeb(new website_1.CreateWeb(result.output)).then(function (rs) {
                        if (rs.Result == true) {
                            swal({ title: "Thông báo", text: rs.Message, timer: 2500, showConfirmButton: true, type: "success" });
                            _this.activate();
                        }
                        else {
                            swal({ title: "Thông báo", text: rs.Message, timer: 2500, showConfirmButton: true, type: "warning" });
                        }
                    });
                }
                else {
                    console.log('bad');
                }
            });
        };
        WebSiteMng = __decorate([
            aurelia_framework_1.inject(WebSiteServices_1.WebSiteServices, aurelia_framework_1.BindingEngine, aurelia_dialog_1.DialogService), 
            __metadata('design:paramtypes', [Object, Object, Object])
        ], WebSiteMng);
        return WebSiteMng;
    }());
    exports.WebSiteMng = WebSiteMng;
    var SearchTypesValueConverter = (function () {
        function SearchTypesValueConverter() {
        }
        SearchTypesValueConverter.prototype.toView = function (array, obj) {
            if (obj == "") {
                return array;
            }
            else if (obj) {
                var filteredArr = array.filter(function (x) { return x.Type.toLowerCase().indexOf(obj.toLowerCase()) != -1; });
                return filteredArr;
            }
            return array;
        };
        return SearchTypesValueConverter;
    }());
    exports.SearchTypesValueConverter = SearchTypesValueConverter;
    var SearchProductionValueConverter = (function () {
        function SearchProductionValueConverter() {
        }
        SearchProductionValueConverter.prototype.toView = function (array, obj) {
            if (obj == "") {
                return array;
            }
            else if (obj) {
                var filteredArr = array.filter(function (x) { return x.Production.toLowerCase().indexOf(obj.toLowerCase()) != -1; });
                return filteredArr;
            }
            return array;
        };
        return SearchProductionValueConverter;
    }());
    exports.SearchProductionValueConverter = SearchProductionValueConverter;
    var SearchNameValueConverter = (function () {
        function SearchNameValueConverter() {
        }
        SearchNameValueConverter.prototype.toView = function (array, obj) {
            if (obj == "") {
                return array;
            }
            else if (obj) {
                var filteredArr = array.filter(function (x) { return x.Name.toLowerCase().indexOf(obj.toLowerCase()) != -1; });
                return filteredArr;
            }
            return array;
        };
        return SearchNameValueConverter;
    }());
    exports.SearchNameValueConverter = SearchNameValueConverter;
});

//# sourceMappingURL=WebSiteMng.js.map
