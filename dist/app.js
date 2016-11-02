var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', './services/appState', './configs/authorizeStep', 'aurelia-history'], function (require, exports, aurelia_framework_1, appState_1, authorizeStep_1, aurelia_history_1) {
    "use strict";
    var App = (function () {
        function App(appState, history) {
            this.history = history;
            this.checkNav = false;
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = ' ADMINCP';
            config.addPipelineStep('authorize', authorizeStep_1.AuthorizeStep);
            console.log('this.checkNav', this.checkNav);
            if (Lockr.get('UserInfo')) {
                this.checkNav = Lockr.get('UserInfo').Result;
            }
            config.map([
                { route: 'Dashboard', name: 'Dashboard', moduleId: 'viewmodels/DashBoardVM/dash_board', nav: this.checkNav, title: 'DASHBOARB' },
                { route: ['', 'login'], name: 'login', moduleId: 'viewmodels/LoginVM/login', nav: false, settings: { roles: [] }, title: 'Đăng nhập' },
                { route: 'WebSiteMenu', name: 'WebSiteMenu', moduleId: 'viewmodels/WebSiteVM/WebSiteMenu', nav: this.checkNav, title: 'QL WEBSITE' },
                { route: 'AccountMenu', name: 'AccountMenu', moduleId: 'viewmodels/AccountVM/AccountMenu', nav: this.checkNav, title: 'QL USER' },
                { route: 'logout', name: 'logout', moduleId: 'viewmodels/LoginVM/logout', nav: false, title: 'Logout' },
                { route: 'register', name: 'register', moduleId: 'viewmodels/LoginVM/resgister', nav: false, title: 'register' }
            ]);
            this.router = router;
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], App.prototype, "appState", void 0);
        App = __decorate([
            aurelia_framework_1.inject(appState_1.AppState, aurelia_history_1.History), 
            __metadata('design:paramtypes', [Object, aurelia_history_1.History])
        ], App);
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=app.js.map
