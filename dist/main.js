(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/website/website-list/website-list.component */ "./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/website/website-new/website-new.component */ "./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/website/website-edit/website-edit.component */ "./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/page/page-list/page-list.component */ "./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/page/page-edit/page-edit.component */ "./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/page/page-new/page-new.component */ "./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/widget/widget-list/widget-list.component */ "./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/widget/widget-chooser/widget-chooser.component */ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-edit.component */ "./src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-header/widget-header.component */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-image/widget-image.component */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _components_omdbtest_omdbtest_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/omdbtest/omdbtest.component */ "./src/app/components/omdbtest/omdbtest.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component */ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/flickr.service.client */ "./src/app/services/flickr.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
                _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_9__["WebsiteListComponent"],
                _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_10__["WebsiteNewComponent"],
                _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_11__["WebsiteEditComponent"],
                _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_12__["PageListComponent"],
                _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_13__["PageEditComponent"],
                _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_14__["PageNewComponent"],
                _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_15__["WidgetListComponent"],
                _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_16__["WidgetChooserComponent"],
                _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_17__["WidgetEditComponent"],
                _components_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_18__["WidgetHeaderComponent"],
                _components_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_19__["WidgetImageComponent"],
                _components_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_20__["WidgetYoutubeComponent"],
                _components_omdbtest_omdbtest_component__WEBPACK_IMPORTED_MODULE_21__["OmdbtestComponent"],
                _components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_22__["FlickrImageSearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["Routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"]
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_23__["UserService"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_24__["WebsiteService"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_25__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_26__["WidgetService"], _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_27__["FlickrService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/website/website-list/website-list.component */ "./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/website/website-new/website-new.component */ "./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/website/website-edit/website-edit.component */ "./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/page/page-list/page-list.component */ "./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page/page-edit/page-edit.component */ "./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page/page-new/page-new.component */ "./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/widget/widget-list/widget-list.component */ "./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/widget/widget-chooser/widget-chooser.component */ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component */ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");













// Import all other components here 
var APP_ROUTES = [
    { path: '', component: _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: 'login', component: _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: 'register', component: _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"] },
    { path: 'user/:uid', component: _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"] },
    { path: 'user/:uid/website', component: _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_3__["WebsiteListComponent"] },
    { path: 'user/:uid/website/new', component: _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_4__["WebsiteNewComponent"] },
    { path: 'user/:uid/website/:wid', component: _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_5__["WebsiteEditComponent"] },
    { path: 'user/:uid/website/:wid/page', component: _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_6__["PageListComponent"] },
    { path: 'user/:uid/website/:wid/page/new', component: _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_8__["PageNewComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid', component: _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_7__["PageEditComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_9__["WidgetListComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_10__["WidgetChooserComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/flickr', component: _components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_11__["FlickrImageSearchComponent"] },
];
// Export the routes as module providers
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/components/omdbtest/omdbtest.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/omdbtest/omdbtest.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/omdbtest/omdbtest.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/omdbtest/omdbtest.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n   <form (ngSubmit)=\"search()\" #f=\"ngForm\">\n\t\t<div class=\"form-group\">\n\t\t\t<input class=\"form-control\" type=\"text\" name=\"title\" placeholder=\"MovieTitle\" required ngModel #title=\"ngModel\">\n\t\t</div>\n\t\t\n\t\t<button class=\"btn btn-primary btn-block\" [disabled]=\"f.invalid\" type=\"submit\">Search</button>\n\t\t\n\t</form>\n\t<ul class=\"list-group\">\n\n\t\t<li class='list-group-item' *ngFor=\"let movie of movies\">\n\t\t\t<h5>{{movie.Title}}</h5>\n\t\t\t<img [src]= \"movie.Poster\">\n\t\t</li>\n\t</ul>\t\n</div>\n"

/***/ }),

/***/ "./src/app/components/omdbtest/omdbtest.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/omdbtest/omdbtest.component.ts ***!
  \***********************************************************/
/*! exports provided: OmdbtestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OmdbtestComponent", function() { return OmdbtestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_omdb_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/omdb.service.client */ "./src/app/services/omdb.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OmdbtestComponent = /** @class */ (function () {
    function OmdbtestComponent(omdbService) {
        this.omdbService = omdbService;
        this.movies = [];
    }
    OmdbtestComponent.prototype.ngOnInit = function () {
    };
    OmdbtestComponent.prototype.search = function () {
        var _this = this;
        //Geting user input
        this.title = this.searchForm.value.title;
        //calling searchTitle in ombd client service;
        this.omdbService.searchMovie(this.title).subscribe(function (data) {
            _this.movies = data.Search;
            console.log(_this.movies);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], OmdbtestComponent.prototype, "searchForm", void 0);
    OmdbtestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-omdbtest',
            template: __webpack_require__(/*! ./omdbtest.component.html */ "./src/app/components/omdbtest/omdbtest.component.html"),
            styles: [__webpack_require__(/*! ./omdbtest.component.css */ "./src/app/components/omdbtest/omdbtest.component.css")]
        }),
        __metadata("design:paramtypes", [_services_omdb_service_client__WEBPACK_IMPORTED_MODULE_2__["OmdbService"]])
    ], OmdbtestComponent);
    return OmdbtestComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/page/page-edit/page-edit.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/page/page-edit/page-edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-light sw-bg-grey\">\r\n\t\t<a class=\"sw-color-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page\"><i class=\"fas fa-chevron-left\"></i></a>\r\n\t\t<div class=\"sw-90-width\">\r\n\t\t\t<a class=\"navbar-brand float-left\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}\"><b>Edit Page</b></a>\r\n\t\t</div>\r\n\t\t<button type=\"submit\" [disabled]=\"f.invalid\" form=\"pageForm\" class=\"btn sw-button-to-a sw-color-black float-right\"><i class=\"fas fa-check\"></i></button>\r\n\t</nav>\r\n\t<div class=\"container-fluid\">\r\n\t\t<form id=\"pageForm\" (ngSubmit)=\"update()\" #f=\"ngForm\">\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label><b>Name</b></label>\r\n\t\t\t\t<input class=\"form-control\" required ngModel=\"{{page.name}}\" #name=\"ngModel\" type=\"text\" name=\"name\" placeholder=\"Enter your page name...\" value=\"Blog Post\">\r\n\t\t\t</div>\r\n\r\n\t\t\t<div *ngIf=\"name.invalid && name.touched\" class=\"alert alert-warning\">Name cannot be empty</div>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label><b>Description</b></label>\r\n\t\t\t\t<input class=\"form-control\" ngModel={{page.description}} #description=\"ngModel\" type=\"text\" name=\"description\" placeholder=\"Enter your page description...\" value=\"Blog\">\r\n\t\t\t</div>\r\n\t\t\t<button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"f.invalid\">Update</button>\r\n\t\t\t<button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"remove()\">Delete</button>\r\n\t\t</form>\r\n\t</div>\r\n\t<footer class=\"navbar fixed-bottom navbar-light sw-bg-grey\">\r\n\t\t<div class=\"sw-full-width\">\r\n\t\t\t<a class=\"navbar-brand float-right\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user\"></i></a>\r\n\t\t</div>\r\n\t</footer>"

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/page/page-edit/page-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: PageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditComponent", function() { return PageEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.page = {
            websiteId: "",
            name: "",
            description: ""
        };
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.pageService.findPageById(_this.pid).subscribe(function (page) {
                _this.page = page;
                _this.name = _this.page.name;
                _this.description = _this.page.description;
            });
        });
    };
    PageEditComponent.prototype.update = function () {
        var _this = this;
        this.name = this.pageForm.value.name;
        this.description = this.pageForm.value.description;
        var updatedPage = {
            _id: this.pid,
            name: this.name,
            description: this.description,
            websiteId: this.wid
        };
        this.pageService.updatePage(this.pid, updatedPage).subscribe(function (page) {
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page']);
        });
    };
    PageEditComponent.prototype.remove = function () {
        var _this = this;
        this.pageService.deletePage(this.pid).subscribe(function (pages) {
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page']);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], PageEditComponent.prototype, "pageForm", void 0);
    PageEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-edit',
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/components/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/components/page/page-edit/page-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-light sw-bg-grey\">\r\n\t\t<a class=\"sw-color-black\" routerLink=\"/user/{{uid}}/website\"><i class=\"fas fa-chevron-left\"></i></a>\r\n\t\t<div class=\"sw-90-width\">\r\n\t\t\t<a class=\"navbar-brand float-left\" routerLink=\"/user/{{uid}}/website/{{wid}}/page\"><b>Page</b></a>\r\n\t\t</div>\r\n\t\t<a class=\"sw-color-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/new\"><i class=\"fas fa-plus\"></i></a>\r\n\t</nav>\r\n\t<div class=\"container-fluid\">\r\n\t\t<ul class=\"list-group list-group-flush\">\r\n\t\t\t<li class=\"list-group-item\" *ngFor=\"let page of pages\">\r\n\t\t\t\t<a class=\"sw-color-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{page._id}}/widget\">{{page.name}}</a>\r\n\t\t\t\t<a class=\"float-right sw-color-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{page._id}}\"><i class=\"fas fa-cog\"></i></a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<footer class=\"navbar fixed-bottom navbar-light sw-bg-grey\">\r\n\t\t<div class=\"sw-full-width\">\r\n\t\t\t<a class=\"navbar-brand float-right\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user\"></i></a>\r\n\t\t</div>\r\n\t</footer>"

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.ts ***!
  \******************************************************************/
/*! exports provided: PageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListComponent", function() { return PageListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageListComponent = /** @class */ (function () {
    function PageListComponent(pageService, activatedRoute) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pageService.findPageByWebsiteId(_this.wid).subscribe(function (pages) {
                _this.pages = pages;
            });
        });
    };
    PageListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-list',
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/components/page/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/components/page/page-list/page-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/page/page-new/page-new.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/page/page-new/page-new.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-light sw-bg-grey\">\r\n\t<a class=\"sw-color-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page\"><i class=\"fas fa-chevron-left\"></i></a>\r\n\t<div class=\"sw-90-width\">\r\n\t\t<a class=\"navbar-brand float-left\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/new\"><b>New Page</b></a>\r\n\t</div>\r\n\t<button [disabled]=\"f.invalid\" type=\"submit\" form=\"pageForm\" class=\"btn sw-button-to-a sw-color-black float-right\" >\r\n\t\t<i class=\"fas fa-check\"></i>\r\n\t</button>\r\n</nav>\r\n\r\n\r\n<div class=\"container-fluid\">\r\n\t<form id=\"pageForm\" (ngSubmit)=\"create()\" #f=\"ngForm\">\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label><b>Name</b></label>\r\n\t\t\t<input class=\"form-control\" required ngModel #name=\"ngModel\" type=\"text\" name=\"name\" placeholder=\"Enter your page name...\">\r\n\t\t</div>\r\n\r\n\t\t<div *ngIf=\"name.invalid && name.touched\" class=\"alert alert-warning\">Name cannot be empty</div>\r\n\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label><b>Description</b></label>\r\n\t\t\t<input class=\"form-control\" type=\"text\" name=\"description\" ngModel #description=\"ngModel\" placeholder=\"Enter your page description...\">\r\n\t\t</div>\r\n\r\n\t\t<button [disabled]=\"f.invalid\" class=\"btn btn-success btn-block\" type=\"submit\">Submit</button>\r\n\t\t<a class=\"btn btn-danger btn-block\" routerLink=\"/user/{{uid}}/website/{{wid}}/page\">Cancel</a>\r\n\r\n\t</form>\r\n</div>\r\n<footer class=\"navbar fixed-bottom navbar-light sw-bg-grey\">\r\n\t<div class=\"sw-full-width\">\r\n\t\t<a class=\"navbar-brand float-right\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user\"></i></a>\r\n\t</div>\r\n</footer>"

/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/page/page-new/page-new.component.ts ***!
  \****************************************************************/
/*! exports provided: PageNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNewComponent", function() { return PageNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
        });
    };
    PageNewComponent.prototype.create = function () {
        var _this = this;
        this.name = this.pageForm.value.name;
        this.description = this.pageForm.value.description;
        var newPage = {
            name: this.name,
            websiteId: this.wid,
            description: this.description
        };
        this.pageService.createPage(this.wid, newPage).subscribe(function (page) {
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page']);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], PageNewComponent.prototype, "pageForm", void 0);
    PageNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-new',
            template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/components/page/page-new/page-new.component.html"),
            styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/components/page/page-new/page-new.component.css")]
        }),
        __metadata("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/components/user/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/user/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/user/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<h1>Login</h1>\r\n\t<div *ngIf=\"errorFlag\" class=\"alert alert-danger\">Invalid username or password</div>\r\n\t<form (ngSubmit)=\"login()\" #f=\"ngForm\">\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<input class=\"form-control\" type=\"text\" name=\"username\" placeholder=\"Username\" required ngModel #username=\"ngModel\">\r\n\t\t</div>\r\n\t\t<span class=\"alert\" *ngIf=\"username.invalid && username.touched\">Please enter username!</span>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<input class=\"form-control\" required type=\"password\" name=\"password\" placeholder=\"Password\" ngModel #password=\"ngModel\">\r\n\t\t</div>\r\n\t\t<span class=\"alert\" *ngIf=\"password.invalid && password.touched\">Please enter password!</span>\r\n\t\t<button class=\"btn btn-primary btn-block\" [disabled]=\"f.invalid\" type=\"submit\">Login</button>\r\n\t\t<button class=\"btn btn-success btn-block\" routerLink=\"/register\">Register</button>\r\n\t</form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/user/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    // userService: UserService;
    // router: Router;
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.findUserByCredentials(this.username, this.password).subscribe(function (user) {
            if (user) {
                _this.errorFlag = false;
                _this.router.navigate(['user', user._id]);
            }
            else {
                _this.errorFlag = true;
            }
        }, function (error) {
            _this.errorFlag = true;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user/profile/profile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<nav class=\"navbar navbar-dark bg-primary fixed-top\">\r\n\t\t<a class=\"navbar-brand\" routerLink=\"user/:uid\"><b>Profile</b></a>\r\n\t\t<button class=\"btn sw-color-white sw-button-to-a\" type=\"submit\" form=\"profileForm\" [disabled]=\"f.invalid\"><i class=\"fas fa-check\"></i></button>\r\n\t</nav>\r\n\t<div class=\"container-fluid\">\r\n\t\t<div *ngIf=\"usernameTaken\" class=\"alert alert-danger\">Username is taken, please try another one.</div>\r\n\t\t<div *ngIf=\"submitSuccess\" class=\"alert alert-success\">Update successfully!</div>\r\n\t\t<form (ngSubmit)=\"update()\" id=\"profileForm\" #f=\"ngForm\">\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<h1>{{this.user.username}}</h1>\r\n\t\t\t\t<label for=\"username\"><b>Username</b></label>\r\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"username\" required ngModel=\"{{user.username}}\" #username=\"ngModel\" placeholder=\"example\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"email\"><b>Email</b></label>\r\n\t\t\t\t<input class=\"form-control\" type=\"email\" name=\"email\" ngModel=\"{{user.email}}\" #email=\"ngModel\" placeholder=\"example@email.com\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"firstName\"><b>First Name</b></label>\r\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"firstName\" ngModel=\"{{user.firstName}}\" #firstName=\"ngModel\" placeholder=\"Alice\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"lastName\"><b>Last Name</b></label>\r\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"lastName\" ngModel=\"{{user.lastName}}\" #lastname=\"ngModel\" placeholder=\"Wang\">\r\n\t\t\t</div>\r\n\t\t\t<a class=\"btn btn-primary btn-block\" routerLink=\"/user/{{uid}}/website\">Websites</a>\r\n\t\t\t<a class=\"btn btn-danger btn-block\" routerLink=\"/login\">Logout</a>\r\n\t\t</form>\r\n\t</div>\r\n\t<nav class=\"navbar navbar-dark bg-primary fixed-bottom\">\r\n\t\t<div class=\"sw-full-width\">\r\n\t\t\t<a routerLink=\"user/:uid\" class=\"sw-color-white float-right\" ><i class=\"fas fa-user\"></i></a>\r\n\t\t</div>\r\n\t</nav>"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(activatedRoute, userService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.activatedRoute.params.subscribe(
        // 	function info(params){
        // 		this.uid = params['uid'];
        // 		this.user = this.userService.findUserById(this.uid);
        // 		this.username = this.user.username;
        // 		this.email = this.user.email;
        // 		this.firstName = this.user.firstName;
        // 		this.lastName = this.user.lastName;
        // }.bind(this));
        this.usernameTaken = false;
        this.submitSuccess = false;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.userService.findUserById(_this.uid).subscribe(function (user) {
                _this.user = user;
                _this.username = _this.user.username;
                _this.email = _this.user.email;
                _this.firstName = _this.user.firstName;
                _this.lastName = _this.user.lastName;
                _this.oldUsername = _this.user.username;
            }); // this.user = this.userService.findUserById(this.uid);
            // this.username = this.user.username;
            // this.email = this.user.email;
            // this.firstName = this.user.firstName;
            // this.lastName = this.user.lastName;
            // this.oldUsername = this.user.username;
        });
    };
    ProfileComponent.prototype.update = function () {
        var _this = this;
        this.username = this.profileForm.value.username;
        this.email = this.profileForm.value.email;
        this.firstName = this.profileForm.value.firstName;
        this.lastName = this.profileForm.value.lastName;
        //check if the new username was taken or the username was not changed
        this.userService.findUserByUsername(this.username).subscribe(function (user) {
            _this.aUser = user;
        });
        if (this.aUser && this.oldUsername !== this.username) {
            this.usernameTaken = true;
            this.submitSuccess = false;
        }
        else {
            var updatedUser = {
                _id: this.user._id,
                username: this.username,
                password: this.user.password,
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email
            };
            this.userService.updateUser(this.uid, updatedUser).subscribe(function (user2) {
                _this.usernameTaken = false;
                _this.submitSuccess = true;
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", Object)
    ], ProfileComponent.prototype, "profileForm", void 0);
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user/register/register.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/user/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t\t<h1>Register</h1>\r\n\t\t<div class=\"alert alert-danger\" *ngIf=\"usernameError\">\r\n\t\t\tUsername is already taken, please try another one.\t\t\r\n\t\t</div>\r\n\t\t<div class=\"alert alert-danger\" *ngIf=\"passwordError\">\r\n\t\t\tTwo passwords are not matched!\t\t\t\r\n\t\t</div>\r\n\t\t<form (ngSubmit)=\"register()\" #f=\"ngForm\">\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"username\" required ngModel #username=\"ngModel\" placeholder=\"Username\">\r\n\t\t\t</div>\r\n\t\t\t<span class=\"alert\" *ngIf=\"username.invalid && username.touched\">Please enter username!</span>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<input class=\"form-control\" type=\"password\" name=\"password\" required  ngModel #password=\"ngModel\" placeholder=\"Password\">\r\n\t\t\t</div>\r\n\t\t\t<span class=\"alert\" *ngIf=\"password.invalid && password.touched\">Please enter password!</span>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<input class=\"form-control\" type=\"password\" name=\"verifyPassword\" required ngModel #verifyPassword=\"ngModel\" placeholder=\"Verify Password\">\r\n\t\t\t</div>\r\n\t\t\t<span class=\"alert\" *ngIf=\"verifyPassword.invalid && verifyPassword.touched\">Please verify password!</span>\r\n\t\t\t<button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"f.invalid\">Register</button>\r\n\t\t\t<button class=\"btn btn-danger btn-block\" routerLink=\"/login\">Cancel</button>\r\n\t\t</form>\r\n\t</div>\r\n"

/***/ }),

/***/ "./src/app/components/user/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.passwordError = false;
        this.usernameError = false;
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.verifyPassword = this.registerForm.value.verifyPassword;
        if (this.password !== this.verifyPassword) {
            this.passwordError = true;
        }
        else {
            this.passwordError = false;
            this.userService.findUserByUsername(this.username).subscribe(function (data) {
                if (!data) {
                    var newUser = {
                        username: _this.username,
                        password: _this.password,
                        firstName: "",
                        lastName: "",
                        email: ""
                    };
                    _this.userService.createUser(newUser).subscribe(function (data) {
                        var id = data._id;
                        _this.router.navigate(['user', id]);
                    }, function (error) {
                        _this.usernameError = true;
                    });
                }
                else {
                    _this.usernameError = true;
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/website/website-edit/website-edit.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/website/website-edit/website-edit.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\r\n\t<nav class=\"row navbar navbar-dark bg-primary fixed-top\">\r\n\t\t<!-- Left Navbar -->\r\n\t\t<div class=\"col-sm-4 d-none d-md-block\">\r\n\t\t\t<a class=\"sw-color-white\" routerLink=\"/user/{{uid}}/website\"><i class=\"fas fa-chevron-left\"></i></a>\r\n\t\t\t<a class=\"sw-color-white sw-left-padding\" routerLink=\"/user/{{uid}}/website\"><b>Websites</b></a>\r\n\t\t\t<a class=\"sw-color-white float-right\" routerLink=\"/user/{{uid}}/website/new\"><i class=\"fas fa-plus\"></i></a>\r\n\t\t</div>\r\n\t\t<!-- Right Navbar -->\r\n\t\t<div class=\"col-md-8\">\r\n\t\t\t<a class=\"sw-color-white\" routerLink=\"/user/{{uid}}/website/{{wid}}\"><b>Edit Website</b></a>\r\n\t\t\t<button class=\"btn sw-color-white float-right sw-button-to-a\" type=\"submit\" form=\"websiteForm\"><i class=\"fas fa-check\"></i></button>\r\n\t\t</div>\r\n\t</nav>\r\n\t<div class=\"row\">\r\n\t\t<!-- Left Website List -->\r\n\t\t<div class=\"col-md-4 d-none d-md-block\">\r\n\t\t\t<div class=\"container-fluid\">\r\n\t\t\t\t<ul class=\"list-group\">\r\n\t\t\t\t\t<li class=\"list-group-item\" *ngFor =\"let website of websites\">\r\n\t\t\t\t\t\t<a routerLink=\"/user/{{uid}}/website/{{website._id}}/page\">{{website.name}}</a>\r\n\t\t\t\t\t\t<a class=\"float-right\" routerLink=\"/user/{{uid}}/website/{{website._id}}\"><i class=\"fas fa-cog\"></i></a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- Right Form -->\r\n\t\t<div class=\"col-md-8\">\r\n\t\t\t<div class=\"container-fluid\">\r\n\t\t\t\t<form id=\"websiteForm\" (ngSubmit)=\"update()\" #f=\"ngForm\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label><b>Name</b></label>\r\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"Enter your website name\" required ngModel=\"{{website.name}}\" #name=\"ngModel\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"alert alert-warning\" *ngIf=\"name.invalid && name.touched\">Name cannot be empty</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label><b>Description</b></label>\r\n\t\t\t\t\t\t<textarea rows=\"5\" class=\"form-control\" name=\"description\" placeholder=\"Describe your website here\" ngModel=\"{{website.description}}\" #description=\"ngModel\"></textarea>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<button (click)=\"delete()\" type=\"button\" class=\"btn btn-danger\">Delete</button>\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary float-right\">Update</button>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t</div>\r\n\t<footer class=\"navbar fixed-bottom navbar-dark bg-primary\">\r\n\t\t<div class=\"sw-full-width\">\r\n\t\t\t<a class=\"navbar-brand float-right\" routerLink=\"/user/:uid\"><i class=\"fas fa-user\"></i></a>\r\n\t\t</div>\r\n\t</footer>"

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/website/website-edit/website-edit.component.ts ***!
  \***************************************************************************/
/*! exports provided: WebsiteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteEditComponent", function() { return WebsiteEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.websiteService.findWebsitesByUser(_this.uid).subscribe(function (websites) {
                _this.websites = websites;
                _this.name = _this.website.name;
                _this.description = _this.website.description;
            });
        });
    };
    WebsiteEditComponent.prototype.update = function () {
        var _this = this;
        this.name = this.websiteForm.value.name;
        this.description = this.websiteForm.value.description;
        var updatedWeb = {
            _id: this.wid,
            name: this.name,
            developerId: this.uid,
            description: this.description
        };
        this.websiteService.updateWebsite(this.wid, updatedWeb).subscribe(function (website) {
            _this.router.navigate(['user', _this.uid, 'website']);
        });
    };
    WebsiteEditComponent.prototype.delete = function () {
        var _this = this;
        this.websiteService.deleteWebsite(this.wid).subscribe(function (website) {
            _this.router.navigate(['user', _this.uid, 'website']);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], WebsiteEditComponent.prototype, "websiteForm", void 0);
    WebsiteEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-website-edit',
            template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/components/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/components/website/website-edit/website-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_1__["WebsiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-dark bg-primary\">\r\n\t\t<a class=\"sw-color-white\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-chevron-left\"></i></a>\r\n\t\t<div class=\"sw-90-width\">\r\n\t\t\t<a class=\"navbar-brand float-left\" routerLink=\"/user/{{uid}}/website\"><b>Websites</b></a>\r\n\t\t</div>\r\n\t\t<a class=\"sw-color-white\" routerLink=\"/user/{{uid}}/website/new\"><i class=\"fas fa-plus\"></i></a>\r\n\t</nav>\r\n\t<!-- websites list -->\r\n\t<div class=\"container-fluid\">\r\n\t\t<ul class=\"list-group\">\r\n\t\t\t<li class=\"list-group-item\" *ngFor =\"let website of websites\">\r\n\t\t\t\t<a routerLink=\"/user/{{uid}}/website/{{website._id}}/page\">{{website.name}}</a>\r\n\t\t\t\t<a class=\"float-right\" routerLink=\"/user/{{uid}}/website/{{website._id}}\"><i class=\"fas fa-cog\"></i></a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>\r\n\r\n\t<footer class=\"navbar fixed-bottom navbar-dark bg-primary\">\r\n\t\t<div class=\"sw-full-width\">\r\n\t\t\t<a class=\"navbar-brand float-right\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user\"></i></a>\r\n\t\t</div>\r\n\t</footer>"

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: WebsiteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteListComponent", function() { return WebsiteListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, activatedRoute) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.websiteService.findWebsitesByUser(_this.uid).subscribe(function (websites) {
                _this.websites = websites;
            });
        });
    };
    WebsiteListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-website-list',
            template: __webpack_require__(/*! ./website-list.component.html */ "./src/app/components/website/website-list/website-list.component.html"),
            styles: [__webpack_require__(/*! ./website-list.component.css */ "./src/app/components/website/website-list/website-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_1__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/website/website-new/website-new.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/website/website-new/website-new.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\r\n\t<nav class=\"row navbar navbar-dark bg-primary fixed-top\">\r\n\t\t<!-- Left Navbar -->\r\n\t\t<div class=\"col-sm-4 d-none d-md-block\">\r\n\t\t\t<a class=\"sw-color-white\" routerLink=\"/user/{{uid}}/website\"><i class=\"fas fa-chevron-left\"></i></a>\r\n\t\t\t<a class=\"sw-color-white sw-left-padding\" routerLink=\"/user/{{uid}}/website\"><b>Websites</b></a>\r\n\t\t\t<a class=\"sw-color-white float-right\" routerLink=\"/user/{{uid}}/website/new\"><i class=\"fas fa-plus\"></i></a>\r\n\t\t</div>\r\n\t\t<!-- Right Navbar -->\r\n\t\t<div class=\"col-md-8\">\r\n\t\t\t<a class=\"sw-color-white\" routerLink=\"/user/{{uid}}/website/new\"><b>New Website</b></a>\r\n\t\t\t<button class=\"btn sw-color-white float-right sw-button-to-a\" type=\"submit\" form=\"websiteForm\" [disabled]=\"f.invalid\"><i class=\"fas fa-check\"></i></button>\r\n\t\t</div>\r\n\t</nav>\r\n\t<div class=\"row\">\r\n\t\t<!-- Left Website List -->\r\n\t\t<div class=\"col-md-4 d-none d-md-block\">\r\n\t\t\t<div class=\"container-fluid\">\r\n\t\t\t\t<ul class=\"list-group\">\r\n\t\t\t\t\t<li class=\"list-group-item\" *ngFor =\"let website of websites\">\r\n\t\t\t\t\t\t<a routerLink=\"/user/{{uid}}/website/{{website._id}}/page\">{{website.name}}</a>\r\n\t\t\t\t\t\t<a class=\"float-right\" routerLink=\"/user/{{uid}}/website/{{website._id}}\"><i class=\"fas fa-cog\"></i></a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- Right Form -->\r\n\t\t<div class=\"col-md-8\">\r\n\t\t\t<div class=\"container-fluid\">\r\n\t\t\t\t<form id=\"websiteForm\" (ngSubmit)=\"create()\" #f=\"ngForm\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label><b>Name</b></label>\r\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"Enter your website name\" required ngModel #name=\"ngModel\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"alert alert-warning\" *ngIf=\"name.invalid && name.touched\">Name cannot be empty</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label><b>Description</b></label>\r\n\t\t\t\t\t\t<textarea rows=\"5\" class=\"form-control\" name=\"description\" placeholder=\"Describe your website here\" ngModel #description=\"ngModel\"></textarea>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<a routerLink=\"/user/{{uid}}/website\" class=\"btn btn-danger\">Cancel</a>\r\n\t\t\t\t\t<button [disabled]=\"f.invalid\" type=\"submit\" class=\"btn btn-success float-right\">Submit</button>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t</div>\r\n\t<footer class=\"navbar fixed-bottom navbar-dark bg-primary\">\r\n\t\t<div class=\"sw-full-width\">\r\n\t\t\t<a class=\"navbar-brand float-right\" routerLink=\"/user/:uid\"><i class=\"fas fa-user\"></i></a>\r\n\t\t</div>\r\n\t</footer>"

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/website/website-new/website-new.component.ts ***!
  \*************************************************************************/
/*! exports provided: WebsiteNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteNewComponent", function() { return WebsiteNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.websiteService.findWebsitesByUser(_this.uid).subscribe(function (websites) {
                _this.websites = websites;
            });
        });
    };
    WebsiteNewComponent.prototype.create = function () {
        var _this = this;
        this.name = this.websiteForm.value.name;
        this.description = this.websiteForm.value.description;
        var newWebsite = {
            name: this.name,
            developerId: this.uid,
            description: this.description
        };
        this.websiteService.createWebsite(this.uid, newWebsite).subscribe(function (website) {
            _this.router.navigate(['user', _this.uid, 'website']);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], WebsiteNewComponent.prototype, "websiteForm", void 0);
    WebsiteNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-website-new',
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/components/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/components/website/website-new/website-new.component.css")]
        }),
        __metadata("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_1__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/widget/widget-chooser/widget-chooser.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/widget/widget-chooser/widget-chooser.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\r\n\t<nav class=\"navbar fixed-top navbar-light sw-bg-grey\">\r\n\t\t<a class=\"sw-color-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"><i class=\"fas fa-chevron-left\"></i></a>\r\n\t\t<div class=\"sw-95-width\">\r\n\t\t\t<a class=\"navbar-brand float-left\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\"><b>Choose Widget</b></a>\r\n\t\t</div>\r\n\t</nav>\r\n\t<div class=\"container-fluid\">\r\n\t\t<ul class=\"list-group list-group-flush\">\r\n\t\t\t<li class=\"list-group-item\"><button class=\"btn sw-button-to-a\" (click)=\"create('HEADING')\">Header</button></li>\r\n\t\t\t<li class=\"list-group-item\"><a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">Label</a></li>\r\n\t\t\t<li class=\"list-group-item\"><a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">HTML</a></li>\r\n\t\t\t<li class=\"list-group-item\"><a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">Text Input</a></li>\r\n\t\t\t<li class=\"list-group-item\"><a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">Link</a></li>\r\n\t\t\t<li class=\"list-group-item\"><a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">Button</a></li>\r\n\t\t\t<li class=\"list-group-item\"><button class=\"btn sw-button-to-a\" (click)=\"create('IMAGE')\">Image</button></li>\r\n\t\t\t<li class=\"list-group-item\"><button class=\"btn sw-button-to-a\" (click)=\"create('YOUTUBE')\">YouTube</button></li>\r\n\t\t\t<li class=\"list-group-item\"><a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">Data Table</a></li>\r\n\t\t\t<li class=\"list-group-item\"><a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">Repeater</a></li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<!-- footer -->\r\n\t<footer class=\"navbar fixed-bottom navbar-light sw-bg-grey\">\r\n\t\t<div class=\"sw-full-width\">\r\n\t\t\t<a class=\"navbar-brand float-right\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user\"></i></a>\r\n\t\t</div>\r\n\t</footer>"

/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/widget/widget-chooser/widget-chooser.component.ts ***!
  \******************************************************************************/
/*! exports provided: WidgetChooserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetChooserComponent", function() { return WidgetChooserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(activatedRoute, widgetService, router) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.router = router;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
        });
    };
    WidgetChooserComponent.prototype.create = function (type) {
        var _this = this;
        var newWidget = {
            _id: '',
            widgetType: type,
            pageId: this.pid
        };
        this.widgetService.createWidget(this.pid, newWidget).subscribe(function (widget) {
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget', widget._id]);
        });
    };
    WidgetChooserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-chooser',
            template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/components/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/components/widget/widget-chooser/widget-chooser.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-edit.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-edit.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget.widgetType\">\r\n\t<!-- Heading -->\r\n\t<div *ngSwitchCase=\"'HEADING'\">\r\n\t\t<app-widget-header></app-widget-header>\r\n\t</div>\r\n\t<!-- Image -->\r\n\t<div *ngSwitchCase=\"'IMAGE'\">\r\n\t\t<app-widget-image></app-widget-image>\r\n\t</div>\r\n\t<!-- Youtube -->\r\n\t<div *ngSwitchCase=\"'YOUTUBE'\">\r\n\t\t<app-widget-youtube></app-widget-youtube>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: WidgetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetEditComponent", function() { return WidgetEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.widget = {
            _id: "",
            widgetType: "",
            pageId: '',
        };
    }
    ;
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.wgid = params['wgid'];
            _this.widgetService.findWidgetById(_this.wgid).subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    WidgetEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-edit',
            template: __webpack_require__(/*! ./widget-edit.component.html */ "./src/app/components/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__(/*! ./widget-edit.component.css */ "./src/app/components/widget/widget-edit/widget-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_1__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-header/widget-header.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-header/widget-header.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\r\n\t<nav class=\"navbar fixed-top navbar-light sw-bg-grey\">\r\n\t\t<a class=\"sw-color-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"><i class=\"fas fa-chevron-left\"></i></a>\r\n\t\t<div class=\"sw-90-width\">\r\n\t\t\t<a class=\"navbar-brand float-left\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\"><b>Edit Widget</b></a>\r\n\t\t</div>\r\n\t\t<button [disabled]=\"f.invalid\" type=\"submit\" form=\"widgetForm\" class=\"btn sw-button-to-a sw-color-black float-right\" ><i class=\"fas fa-check\"></i></button>\r\n\t</nav>\r\n\t<!-- form -->\r\n\t<div class=\"container-fluid\">\r\n\t\t<form id=\"widgetForm\" (ngSubmit)=\"update()\" #f=\"ngForm\">\r\n\t\t\t\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label><b>Name</b></label>\r\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"name\" ngModel=\"{{widget.name}}\" #name=\"ngModel\" placeholder=\"Enter your widget name...\">\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label><b>Text</b></label>\r\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"text\" ngModel=\"{{widget.text}}\" required #text=\"ngModel\" placeholder=\"Enter your widget text...\">\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"alert alert-danger\" *ngIf=\"text.invalid && text.touched\">Text can't be empty!</div>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label><b>Size</b></label>\r\n\t\t\t\t<input class=\"form-control\" type=\"number\" name=\"size\" ngModel=\"{{widget.size}}\" required #size=\"ngModel\" placeholder=\"Enter your widget text...\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"alert alert-danger\" *ngIf=\"size.invalid && size.touched\">Size can't be empty!</div>\r\n\t\t\t<button [disabled]=\"f.invalid\" class=\"btn btn-primary btn-block\" type=\"submit\">Submit</button>\r\n\t\t\t<button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"remove()\" >Delete</button>\r\n\t\t</form>\r\n\t</div>\r\n\t<!-- footer -->\r\n\t<footer class=\"navbar fixed-bottom navbar-light sw-bg-grey\">\r\n\t\t<div class=\"sw-full-width\">\r\n\t\t\t<a class=\"navbar-brand float-right\" routerLink=\"/user/:uid\"><i class=\"fas fa-user\"></i></a>\r\n\t\t</div>\r\n\t</footer>"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts ***!
  \****************************************************************************************/
/*! exports provided: WidgetHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHeaderComponent", function() { return WidgetHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(widgetService, activitedRoute, router) {
        this.widgetService = widgetService;
        this.activitedRoute = activitedRoute;
        this.router = router;
        this.widget = {
            _id: "",
            widgetType: "",
            pageId: '',
        };
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activitedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widgetService.findWidgetById(_this.wgid).subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    WidgetHeaderComponent.prototype.update = function () {
        var _this = this;
        this.name = this.widgetForm.value.name;
        this.text = this.widgetForm.value.text;
        this.size = this.widgetForm.value.size;
        var updatedWidget = {
            _id: this.wgid,
            name: this.name,
            widgetType: this.widget.widgetType,
            pageId: this.pid,
            size: this.size,
            text: this.text
        };
        this.widgetService.updateWidget(this.wgid, updatedWidget).subscribe(function (widget) {
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    WidgetHeaderComponent.prototype.remove = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid).subscribe(function (widgets) {
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], WidgetHeaderComponent.prototype, "widgetForm", void 0);
    WidgetHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-header',
            template: __webpack_require__(/*! ./widget-header.component.html */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__(/*! ./widget-header.component.css */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css":
/*!******************************************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n\t<nav class=\"navbar fixed-top navbar-light sw-bg-grey\">\n\t\t<a class=\"sw-color-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{wgid}}\"><i class=\"fas fa-chevron-left\"></i></a>\n\t\t<div class=\"sw-90-width\">\n\t\t\t<a class=\"navbar-brand float-left\" routerLink=\"user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{wgid}}/flickr\"><b>Search Flickr</b></a>\n\t\t</div>\n\t\t\n\t</nav>\n<div class=\"container-fluid\">\n<div class=\"input-group\">\n   <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\">\n      <span class=\"input-group-btn\">\n       <a (click)=\"searchPhotos()\" class=\"btn btn-default\" type=\"button\">Search</a>\n\n       </span>\n</div>\n<br>\n<div class=\"row\">\n\n  <div *ngFor = \"let pic of photos\"\n   class=\"col-xs-4\">\n    <img (click)=\"selectPhoto(pic)\" width=\"100%\"\n     [src] = \"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' +   pic.id + '_' + pic.secret + '_s.jpg']\"/>\n    </div>\n </div>\n</div>\n<!-- footer -->\n\t<footer class=\"navbar fixed-bottom navbar-light sw-bg-grey\">\n\t\t<div class=\"sw-full-width\">\n\t\t\t<a class=\"navbar-brand float-right\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user\"></i></a>\n\t\t</div>\n\t</footer>"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: FlickrImageSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrImageSearchComponent", function() { return FlickrImageSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/flickr.service.client */ "./src/app/services/flickr.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FlickrImageSearchComponent = /** @class */ (function () {
    function FlickrImageSearchComponent(router, activatedRoute, flickrService, widgetService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.flickrService = flickrService;
        this.widgetService = widgetService;
        this.widget = {
            _id: "",
            widgetType: "",
            pageId: ""
        };
    }
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params["uid"];
            _this.wid = params["wid"];
            _this.pid = params["pid"];
            _this.wgid = params["wgid"];
            _this.widgetService.findWidgetById(_this.wgid).subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    FlickrImageSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        this.flickrService.searchPhotos(this.searchText).subscribe(function (data) {
            //console.log(this.searchText);
            //console.log(data);
            var val = data._body;
            val = val.replace('jsonFlickrApi(', '');
            val = val.substring(0, val.length - 1);
            val = JSON.parse(val);
            _this.photos = val.photos.photo;
            //console.log(this.photo);
        });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        this.widget.url = url;
        this.widgetService.updateWidget(this.wgid, this.widget).subscribe(function (widget) {
            _this.router.navigate(["user", _this.uid, "website", _this.wid, " page", _this.pid, "widget", _this.wgid]);
        });
    };
    FlickrImageSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flickr-image-search',
            template: __webpack_require__(/*! ./flickr-image-search.component.html */ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
            styles: [__webpack_require__(/*! ./flickr-image-search.component.css */ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_1__["FlickrService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"]])
    ], FlickrImageSearchComponent);
    return FlickrImageSearchComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/widget-image.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/widget-image.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\r\n\t<nav class=\"navbar fixed-top navbar-light sw-bg-grey\">\r\n\t\t<a class=\"sw-color-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"><i class=\"fas fa-chevron-left\"></i></a>\r\n\t\t<div class=\"sw-90-width\">\r\n\t\t\t<a class=\"navbar-brand float-left\" routerLink=\"user/{{uid}}/website/:wid/page/{{pid}}/widget/new\"><b>Edit Widget</b></a>\r\n\t\t</div>\r\n\t\t<button [disabled]=\"f.invalid\" type=\"submit\" form=\"widgetForm\" class=\"btn sw-button-to-a sw-color-black float-right\" ><i class=\"fas fa-check\"></i></button>\r\n\t</nav>\r\n\t<!-- form -->\r\n\t<div class=\"container-fluid\">\r\n\t\t<form id=\"widgetForm\" (ngSubmit)=\"update()\" #f=\"ngForm\">\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label><b>Name</b></label>\r\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"name\" ngModel=\"{{widget.name}}\" #name=\"ngModel\" placeholder=\"Enter your widget name...\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label><b>Text</b></label>\r\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"text\" ngModel=\"{{widget.text}}\" #text=\"ngModel\" placeholder=\"Enter your widget text...\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label><b>URL</b></label>\r\n\t\t\t\t<input class=\"form-control\" required ngModel=\"{{widget.url}}\" #url=\"ngModel\" type=\"text\" name=\"url\" placeholder=\"https://www.google.com\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"alert alert-danger\" *ngIf=\"url.invalid && url.touched\">Url can't be empty!</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label><b>Width</b></label>\r\n\t\t\t\t<input class=\"form-control\" required ngModel=\"{{widget.width}}\" #width=\"ngModel\"  type=\"text\" name=\"width\" placeholder=\"100%\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"alert alert-danger\" *ngIf=\"width.invalid && width.touched\">Width can't be empty!</div>\r\n<form ngNoForm action=\"{{baseUrl}}/api/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{wgid}}/upload\" method=\"post\" enctype=\"multipart/form-data\">\r\n\r\n          <div>\r\n\r\n              <label class='form-group'><b>Upload</b>b></label>\r\n\r\n              <input  name=\"myFile\"   type=\"file\" class=\"form-control\"/>\r\n\r\n               <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\r\n\r\n                            </div>\r\n\r\n                        </form>\r\n                     <br> \r\n              <button class=\"btn btn-primary btn-block\" routerLink= '/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{wgid}}/flickr'> Choose from Flickr\r\n              </button>       \r\n\t\t\t<button class=\"btn btn-danger btn-block\" type=\"button\" (click)=\"remove()\">Delete</button>\r\n\t\t</form>\r\n\t</div>\r\n\t<!-- footer -->\r\n\t<footer class=\"navbar fixed-bottom navbar-light sw-bg-grey\">\r\n\t\t<div class=\"sw-full-width\">\r\n\t\t\t<a class=\"navbar-brand float-right\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user\"></i></a>\r\n\t\t</div>\r\n\t</footer>"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts ***!
  \**************************************************************************************/
/*! exports provided: WidgetImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetImageComponent", function() { return WidgetImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widget = {
            _id: "",
            widgetType: "",
            pageId: '',
        };
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
            _this.widgetService.findWidgetById(_this.wgid).subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    WidgetImageComponent.prototype.remove = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid).subscribe(function (widgets) {
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    WidgetImageComponent.prototype.update = function () {
        var _this = this;
        this.name = this.widgetForm.value.name;
        this.text = this.widgetForm.value.text;
        this.url = this.widgetForm.value.url;
        this.width = this.widgetForm.value.width;
        var updatedWidget = {
            _id: this.wgid,
            name: this.name,
            text: this.text,
            url: this.url,
            width: this.width,
            pageId: this.pid,
            widgetType: this.widget.widgetType
        };
        this.widgetService.updateWidget(this.wgid, updatedWidget).subscribe(function (widget) {
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], WidgetImageComponent.prototype, "widgetForm", void 0);
    WidgetImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-image',
            template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        __metadata("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\r\n\t<nav class=\"navbar fixed-top navbar-light sw-bg-grey\">\r\n\t\t<a class=\"sw-color-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"><i class=\"fas fa-chevron-left\"></i></a>\r\n\t\t<div class=\"sw-90-width\">\r\n\t\t\t<a class=\"navbar-brand float-left\" routerLink=\"user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\"><b>Edit Widget</b></a>\r\n\t\t</div>\r\n\t\t<button [disabled]=\"f.invalid\" type=\"submit\" form=\"widgetForm\" class=\"btn sw-button-to-a sw-color-black float-right\" ><i class=\"fas fa-check\"></i></button>\r\n\t</nav>\r\n\t<!-- form -->\r\n\t<div class=\"container-fluid\">\r\n\t\t<form id=\"widgetForm\" (ngSubmit)=\"update()\" #f=\"ngForm\">\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label><b>Name</b></label>\r\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"name\" ngModel=\"{{widget.name}}\" #name=\"ngModel\" placeholder=\"Enter your widget name...\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label><b>Text</b></label>\r\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"text\" ngModel=\"{{widget.text}}\" #text=\"ngModel\" placeholder=\"Enter your widget text...\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label><b>URL</b></label>\r\n\t\t\t\t<input class=\"form-control\" required ngModel=\"{{widget.url}}\" #url=\"ngModel\" type=\"text\" name=\"url\" placeholder=\"https://www.google.com\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"alert alert-danger\" *ngIf=\"url.invalid && url.touched\">Url can't be empty!</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label><b>Width</b></label>\r\n\t\t\t\t<input class=\"form-control\" required ngModel=\"{{widget.width}}\" #width=\"ngModel\"  type=\"text\" name=\"width\" placeholder=\"100%\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"alert alert-danger\" *ngIf=\"width.invalid && width.touched\">Width can't be empty!</div>\r\n\t\t\t<button type=\"submit\" [disabled]=\"f.invalid\" class=\"btn btn-primary btn-block\">Submit</button>\r\n\t\t\t<button class=\"btn btn-danger btn-block\" type=\"button\" (click)=\"remove()\">Delete</button>\r\n\t\t</form>\r\n\t</div>\r\n\t<!-- footer -->\r\n\t<footer class=\"navbar fixed-bottom navbar-light sw-bg-grey\">\r\n\t\t<div class=\"sw-full-width\">\r\n\t\t\t<a class=\"navbar-brand float-right\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user\"></i></a>\r\n\t\t</div>\r\n\t</footer>"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts ***!
  \******************************************************************************************/
/*! exports provided: WidgetYoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetYoutubeComponent", function() { return WidgetYoutubeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widgetService.findWidgetById(_this.wgid).subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    WidgetYoutubeComponent.prototype.remove = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid).subscribe(function (widgets) {
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    WidgetYoutubeComponent.prototype.update = function () {
        var _this = this;
        this.name = this.widgetForm.value.name;
        this.text = this.widgetForm.value.text;
        this.url = this.widgetForm.value.url;
        this.width = this.widgetForm.value.width;
        var updatedWidget = {
            _id: this.wgid,
            name: this.name,
            text: this.text,
            url: this.url,
            width: this.width,
            pageId: this.pid,
            widgetType: this.widget.widgetType
        };
        this.widgetService.updateWidget(this.wgid, updatedWidget).subscribe(function (widget) {
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], WidgetYoutubeComponent.prototype, "widgetForm", void 0);
    WidgetYoutubeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-youtube',
            template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        __metadata("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\r\n\t<nav class=\"navbar fixed-top navbar-light sw-bg-grey\">\r\n\t\t<a class=\"sw-color-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page\"><i class=\"fas fa-chevron-left\"></i></a>\r\n\t\t<div class=\"sw-90-width\">\r\n\t\t\t<a class=\"navbar-brand float-left\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"><b>Widgets</b></a>\r\n\t\t</div>\r\n\t\t<a class=\"sw-color-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\"><i class=\"fas fa-plus\"></i></a>\r\n\t</nav>\r\n\t<!-- Widgets -->\r\n\t<div class=\"container-fluid\">\r\n\t\t<div *ngFor=\"let widget of widgets\">\r\n\t\t\t<!-- icons for each widget -->\r\n\t\t\t<div class=\"sw-absolute-right sw-front\">\r\n\t\t\t\t<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{widget._id}}\"><i class=\"fas fa-cog\"></i></a>\r\n\t\t\t\t<a href=\"#\"><i class=\"fas fa-bars\"></i></a>\r\n\t\t\t</div>\r\n\t\t\t<!-- content of each widget -->\r\n\t\t\t<div [ngSwitch]=\"widget.widgetType\">\r\n\t\t\t\t<!-- HEADING -->\r\n\t\t\t\t<div *ngSwitchCase=\"'HEADING'\">\r\n\t\t\t\t\t<div [ngSwitch]=\"widget.size\">\r\n\t\t\t\t\t\t<div *ngSwitchCase=\"1\">\r\n\t\t\t\t\t\t\t<h1>{{widget.text}}</h1>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngSwitchCase=\"2\">\r\n\t\t\t\t\t\t\t<h2>{{widget.text}}</h2>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngSwitchCase=\"3\">\r\n\t\t\t\t\t\t\t<h3>{{widget.text}}</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngSwitchCase=\"4\">\r\n\t\t\t\t\t\t\t<h4>{{widget.text}}</h4>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngSwitchCase=\"5\">\r\n\t\t\t\t\t\t\t<h5>{{widget.text}}</h5>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngSwitchCase=\"6\">\r\n\t\t\t\t\t\t\t<h6>{{widget.text}}</h6>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- IMAGE -->\r\n\t\t\t\t<div *ngSwitchCase=\"'IMAGE'\">\r\n\t\t\t\t\t<img [src]=\"widget.url\"\r\n\t\t\t\t\t\t [style.width]=\"widget.width\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- YOUTUBE -->\r\n\t\t\t\t<div *ngSwitchCase=\"'YOUTUBE'\">\r\n\t\t\t\t\t<div class=\"embed-responsive embed-responsive-16by9\">\r\n\t\t\t\t\t\t<iframe [src]=\"this.getYoutubeUrl(widget.url)\"\r\n\t\t\t\t\t\t[style.width]=\"widget.width\"\r\n\t\t\t\t\t\tframeborder=\"0\"\r\n\t\t\t\t\t\tallowfullscreen></iframe>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- footer -->\r\n\t<footer class=\"navbar fixed-bottom navbar-light sw-bg-grey\">\r\n\t\t<div class=\"sw-full-width\">\r\n\t\t\t<a href=\"#\" class=\"btn btn-primary\">publish</a>\r\n\t\t\t<a href=\"#\" class=\"btn btn-warning\">Preview</a>\r\n\t\t\t<a class=\"navbar-brand float-right\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user\"></i></a>\r\n\t\t</div>\r\n\t</footer>"

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.ts ***!
  \************************************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(widgetService, activatedRoute, sanitizer) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.widgetService.findWidgetsByPageId(_this.pid).subscribe(function (widgets) {
                _this.widgets = widgets;
            });
        });
    };
    WidgetListComponent.prototype.getYoutubeUrl = function (url) {
        var embedUrl = "https://www.youtube.com/embed/";
        var parsedUrl = url.split('/');
        // tranfer video url into emebed video url
        embedUrl += parsedUrl[parsedUrl.length - 1];
        // telling browser this src is safe
        return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    };
    WidgetListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/components/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/components/widget/widget-list/widget-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_1__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/app/services/flickr.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/flickr.service.client.ts ***!
  \***************************************************/
/*! exports provided: FlickrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrService", function() { return FlickrService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//injecting service into module
var FlickrService = /** @class */ (function () {
    function FlickrService(_http) {
        this._http = _http;
        this.key = "0a4c68dd6729bb2c46fa0e6b695fc64a";
        this.secret = "6cb9903f8baee5d3";
        this.urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = this.urlBase.replace('API_KEY', this.key).replace('TEXT', searchTerm);
        return this._http.get(url);
    };
    FlickrService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], FlickrService);
    return FlickrService;
}());



/***/ }),

/***/ "./src/app/services/omdb.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/omdb.service.client.ts ***!
  \*************************************************/
/*! exports provided: OmdbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OmdbService", function() { return OmdbService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// injecting service into module
var OmdbService = /** @class */ (function () {
    function OmdbService(http) {
        this.http = http;
    }
    OmdbService.prototype.searchMovie = function (title) {
        var url = "http://www.omdbapi.com/?apikey=4e29c677&s=" + title;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
        }));
    };
    OmdbService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], OmdbService);
    return OmdbService;
}());



/***/ }),

/***/ "./src/app/services/page.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/page.service.client.ts ***!
  \*************************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var PageService = /** @class */ (function () {
    function PageService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    // adds the page parameter instance to the local pages array. The new page's websiteId is set to the websiteId parameter
    PageService.prototype.createPage = function (websiteId, page) {
        var url = this.baseUrl + "/api/website/" + websiteId + "/page ";
        return this.http.post(url, page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
        }));
    };
    // retrieves the pages in local pages array whose websiteId matches the parameter websiteId
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        var url = this.baseUrl + "/api/website/" + websiteId + "/page ";
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
        }));
    };
    //  retrieves the page in local pages array whose _id matches the pageId parameter
    PageService.prototype.findPageById = function (pageId) {
        var url = this.baseUrl + "/api/page/" + pageId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
        }));
    };
    // updates the page in local pages array whose _id matches the pageId parameter
    PageService.prototype.updatePage = function (pageId, page) {
        var url = this.baseUrl + "/api/page/" + pageId;
        return this.http.put(url, page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
        }));
    };
    //  removes the page from local pages array whose _id matches the pageId parameter
    PageService.prototype.deletePage = function (pageId) {
        var url = this.baseUrl + "/api/page/" + pageId;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
        }));
    };
    PageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    //users: User[] = [
    // {_id: "123", nameuser: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com"},
    //   {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},
    //   {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@hotmail.com"},
    //   {_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org"}
    //   ];
    UserService.prototype.createUser = function (user) {
        // user._id = Math.floor(Math.random() * 10000).toString();
        // this.users.push(user);
        //return user;
        var url = this.baseUrl + "/api/user";
        return this.http.post(url, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
        }));
    };
    UserService.prototype.findUserById = function (userId) {
        var url = this.baseUrl + "/api/user/" + userId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
        }));
        // for (let x = 0; x < this.users.length; x++) {
        //   if (this.users[x]._id === userId) {  
        //     return this.users[x]; 
        //   }
        // }
    };
    UserService.prototype.findUserByUsername = function (username) {
        var url = this.baseUrl + "/api/user?username=" + username;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
        }));
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = this.baseUrl + "/api/user?username=" + username + "&password=" + password;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
        }));
    };
    UserService.prototype.updateUser = function (userId, user) {
        var url = this.baseUrl + "/api/user" + userId;
        return this.http.put(url, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
        }));
        // this.users[index].username = user.username;
        // this.users[index].password = user.password;
        // this.users[index].firstName = user.firstName;
        // this.users[index].lastName = user.lastName;
        // this.users[index].email = user.email;
    };
    UserService.prototype.deleteUser = function (userId) {
        // var oldUser = this.findUserById(userId);
        // var index = this.users.indexOf(oldUser);
        // this.users.splice(index, 1);
        var url = this.baseUrl + "/api/user" + userId;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
        }));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/website.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/website.service.client.ts ***!
  \****************************************************/
/*! exports provided: WebsiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteService", function() { return WebsiteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var WebsiteService = /** @class */ (function () {
    function WebsiteService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var url = this.baseUrl + "/api/user/" + userId + "/website";
        return this.http.post(url, website).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
        }));
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var url = this.baseUrl + "/api/user/" + userId + "/website";
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
        }));
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        var url = this.baseUrl + "/api/website/" + websiteId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
        }));
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        var url = this.baseUrl + "/api/website/" + websiteId;
        return this.http.put(url, website).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
        }));
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        var url = this.baseUrl + "/api/website/" + websiteId;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
        }));
    };
    WebsiteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var WidgetService = /** @class */ (function () {
    function WidgetService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    // adds the widget parameter instance to the local widgets array. The new widget's pageId is set to the pageId parameter
    WidgetService.prototype.createWidget = function (pageId, widget) {
        var url = this.baseUrl + "/api/page/" + pageId + "/ widget";
        return this.http.post(url, widget).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
        }));
    };
    // retrieves the widgets in local widgets array whose pageId matches the parameter pageId
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var url = this.baseUrl + "/api/page/" + pageId + "/widget";
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
        }));
    };
    // retrieves the widget in local widgets array whose _id matches the widgetId parameterretrieves the widget in local widgets array whose _id matches the widgetId parameter
    WidgetService.prototype.findWidgetById = function (widgetId) {
        var url = this.baseUrl + "/api/widget/" + widgetId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
        }));
    };
    // updates the widget in local widgets array whose _id matches the widgetId parameter
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        var url = this.baseUrl + "/api/widget/" + widgetId;
        return this.http.put(url, widget).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
        }));
    };
    // removes the widget from local widgets array whose _id matches the widgetId parameter
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var url = this.baseUrl + "/api/widget/" + widgetId;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
        }));
    };
    WidgetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: "http://localhost:3100"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\student\Desktop\assignment3\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map