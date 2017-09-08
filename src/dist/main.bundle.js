webpackJsonp([1,5],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountService = (function () {
    function AccountService(_http) {
        this._http = _http;
        this._url = 'api/accounte/';
        this._urlep = 'api/accountep/';
        this._urluep = 'api/accountuep/';
        this._urloep = 'api/accountoep/';
    }
    AccountService.prototype.getExistAccount = function (email) {
        return this._http.get(this._url + email)
            .map(function (response) { return response.json(); });
    };
    AccountService.prototype.getAccount = function (email, password) {
        return this._http.get(this._urlep + email + '&' + password)
            .map(function (response) { return response.json(); });
    };
    AccountService.prototype.getUserAccount = function (email, password) {
        return this._http.get(this._urluep + email + '&' + password)
            .map(function (response) { return response.json(); });
    };
    AccountService.prototype.getOwnerAccount = function (email, password) {
        return this._http.get(this._urloep + email + '&' + password)
            .map(function (response) { return response.json(); });
    };
    AccountService.prototype.postAccount = function (task) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/api/account', JSON.stringify(task), { headers: headers });
    };
    AccountService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], AccountService);
    return AccountService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Bard/Desktop/project/src/account.service.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactServiceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactServiceService = (function () {
    function ContactServiceService(_http) {
        this._http = _http;
        this._url = 'api/info';
    }
    ContactServiceService.prototype.getContact = function () {
        return this._http.get(this._url)
            .map(function (response) { return response.json(); });
    };
    ContactServiceService.prototype.updateContact = function (task) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.put(this._url, JSON.stringify(task), { headers: headers }).map(function (res) { return res.json(); });
    };
    ContactServiceService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], ContactServiceService);
    return ContactServiceService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Bard/Desktop/project/src/contact-service.service.js.map

/***/ }),

/***/ 398:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 398;


/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(523);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Bard/Desktop/project/src/main.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.slidehide = true;
        sessionStorage.removeItem('slideshow');
    };
    AppComponent.prototype.changeUser = function () {
        this.userColor = '#555';
        this.ownerColor = '#ccc';
        this.slidehide = false;
    };
    AppComponent.prototype.changeOwner = function () {
        this.userColor = '#ccc';
        this.ownerColor = '#555';
        this.slidehide = false;
    };
    AppComponent.prototype.slide = function () {
        this.slideshow = sessionStorage.getItem('slideshow');
        if (this.slideshow) {
            this.slidehide = false;
        }
        return this.slidehide;
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(718),
            styles: [__webpack_require__(702)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Bard/Desktop/project/src/app.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ownerpage_ownerpage_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__owner_register_owner_register_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__account_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__booking_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__usercreate_usercreate_component__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__useredit_useredit_component__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__useredit_update_useredit_update_component__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__owner_menu_owner_menu_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__owner_view_booking_owner_view_booking_component__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_bs3_modal_ng2_bs3_modal__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_bs3_modal_ng2_bs3_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_bs3_modal_ng2_bs3_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__timePipe__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__datePipe__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__datePipe2__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__owner_view_seating_area_owner_view_seating_area_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__areaFilter__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__tableFilter__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__viewSeatingPipe__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__user_page_user_page_component__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__user_menu_user_menu_component__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__user_register_user_register_component__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__slideshow_slideshow_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__contact_service_service__ = __webpack_require__(222);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__ownerpage_ownerpage_component__["a" /* OwnerpageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__owner_register_owner_register_component__["a" /* OwnerRegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__usercreate_usercreate_component__["a" /* UsercreateComponent */],
                __WEBPACK_IMPORTED_MODULE_11__useredit_useredit_component__["a" /* UsereditComponent */],
                __WEBPACK_IMPORTED_MODULE_12__useredit_update_useredit_update_component__["a" /* UsereditUpdateComponent */],
                __WEBPACK_IMPORTED_MODULE_13__owner_menu_owner_menu_component__["a" /* OwnerMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_14__owner_view_booking_owner_view_booking_component__["a" /* OwnerViewBookingComponent */],
                __WEBPACK_IMPORTED_MODULE_16__timePipe__["a" /* TimePipe */],
                __WEBPACK_IMPORTED_MODULE_17__datePipe__["a" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_18__datePipe2__["a" /* DatePipe2 */],
                __WEBPACK_IMPORTED_MODULE_19__owner_view_seating_area_owner_view_seating_area_component__["a" /* OwnerViewSeatingAreaComponent */],
                __WEBPACK_IMPORTED_MODULE_20__areaFilter__["a" /* AreaPipe */],
                __WEBPACK_IMPORTED_MODULE_21__tableFilter__["a" /* TablePipe */],
                __WEBPACK_IMPORTED_MODULE_22__viewSeatingPipe__["a" /* SeatPipe */],
                __WEBPACK_IMPORTED_MODULE_23__user_page_user_page_component__["a" /* UserPageComponent */],
                __WEBPACK_IMPORTED_MODULE_24__user_menu_user_menu_component__["a" /* UserMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_25__user_register_user_register_component__["a" /* UserRegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_26__slideshow_slideshow_component__["a" /* SlideshowComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_15_ng2_bs3_modal_ng2_bs3_modal__["Ng2Bs3ModalModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_23__user_page_user_page_component__["a" /* UserPageComponent */] },
                    { path: 'owners', component: __WEBPACK_IMPORTED_MODULE_6__ownerpage_ownerpage_component__["a" /* OwnerpageComponent */] }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_9__booking_service__["a" /* BookingService */], __WEBPACK_IMPORTED_MODULE_27__contact_service_service__["a" /* ContactServiceService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Bard/Desktop/project/src/app.module.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AreaPipe = (function () {
    function AreaPipe() {
    }
    AreaPipe.prototype.transform = function (items, filter) {
        if (!items || !filter || filter === "all") {
            return items;
        }
        return items.filter(function (item) { return item.area === filter; });
    };
    AreaPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'AreaFilter' }), 
        __metadata('design:paramtypes', [])
    ], AreaPipe);
    return AreaPipe;
}());
//# sourceMappingURL=C:/Users/Bard/Desktop/project/src/areaFilter.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatePipe = (function () {
    function DatePipe() {
    }
    DatePipe.prototype.transform = function (value, args) {
        if (!value)
            return value;
        return value.replace(/-/g, '/');
    };
    DatePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'Date' }), 
        __metadata('design:paramtypes', [])
    ], DatePipe);
    return DatePipe;
}());
//# sourceMappingURL=C:/Users/Bard/Desktop/project/src/datePipe.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePipe2; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatePipe2 = (function () {
    function DatePipe2() {
    }
    DatePipe2.prototype.transform = function (value, args) {
        if (!value)
            return value;
        var date = value.split("-");
        var result = date[2] + "-" + date[0] + "-" + date[1];
        return result;
    };
    DatePipe2 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'Date2' }), 
        __metadata('design:paramtypes', [])
    ], DatePipe2);
    return DatePipe2;
}());
//# sourceMappingURL=C:/Users/Bard/Desktop/project/src/datePipe2.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_service_service__ = __webpack_require__(222);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnerMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OwnerMenuComponent = (function () {
    function OwnerMenuComponent(http, service) {
        this.http = http;
        this.service = service;
        this.myVal = 1;
        this.info = {};
    }
    OwnerMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        sessionStorage.setItem('ownerRelogin', 'true');
        this.service.getContact().subscribe(function (res) { return _this.info = res; });
    };
    OwnerMenuComponent.prototype.logout = function () {
        sessionStorage.clear();
        window.location.reload();
    };
    OwnerMenuComponent.prototype.save = function (name, address, tel, email, content) {
        var task = {
            '_id': '599bb331f9ac571f4060cb64',
            'name': name,
            'address': address,
            'tel': tel,
            'email': email,
            'content': content
        };
        this.service.updateContact(task).subscribe();
    };
    OwnerMenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-owner-menu',
            template: __webpack_require__(719),
            styles: [__webpack_require__(703)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__contact_service_service__["a" /* ContactServiceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__contact_service_service__["a" /* ContactServiceService */]) === 'function' && _b) || Object])
    ], OwnerMenuComponent);
    return OwnerMenuComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Bard/Desktop/project/src/owner-menu.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_service__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnerRegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OwnerRegisterComponent = (function () {
    function OwnerRegisterComponent(_http, service) {
        this._http = _http;
        this.service = service;
        this.post = {};
        this.submit = false;
        this.account = null;
        this.click = false;
    }
    OwnerRegisterComponent.prototype.ngOnInit = function () {
    };
    OwnerRegisterComponent.prototype.verify = function (email) {
        var _this = this;
        this.click = true;
        this.service.getExistAccount(email).subscribe(function (res) { return _this.account = res; });
    };
    OwnerRegisterComponent.prototype.emailError = function () {
        if (this.account !== null && this.click === true) {
            return true;
        }
        else {
            return false;
        }
    };
    OwnerRegisterComponent.prototype.emailChange = function () {
        this.account = "not null";
    };
    OwnerRegisterComponent.prototype.register = function (username, password, email) {
        this.post['username'] = username;
        this.post['password'] = password;
        this.post['email'] = email;
        this.post['role'] = 'owner';
        this.service.postAccount(this.post).subscribe();
        this.submit = true;
    };
    OwnerRegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-owner-register',
            template: __webpack_require__(720),
            styles: [__webpack_require__(704)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */]) === 'function' && _b) || Object])
    ], OwnerRegisterComponent);
    return OwnerRegisterComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Bard/Desktop/project/src/owner-register.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_service__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnerViewBookingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OwnerViewBookingComponent = (function () {
    function OwnerViewBookingComponent(_http, service) {
        this._http = _http;
        this.service = service;
        this.unlockVal = true;
        this.unlockText = "Unlock";
    }
    OwnerViewBookingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getBookings().subscribe(function (res) { return _this.bookings = res; });
    };
    OwnerViewBookingComponent.prototype.bookingUpdate = function (booking, name, date, time, phone, partysize, status, area, table) {
        var dates = date.split('-');
        booking['name'] = name;
        booking['date'] = dates[1] + "-" + dates[2] + "-" + dates[0];
        booking['time'] = time.replace(':', '-');
        booking['phone'] = phone;
        booking['partysize'] = partysize;
        booking['status'] = status;
        booking['area'] = area;
        booking['table'] = table;
        booking['status'] = status;
        this.service.updateStatus(booking, booking._id).subscribe();
    };
    OwnerViewBookingComponent.prototype.search = function (name, phone, status, code) {
        var _this = this;
        this.service.getSearchedBookings(name, phone, status, code).
            subscribe(function (res) { return _this.bookings = res; });
    };
    OwnerViewBookingComponent.prototype.reset = function () {
        var _this = this;
        this.service.getBookings().subscribe(function (res) { return _this.bookings = res; });
    };
    OwnerViewBookingComponent.prototype.reload = function () {
        window.location.reload();
    };
    OwnerViewBookingComponent.prototype.unlock = function () {
        if (this.unlockVal === true) {
            this.unlockVal = false;
            this.unlockText = "Lock";
        }
        else {
            this.unlockVal = true;
            this.unlockText = "Unlock";
        }
    };
    OwnerViewBookingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-owner-view-booking',
            template: __webpack_require__(721),
            styles: [__webpack_require__(705)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__booking_service__["a" /* BookingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__booking_service__["a" /* BookingService */]) === 'function' && _b) || Object])
    ], OwnerViewBookingComponent);
    return OwnerViewBookingComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Bard/Desktop/project/src/owner-view-booking.component.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_service__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnerViewSeatingAreaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OwnerViewSeatingAreaComponent = (function () {
    function OwnerViewSeatingAreaComponent(_http, service) {
        this._http = _http;
        this.service = service;
    }
    OwnerViewSeatingAreaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getBookings().subscribe(function (res) { return _this.bookings = res; });
    };
    OwnerViewSeatingAreaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-owner-view-seating-area',
            template: __webpack_require__(722),
            styles: [__webpack_require__(706)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__booking_service__["a" /* BookingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__booking_service__["a" /* BookingService */]) === 'function' && _b) || Object])
    ], OwnerViewSeatingAreaComponent);
    return OwnerViewSeatingAreaComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Bard/Desktop/project/src/owner-view-seating-area.component.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_service__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnerpageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OwnerpageComponent = (function () {
    function OwnerpageComponent(http, service) {
        this.http = http;
        this.service = service;
        this.login = false;
        this.relogin = false;
        this.account = null;
        this.register = false;
    }
    OwnerpageComponent.prototype.ngOnInit = function () {
        sessionStorage.setItem('slideshow', 'false');
        if (sessionStorage.getItem('ownerRelogin')) {
            this.relogin = true;
        }
        else {
            this.relogin = false;
        }
    };
    OwnerpageComponent.prototype.loginFun = function (email, password) {
        var _this = this;
        this.service.getOwnerAccount(email, password).subscribe(function (res) { return _this.account = res; });
        this.login = true;
    };
    OwnerpageComponent.prototype.loginFailed = function () {
        if (this.login === true && this.account === null) {
            return true;
        }
        else {
            return false;
        }
    };
    OwnerpageComponent.prototype.loginSuccess = function () {
        if (this.register === true) {
            return true;
        }
        else if (this.relogin === true) {
            return true;
        }
        else if (this.login === true && this.account !== null) {
            return true;
        }
        else {
            return false;
        }
    };
    OwnerpageComponent.prototype.registerAcc = function () {
        this.register = true;
    };
    OwnerpageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ownerpage',
            template: __webpack_require__(723),
            styles: [__webpack_require__(707)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */]) === 'function' && _b) || Object])
    ], OwnerpageComponent);
    return OwnerpageComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Bard/Desktop/project/src/ownerpage.component.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_service_service__ = __webpack_require__(222);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideshowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IMAGES = [
    { "title": "Yunnan Crossbridge Rice Noodles", "url": "../assets/crossbridge.jpg" },
    { "title": "Dai Fried Fish", "url": "../assets/friedfish.jpeg" },
    { "title": "Thai Pineapple Rice", "url": "../assets/pineapple.jpg" },
    { "title": "Dai Fried Pork", "url": "../assets/friedpork.jpg" },
    { "title": "Bamboo Rice", "url": "../assets/bamboo.jpg" }
];
var SlideshowComponent = (function () {
    function SlideshowComponent(_http, service) {
        this._http = _http;
        this.service = service;
        this.images = IMAGES;
        this.content = {};
    }
    SlideshowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getContact().subscribe(function (res) { return _this.content = res; });
    };
    SlideshowComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-slideshow',
            template: __webpack_require__(724),
            styles: [__webpack_require__(708)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__contact_service_service__["a" /* ContactServiceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__contact_service_service__["a" /* ContactServiceService */]) === 'function' && _b) || Object])
    ], SlideshowComponent);
    return SlideshowComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Bard/Desktop/project/src/slideshow.component.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TablePipe = (function () {
    function TablePipe() {
    }
    TablePipe.prototype.transform = function (items, filter) {
        debugger;
        if (!items || !filter || filter === "all") {
            return items;
        }
        return items.filter(function (item) { return item.table === filter; });
    };
    TablePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'TableFilter' }), 
        __metadata('design:paramtypes', [])
    ], TablePipe);
    return TablePipe;
}());
//# sourceMappingURL=C:/Users/Bard/Desktop/project/src/tableFilter.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimePipe = (function () {
    function TimePipe() {
    }
    TimePipe.prototype.transform = function (value, args) {
        if (!value)
            return value;
        return value.replace('-', ':');
    };
    TimePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'Time' }), 
        __metadata('design:paramtypes', [])
    ], TimePipe);
    return TimePipe;
}());
//# sourceMappingURL=C:/Users/Bard/Desktop/project/src/timePipe.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserMenuComponent = (function () {
    function UserMenuComponent() {
        this.myVal = 1;
        sessionStorage.setItem('userRelogin', 'true');
    }
    UserMenuComponent.prototype.ngOnInit = function () {
    };
    UserMenuComponent.prototype.logout = function () {
        sessionStorage.clear();
        window.location.reload();
    };
    UserMenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-menu',
            template: __webpack_require__(725),
            styles: [__webpack_require__(709)]
        }), 
        __metadata('design:paramtypes', [])
    ], UserMenuComponent);
    return UserMenuComponent;
}());
//# sourceMappingURL=C:/Users/Bard/Desktop/project/src/user-menu.component.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_service__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserPageComponent = (function () {
    function UserPageComponent(http, service) {
        this.http = http;
        this.service = service;
        this.login = false;
        this.relogin = false;
        this.account = null;
        this.register = false;
    }
    UserPageComponent.prototype.ngOnInit = function () {
        sessionStorage.setItem('slideshow', 'false');
        if (sessionStorage.getItem('userRelogin')) {
            this.relogin = true;
        }
        else {
            this.relogin = false;
        }
    };
    UserPageComponent.prototype.loginFun = function (email, password) {
        var _this = this;
        this.service.getUserAccount(email, password).subscribe(function (res) { return _this.account = res; });
        this.login = true;
    };
    UserPageComponent.prototype.loginFailed = function () {
        if (this.login === true && this.account === null) {
            return true;
        }
        else {
            return false;
        }
    };
    UserPageComponent.prototype.loginSuccess = function () {
        if (this.register === true) {
            return true;
        }
        else if (this.relogin === true) {
            return true;
        }
        else if (this.login === true && this.account !== null) {
            return true;
        }
        else {
            return false;
        }
    };
    UserPageComponent.prototype.registerAcc = function () {
        this.register = true;
    };
    UserPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-page',
            template: __webpack_require__(726),
            styles: [__webpack_require__(710)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */]) === 'function' && _b) || Object])
    ], UserPageComponent);
    return UserPageComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Bard/Desktop/project/src/user-page.component.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_service__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserRegisterComponent = (function () {
    function UserRegisterComponent(_http, service) {
        this._http = _http;
        this.service = service;
        this.post = {};
        this.submit = false;
        this.account = null;
        this.click = false;
    }
    UserRegisterComponent.prototype.ngOnInit = function () {
    };
    UserRegisterComponent.prototype.verify = function (email) {
        var _this = this;
        this.click = true;
        this.service.getExistAccount(email).subscribe(function (res) { return _this.account = res; });
    };
    UserRegisterComponent.prototype.emailError = function () {
        if (this.account !== null && this.click === true) {
            return true;
        }
        else {
            return false;
        }
    };
    UserRegisterComponent.prototype.emailChange = function () {
        this.account = "not null";
    };
    UserRegisterComponent.prototype.register = function (username, password, email) {
        this.post['username'] = username;
        this.post['password'] = password;
        this.post['email'] = email;
        this.post['role'] = 'user';
        this.service.postAccount(this.post).subscribe();
        this.submit = true;
    };
    UserRegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-register',
            template: __webpack_require__(727),
            styles: [__webpack_require__(711)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */]) === 'function' && _b) || Object])
    ], UserRegisterComponent);
    return UserRegisterComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Bard/Desktop/project/src/user-register.component.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_service__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsercreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsercreateComponent = (function () {
    function UsercreateComponent(_http, service) {
        this._http = _http;
        this.service = service;
        this.post = {};
        this.submit = false;
        this.codeSubmit = false;
        this.code = null;
    }
    UsercreateComponent.prototype.ngOnInit = function () {
        $('.form_date').datetimepicker({
            language: 'fr',
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            forceParse: 0
        });
        $('.form_time').datetimepicker({
            language: 'fr',
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 1,
            minView: 0,
            maxView: 1,
            forceParse: 0
        });
    };
    // to create a booking
    UsercreateComponent.prototype.createBooking = function (partysize, name, phone) {
        var _this = this;
        this.post['date'] = $('#dateInput').attr('value');
        this.post['time'] = $('#timeInput').attr('value');
        this.post['partysize'] = partysize;
        this.post['name'] = name;
        this.post['phone'] = phone;
        this.post['status'] = 'Pending';
        this.service.postBooking(this.post).subscribe();
        // to get the confirmation code
        this.service.getBooking(this.post['date'], this.post['time'], this.post['phone']).subscribe(function (res) { return _this.code = res._id; });
        this.submit = true;
    };
    // to check if the date and time columns are filled
    UsercreateComponent.prototype.checkDateTime = function () {
        if ($('#dateInput').attr('value') !== "" && $('#timeInput').attr('value') !== "") {
            return false;
        }
        else {
            return true;
        }
    };
    UsercreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-usercreate',
            template: __webpack_require__(728),
            styles: [__webpack_require__(712)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__booking_service__["a" /* BookingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__booking_service__["a" /* BookingService */]) === 'function' && _b) || Object])
    ], UsercreateComponent);
    return UsercreateComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Bard/Desktop/project/src/usercreate.component.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_service__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsereditUpdateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsereditUpdateComponent = (function () {
    function UsereditUpdateComponent(_http, service) {
        this._http = _http;
        this.service = service;
        this.post = {};
        this.submit = false;
        this.myVal = 1;
    }
    UsereditUpdateComponent.prototype.ngOnInit = function () {
        debugger;
        $('.form_date').datetimepicker({
            language: 'fr',
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            forceParse: 0
        });
        $('.form_time').datetimepicker({
            language: 'fr',
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 1,
            minView: 0,
            maxView: 1,
            forceParse: 0
        });
    };
    // to check if the date and time columns are filled
    UsereditUpdateComponent.prototype.checkDateTime = function () {
        if ($('#dateInput').attr('value') !== "" && $('#timeInput').attr('value') !== "") {
            return false;
        }
        else {
            return true;
        }
    };
    // to update a booking
    UsereditUpdateComponent.prototype.updateBooking = function (partysize) {
        var task = {
            '_id': this.booking._id,
            'date': $('#dateInput').attr('value'),
            'time': $('#timeInput').attr('value'),
            'partysize': this.booking.partysize,
            'name': this.booking.name,
            'phone': this.booking.phone,
            'status': 'Pending'
        };
        if (partysize !== "") {
            task['partysize'] = partysize;
        }
        this.service.updateStatus(task, this.booking._id).subscribe();
        this.myVal = 2;
    };
    // to cancel a booking
    UsereditUpdateComponent.prototype.cancelBooking = function () {
        this._http.delete('/api/book/' + this.booking._id).subscribe();
        this.myVal = 3;
    };
    UsereditUpdateComponent.prototype.formShow = function () {
        if (this.myVal === 1) {
            return false;
        }
        else {
            return true;
        }
    };
    UsereditUpdateComponent.prototype.successShow = function () {
        if (this.myVal === 2) {
            return true;
        }
        else {
            return false;
        }
    };
    UsereditUpdateComponent.prototype.cancelShow = function () {
        if (this.myVal === 3) {
            return true;
        }
        else {
            return false;
        }
    };
    UsereditUpdateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-useredit-update',
            template: __webpack_require__(729),
            styles: [__webpack_require__(713)],
            inputs: ['booking']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__booking_service__["a" /* BookingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__booking_service__["a" /* BookingService */]) === 'function' && _b) || Object])
    ], UsereditUpdateComponent);
    return UsereditUpdateComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Bard/Desktop/project/src/useredit-update.component.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_service__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsereditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsereditComponent = (function () {
    function UsereditComponent(_http, service) {
        this._http = _http;
        this.service = service;
        this.codeSubmit = false;
        this.booking = null;
        this.bookingDate = "";
        this.bookingTime = "";
        this.bookingPartysize = "";
        this.bookingName = "";
    }
    UsereditComponent.prototype.ngOnInit = function () {
    };
    // to submit confirmation code
    UsereditComponent.prototype.submitCode = function (code) {
        var _this = this;
        this.service.getEditBooking(code)
            .subscribe(function (res) {
            _this.booking = res;
            _this.bookingDate = res.date;
            _this.bookingTime = res.time;
            _this.bookingPartysize = res.partysize;
            _this.bookingName = res.name;
        });
        this.codeSubmit = true;
    };
    UsereditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-useredit',
            template: __webpack_require__(730),
            styles: [__webpack_require__(714)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__booking_service__["a" /* BookingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__booking_service__["a" /* BookingService */]) === 'function' && _b) || Object])
    ], UsereditComponent);
    return UsereditComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Bard/Desktop/project/src/useredit.component.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeatPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SeatPipe = (function () {
    function SeatPipe() {
    }
    SeatPipe.prototype.transform = function (items) {
        if (!items) {
            return items;
        }
        items = items.filter(function (item) {
            return item.area !== undefined;
        });
        items.sort(function (a, b) {
            var first = a.area + a.table;
            var second = b.area + b.table;
            if (first < second) {
                return -1;
            }
            else if (first > second) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return items;
    };
    SeatPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'SeatFilter' }), 
        __metadata('design:paramtypes', [])
    ], SeatPipe);
    return SeatPipe;
}());
//# sourceMappingURL=C:/Users/Bard/Desktop/project/src/viewSeatingPipe.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Bard/Desktop/project/src/environment.js.map

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "h1{\r\n  text-align: center;\r\n  font-family: Comic Sans MS;\r\n  font-size: 45px;\r\n  text-shadow: 2px 2px 5px #ccc;\r\n}\r\n#users{\r\n  text-align: center;\r\n}\r\n#userBtn{\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n  border: 3px solid #ccc;\r\n  border-radius: 5px;\r\n  transition: 0.5s;\r\n  outline: none;\r\n}\r\n#userBtn:hover {\r\n  border: 3px solid #555;\r\n  cursor:pointer;\r\n}\r\n#ownerBtn{\r\n  padding: 12px 20px;\r\n  margin: 8px 30px;\r\n  box-sizing: border-box;\r\n  border: 3px solid #ccc;\r\n  border-radius: 5px;\r\n  transition: 0.5s;\r\n  outline: none;\r\n}\r\n#ownerBtn:hover {\r\n  border: 3px solid #555;\r\n  cursor:pointer;\r\n}\r\n.fill-color{\r\n  border: 3px solid black;\r\n}\r\n"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "h2{\r\n  position: relative;\r\n  right: 20px;\r\n  text-align: center;\r\n  font-family: Comic Sans MS;\r\n  font-size: 30px;\r\n  text-shadow: 2px 2px 5px #ccc;\r\n}\r\n.submitForm{\r\n  width: 300px;\r\n  position: relative;\r\n  left: -12px;\r\n  padding: 12px 20px;\r\n  margin: 8px 20px;\r\n  box-sizing: border-box;\r\n  border: 3px solid #ccc;\r\n  border-radius: 5px;\r\n  transition: -webkit-transform 0.5s;\r\n  transition: transform 0.5s;\r\n  transition: transform 0.5s, -webkit-transform 0.5s;\r\n  outline: none;\r\n}\r\n.submitForm:hover {\r\n  border: 3px solid #555;\r\n  cursor:pointer;\r\n}\r\n#success{\r\n  text-align: center;\r\n  padding: 12px 20px;\r\n  margin: 0 auto;\r\n  box-sizing: border-box;\r\n  border: 3px solid black;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  font-family: Papyrus;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  width: 40%;\r\n  background-color: lightgreen;\r\n}\r\n#menu{\r\n  text-align: center;\r\n}\r\n@media only screen and (max-width: 700px) {\r\n  .submitForm{\r\n    width: 80%;\r\n  }\r\n  #success{\r\n    width: 80%;\r\n  }\r\n}\r\n"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = "h2{\r\n  position: relative;\r\n  right: 20px;\r\n  text-align: center;\r\n  font-family: Comic Sans MS;\r\n  font-size: 30px;\r\n  text-shadow: 2px 2px 5px #ccc;\r\n}\r\n#myForm{\r\n  position: relative;\r\n  right: 20px;\r\n  text-align: center;\r\n}\r\n.colname{\r\n  display: inline-block;\r\n  width: 160px;\r\n  text-align: end;\r\n  margin-right: 20px;\r\n  font-family: Papyrus;\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  color: white;\r\n}\r\n#email{\r\n  display: inline-block;\r\n  width: 220px;\r\n  text-align: end;\r\n  margin-right: 20px;\r\n  font-family: Papyrus;\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  color: white;\r\n}\r\n.input{\r\n  padding: 12px 20px;\r\n  margin: 0px 0;\r\n  box-sizing: border-box;\r\n  border: 3px solid #ccc;\r\n  border-radius: 5px;\r\n  transition: -webkit-transform 0.5s;\r\n  transition: transform 0.5s;\r\n  transition: transform 0.5s, -webkit-transform 0.5s;\r\n  outline: none;\r\n}\r\n.input:focus {\r\n  border: 3px solid #555;\r\n}\r\n#submitForm{\r\n  position: relative;\r\n  left: -12px;\r\n  padding: 12px 20px;\r\n  margin: 8px 20px;\r\n  box-sizing: border-box;\r\n  border: 3px solid #ccc;\r\n  border-radius: 5px;\r\n  transition: -webkit-transform 0.5s;\r\n  transition: transform 0.5s;\r\n  transition: transform 0.5s, -webkit-transform 0.5s;\r\n  outline: none;\r\n}\r\n#submitForm:hover {\r\n  border: 3px solid #555;\r\n  cursor:pointer;\r\n}\r\n#submitForm:disabled{\r\n  cursor:not-allowed;\r\n}\r\n#check{\r\n  position: relative;\r\n  left: -12px;\r\n  padding: 12px 20px;\r\n  margin: 2px 20px;\r\n  box-sizing: border-box;\r\n  border: 3px solid #ccc;\r\n  border-radius: 5px;\r\n  transition: -webkit-transform 0.5s;\r\n  transition: transform 0.5s;\r\n  transition: transform 0.5s, -webkit-transform 0.5s;\r\n  outline: none;\r\n}\r\n#check:hover {\r\n  border: 3px solid #555;\r\n  cursor:pointer;\r\n}\r\n.alert{\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n  border: 3px solid red;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  font-family: Papyrus;\r\n  font-weight: bold;\r\n  background-color: pink;\r\n}\r\n.alertg{\r\n  display: inline-block;\r\n  position: relative;\r\n  left: 90px;\r\n  width: 300px;\r\n}\r\n#success{\r\n  text-align: center;\r\n  padding: 12px 20px;\r\n  margin: 0 auto;\r\n  box-sizing: border-box;\r\n  border: 3px solid black;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  font-family: Papyrus;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  width: 40%;\r\n  background-color: lightgreen;\r\n}\r\n\r\n@media only screen and (max-width: 650px) {\r\n  .alertg {\r\n    position: relative;\r\n    left: 5%;\r\n    width: 80%;\r\n  }\r\n  input{\r\n    position: relative;\r\n    left: 5%;\r\n    width: 80%;\r\n  }\r\n  #submitForm{\r\n    left: 5%;\r\n    width: 80%;\r\n  }\r\n  #success{\r\n    left: 5%;\r\n    width: 80%;\r\n  }\r\n  #email{\r\n    width: 160px;\r\n  }\r\n  #check{\r\n    left: 5%;\r\n    width: 80%;\r\n  }\r\n}\r\n"

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "h2{\r\n  position: relative;\r\n  right: 20px;\r\n  text-align: center;\r\n  font-family: Comic Sans MS;\r\n  font-size: 30px;\r\n  text-shadow: 2px 2px 5px #ccc;\r\n}\r\n#menu{\r\n  text-align: center;\r\n}\r\n#myTable{\r\n  background-color: whitesmoke;\r\n}\r\n#myTable tr:not(:first-child):hover{\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n.submitBtn{\r\n  position: relative;\r\n  width: 300px;\r\n  padding: 12px 20px;\r\n  margin: 8px 20px;\r\n  box-sizing: border-box;\r\n  border: 3px solid #ccc;\r\n  border-radius: 5px;\r\n  transition: -webkit-transform 0.5s;\r\n  transition: transform 0.5s;\r\n  transition: transform 0.5s, -webkit-transform 0.5s;\r\n  outline: none;\r\n}\r\n.submitBtn:hover {\r\n  border: 3px solid #555;\r\n  cursor:pointer;\r\n}\r\n@media only screen and (max-width: 700px) {\r\n  .submitBtn{\r\n    width: 80%;\r\n  }\r\n}\r\n"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "h2{\r\n  position: relative;\r\n  right: 20px;\r\n  text-align: center;\r\n  font-family: Comic Sans MS;\r\n  font-size: 30px;\r\n  text-shadow: 2px 2px 5px #ccc;\r\n}\r\n.colname{\r\n  display: inline-block;\r\n  width: 240px;\r\n  text-align: end;\r\n  margin-right: 20px;\r\n  font-family: Papyrus;\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  color: white;\r\n}\r\n.input{\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n  border: 3px solid #ccc;\r\n  border-radius: 5px;\r\n  transition: -webkit-transform 0.5s;\r\n  transition: transform 0.5s;\r\n  transition: transform 0.5s, -webkit-transform 0.5s;\r\n  outline: none;\r\n}\r\n.input:focus {\r\n  border: 3px solid #555;\r\n}\r\n.item{\r\n  display: inline-block;\r\n  margin: 40px;\r\n  cursor: pointer;\r\n  -webkit-filter: grayscale(30%);\r\n  filter: grayscale(30%);\r\n}\r\n.item:hover{\r\n  -webkit-filter: contrast(200%);\r\n  filter: contrast(200%);\r\n}\r\n.success{\r\n  text-align: center;\r\n  padding: 12px 20px;\r\n  margin: 0 auto;\r\n  box-sizing: border-box;\r\n  border: 3px solid black;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  font-family: Papyrus;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  width: 150px;\r\n  background-color: lightgreen;\r\n}\r\n.table{\r\n  position: relative;\r\n  width: 80%;\r\n  left: 15%;\r\n  text-align: left;\r\n}\r\nimg{\r\n  width: 150px;\r\n}\r\n"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "h2{\r\n  position: relative;\r\n  right: 20px;\r\n  text-align: center;\r\n  font-family: Comic Sans MS;\r\n  font-size: 30px;\r\n  text-shadow: 2px 2px 5px #ccc;\r\n}\r\n#myForm{\r\n  position: relative;\r\n  right: 20px;\r\n  text-align: center;\r\n}\r\n.colname{\r\n  display: inline-block;\r\n  width: 80px;\r\n  text-align: end;\r\n  margin-right: 20px;\r\n  font-family: Papyrus;\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  color: white;\r\n}\r\n.input{\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n  border: 3px solid #ccc;\r\n  border-radius: 5px;\r\n  transition: -webkit-transform 0.5s;\r\n  transition: transform 0.5s;\r\n  transition: transform 0.5s, -webkit-transform 0.5s;\r\n  outline: none;\r\n}\r\n.input:focus {\r\n  border: 3px solid #555;\r\n}\r\n#submitForm{\r\n  padding: 12px 20px;\r\n  margin: 8px 20px;\r\n  box-sizing: border-box;\r\n  border: 3px solid #ccc;\r\n  border-radius: 5px;\r\n  transition: 0.5s;\r\n  outline: none;\r\n}\r\n#submitForm:hover {\r\n  border: 3px solid #555;\r\n  cursor:pointer;\r\n}\r\n#registerForm{\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n  border: 3px solid #ccc;\r\n  border-radius: 5px;\r\n  transition: 0.5s;\r\n  outline: none;\r\n}\r\n#registerForm:hover {\r\n  border: 3px solid #555;\r\n  cursor:pointer;\r\n}\r\n#loginF{\r\n  display: inline-block;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n  border: 3px solid red;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  font-family: Papyrus;\r\n  font-weight: bold;\r\n  background-color: pink;\r\n}\r\n"

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = ".carousel{\r\n  overflow:hidden;\r\n  width:100%;\r\n}\r\n.slides{\r\n  list-style:none;\r\n  position:relative;\r\n  width:500%; /* Number of panes * 100% */\r\n  overflow:hidden; /* Clear floats */\r\n  /* Slide effect Animations*/\r\n  -webkit-animation:carousel 30s infinite;\r\n  animation:carousel 30s infinite;\r\n}\r\n.slides > li{\r\n  position:relative;\r\n  float:left;\r\n  width: 20%; /* 100 / number of panes */\r\n}\r\n.carousel img{\r\n  position: relative;\r\n  display:block;\r\n  left: 27%;\r\n  width: 40%;\r\n  max-width:100%;\r\n}\r\n.carousel h2{\r\n  width: 40%;\r\n  margin-bottom: 0;\r\n  font-size:1em;\r\n  padding:1.5em 0.5em 1.5em 0.5em;\r\n  position:absolute;\r\n  right:0px;\r\n  bottom:0px;\r\n  left: 27%;\r\n  z-index: 1;\r\n  text-align:center;\r\n  color:#fff;\r\n  background-color:rgba(0,0,0,0.75);\r\n  text-transform: uppercase;\r\n}\r\n#success{\r\n  position: relative;\r\n  right: 15px;\r\n  text-align: center;\r\n  padding: 12px 20px;\r\n  margin: 0 auto;\r\n  box-sizing: border-box;\r\n  border: 3px solid black;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  font-family: Papyrus;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  width: 700px;\r\n  background-color: lightgreen;\r\n}\r\n#moreImg{\r\n  cursor: pointer;\r\n}\r\n#moreImg:hover{ /* IE 9 */\r\n  -webkit-transform: rotate(7deg); /* Chrome, Safari, Opera */\r\n  transform: rotate(7deg);\r\n}\r\n@-webkit-keyframes carousel{\r\n  0%    { left: 0; }\r\n  11%   { left: 0; }\r\n  12.5% { left:-99.5%; }\r\n  23.5% { left:-99.5%; }\r\n  25%   { left:-199%; }\r\n  36%   { left:-199%; }\r\n  37.5% { left:-298.5%; }\r\n  48.5% { left:-298.5%; }\r\n  50%   { left:-398%; }\r\n  61%   { left:-398%; }\r\n  62.5% { left:-298.5%; }\r\n  73.5% { left:-298.5%; }\r\n  75%   { left:-199%; }\r\n  86%   { left:-199%; }\r\n  87.5% { left:-99.5%; }\r\n  98.5% { left:-99.5%; }\r\n  100%  { left:-0%; }\r\n}\r\n@keyframes carousel{\r\n  0%    { left: 0; }\r\n  11%   { left: 0; }\r\n  12.5% { left:-99.5%; }\r\n  23.5% { left:-99.5%; }\r\n  25%   { left:-199%; }\r\n  36%   { left:-199%; }\r\n  37.5% { left:-298.5%; }\r\n  48.5% { left:-298.5%; }\r\n  50%   { left:-398%; }\r\n  61%   { left:-398%; }\r\n  62.5% { left:-298.5%; }\r\n  73.5% { left:-298.5%; }\r\n  75%   { left:-199%; }\r\n  86%   { left:-199%; }\r\n  87.5% { left:-99.5%; }\r\n  98.5% { left:-99.5%; }\r\n  100%  { left:-0%; }\r\n}\r\n@media only screen and (max-width: 800px) {\r\n  .carousel img{\r\n    left: 3%;\r\n    width: 80%;\r\n  }\r\n  .carousel h2{\r\n    left: 3%;\r\n    width: 80%;\r\n  }\r\n  #success{\r\n    left: 0%;\r\n    width: 80%;\r\n  }\r\n}\r\n"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = "h2{\r\n  position: relative;\r\n  right: 20px;\r\n  text-align: center;\r\n  font-family: Comic Sans MS;\r\n  font-size: 30px;\r\n  text-shadow: 2px 2px 5px #ccc;\r\n}\r\n.submitForm{\r\n  width: 300px;\r\n  position: relative;\r\n  left: -12px;\r\n  padding: 12px 20px;\r\n  margin: 8px 20px;\r\n  box-sizing: border-box;\r\n  border: 3px solid #ccc;\r\n  border-radius: 5px;\r\n  transition: -webkit-transform 0.5s;\r\n  transition: transform 0.5s;\r\n  transition: transform 0.5s, -webkit-transform 0.5s;\r\n  outline: none;\r\n}\r\n.submitForm:hover {\r\n  border: 3px solid #555;\r\n  cursor:pointer;\r\n}\r\n#success{\r\n  text-align: center;\r\n  padding: 12px 20px;\r\n  margin: 0 auto;\r\n  box-sizing: border-box;\r\n  border: 3px solid black;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  font-family: Papyrus;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  width: 40%;\r\n  background-color: lightgreen;\r\n}\r\n#menu{\r\n  text-align: center;\r\n}\r\n@media only screen and (max-width: 700px) {\r\n  .submitForm{\r\n    width: 80%;\r\n  }\r\n  #success{\r\n    width: 80%;\r\n  }\r\n}\r\n\r\n"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = "h2{\r\n  position: relative;\r\n  right: 20px;\r\n  text-align: center;\r\n  font-family: Comic Sans MS;\r\n  font-size: 30px;\r\n  text-shadow: 2px 2px 5px #ccc;\r\n}\r\n#myForm{\r\n  position: relative;\r\n  right: 20px;\r\n  text-align: center;\r\n}\r\n.colname{\r\n  display: inline-block;\r\n  width: 80px;\r\n  text-align: end;\r\n  margin-right: 20px;\r\n  font-family: Papyrus;\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  color: white;\r\n}\r\n.input{\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n  border: 3px solid #ccc;\r\n  border-radius: 5px;\r\n  transition: -webkit-transform 0.5s;\r\n  transition: transform 0.5s;\r\n  transition: transform 0.5s, -webkit-transform 0.5s;\r\n  outline: none;\r\n}\r\n.input:focus {\r\n  border: 3px solid #555;\r\n}\r\n#submitForm{\r\n  padding: 12px 20px;\r\n  margin: 8px 20px;\r\n  box-sizing: border-box;\r\n  border: 3px solid #ccc;\r\n  border-radius: 5px;\r\n  transition: 0.5s;\r\n  outline: none;\r\n}\r\n#submitForm:hover {\r\n  border: 3px solid #555;\r\n  cursor:pointer;\r\n}\r\n#registerForm{\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n  border: 3px solid #ccc;\r\n  border-radius: 5px;\r\n  transition: 0.5s;\r\n  outline: none;\r\n}\r\n#registerForm:hover {\r\n  border: 3px solid #555;\r\n  cursor:pointer;\r\n}\r\n#loginF{\r\n  display: inline-block;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n  border: 3px solid red;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  font-family: Papyrus;\r\n  font-weight: bold;\r\n  background-color: pink;\r\n}\r\n"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "h2{\r\n  position: relative;\r\n  right: 20px;\r\n  text-align: center;\r\n  font-family: Comic Sans MS;\r\n  font-size: 30px;\r\n  text-shadow: 2px 2px 5px #ccc;\r\n}\r\n#myForm{\r\n  position: relative;\r\n  right: 20px;\r\n  text-align: center;\r\n}\r\n.colname{\r\n  display: inline-block;\r\n  width: 160px;\r\n  text-align: end;\r\n  margin-right: 20px;\r\n  font-family: Papyrus;\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  color: white;\r\n}\r\n#email{\r\n  display: inline-block;\r\n  width: 220px;\r\n  text-align: end;\r\n  margin-right: 20px;\r\n  font-family: Papyrus;\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  color: white;\r\n}\r\n.input{\r\n  padding: 12px 20px;\r\n  margin: 0px 0;\r\n  box-sizing: border-box;\r\n  border: 3px solid #ccc;\r\n  border-radius: 5px;\r\n  transition: -webkit-transform 0.5s;\r\n  transition: transform 0.5s;\r\n  transition: transform 0.5s, -webkit-transform 0.5s;\r\n  outline: none;\r\n}\r\n.input:focus {\r\n  border: 3px solid #555;\r\n}\r\n#submitForm{\r\n  position: relative;\r\n  left: -12px;\r\n  padding: 12px 20px;\r\n  margin: 8px 20px;\r\n  box-sizing: border-box;\r\n  border: 3px solid #ccc;\r\n  border-radius: 5px;\r\n  transition: -webkit-transform 0.5s;\r\n  transition: transform 0.5s;\r\n  transition: transform 0.5s, -webkit-transform 0.5s;\r\n  outline: none;\r\n}\r\n#submitForm:hover {\r\n  border: 3px solid #555;\r\n  cursor:pointer;\r\n}\r\n#submitForm:disabled{\r\n  cursor:not-allowed;\r\n}\r\n#check{\r\n  position: relative;\r\n  left: -12px;\r\n  padding: 12px 20px;\r\n  margin: 2px 20px;\r\n  box-sizing: border-box;\r\n  border: 3px solid #ccc;\r\n  border-radius: 5px;\r\n  transition: -webkit-transform 0.5s;\r\n  transition: transform 0.5s;\r\n  transition: transform 0.5s, -webkit-transform 0.5s;\r\n  outline: none;\r\n}\r\n#check:hover {\r\n  border: 3px solid #555;\r\n  cursor:pointer;\r\n}\r\n.alert{\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n  border: 3px solid red;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  font-family: Papyrus;\r\n  font-weight: bold;\r\n  background-color: pink;\r\n}\r\n.alertg{\r\n  display: inline-block;\r\n  position: relative;\r\n  left: 90px;\r\n  width: 300px;\r\n}\r\n#success{\r\n  text-align: center;\r\n  padding: 12px 20px;\r\n  margin: 0 auto;\r\n  box-sizing: border-box;\r\n  border: 3px solid black;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  font-family: Papyrus;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  width: 40%;\r\n  background-color: lightgreen;\r\n}\r\n\r\n@media only screen and (max-width: 650px) {\r\n  .alertg {\r\n    position: relative;\r\n    left: 5%;\r\n    width: 80%;\r\n  }\r\n  input{\r\n    position: relative;\r\n    left: 5%;\r\n    width: 80%;\r\n  }\r\n  #submitForm{\r\n    left: 5%;\r\n    width: 80%;\r\n  }\r\n  #success{\r\n    left: 5%;\r\n    width: 80%;\r\n  }\r\n  #email{\r\n    width: 160px;\r\n  }\r\n  #check{\r\n    left: 5%;\r\n    width: 80%;\r\n  }\r\n}\r\n"

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = "#userdiv{\r\n  text-align: center;\r\n}\r\nh2{\r\n  position: relative;\r\n  right: 20px;\r\n  text-align: center;\r\n  font-family: Comic Sans MS;\r\n  font-size: 30px;\r\n  text-shadow: 2px 2px 5px #ccc;\r\n}\r\n#myForm{\r\n  position: relative;\r\n  right: 20px;\r\n  text-align: center;\r\n}\r\n.submitForm{\r\n  padding: 12px 20px;\r\n  margin: 8px 20px;\r\n  box-sizing: border-box;\r\n  border: 3px solid #ccc;\r\n  border-radius: 5px;\r\n  transition: -webkit-transform 0.5s;\r\n  transition: transform 0.5s;\r\n  transition: transform 0.5s, -webkit-transform 0.5s;\r\n  outline: none;\r\n}\r\n.submitForm:hover {\r\n  border: 3px solid #555;\r\n  cursor:pointer;\r\n}\r\n.submitForm:disabled{\r\n  cursor:not-allowed;\r\n}\r\n#confirm{\r\n  position: relative;\r\n  left: -12px;\r\n  padding: 12px 20px;\r\n  margin: 8px 20px;\r\n  box-sizing: border-box;\r\n  border: 3px solid #ccc;\r\n  border-radius: 5px;\r\n  transition: -webkit-transform 0.5s;\r\n  transition: transform 0.5s;\r\n  transition: transform 0.5s, -webkit-transform 0.5s;\r\n  outline: none;\r\n}\r\n#confirm:hover {\r\n  border: 3px solid #555;\r\n  cursor:pointer;\r\n}\r\n.input{\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n  border: 3px solid #ccc;\r\n  border-radius: 5px;\r\n  transition: -webkit-transform 0.5s;\r\n  transition: transform 0.5s;\r\n  transition: transform 0.5s, -webkit-transform 0.5s;\r\n  outline: none;\r\n}\r\n.input:focus {\r\n  border: 3px solid #555;\r\n}\r\n.colname{\r\n  display: inline-block;\r\n  width: 130px;\r\n  text-align: end;\r\n  margin-right: 20px;\r\n  font-family: Papyrus;\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  color: white;\r\n}\r\n#date{\r\n  position: relative;\r\n  right: 30px;\r\n}\r\n#time{\r\n  position: relative;\r\n  right: 30px;\r\n}\r\n#partySize{\r\n  width: 330px;\r\n}\r\n.input-group{\r\n  float: none;\r\n  margin: auto;\r\n  width: 410px;\r\n}\r\n#info{\r\n  position: relative;\r\n  right: 70px;\r\n}\r\n.alert{\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n  border: 3px solid red;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  font-family: Papyrus;\r\n  font-weight: bold;\r\n  background-color: pink;\r\n}\r\n.alertg{\r\n  display: inline-block;\r\n  position: relative;\r\n  left: 78px;\r\n  width: 330px;\r\n}\r\n#success{\r\n  position: relative;\r\n  right: 15px;\r\n  text-align: center;\r\n  padding: 12px 20px;\r\n  margin: 0 auto;\r\n  box-sizing: border-box;\r\n  border: 3px solid black;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  font-family: Papyrus;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  width: 400px;\r\n  background-color: lightgreen;\r\n}\r\n@media only screen and (max-width: 700px) {\r\n  #info{\r\n    position: relative;\r\n    left: 3%;\r\n    right: 0px;\r\n  }\r\n  .input{\r\n    width: 80%;\r\n  }\r\n  #partySize{\r\n    width: 80%;\r\n  }\r\n  .input-group{\r\n    width: 80%;\r\n  }\r\n  .alertg{\r\n    position: relative;\r\n    left: 0%;\r\n    width: 80%;\r\n  }\r\n  #success{\r\n    left: 0%;\r\n    width: 80%;\r\n  }\r\n  #confirm{\r\n    left: 0%;\r\n    width: 80%;\r\n  }\r\n}\r\n"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = "h2{\r\n  position: relative;\r\n  text-align: center;\r\n  font-family: Comic Sans MS;\r\n  font-size: 30px;\r\n  text-shadow: 2px 2px 5px #ccc;\r\n}\r\n.myForm{\r\n  position: relative;\r\n  right: 20px;\r\n  text-align: center;\r\n}\r\n.colname{\r\n  display: inline-block;\r\n  width: 170px;\r\n  text-align: end;\r\n  margin-right: 20px;\r\n  font-family: Papyrus;\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  color: white;\r\n}\r\n.input-group{\r\n  float: none;\r\n  margin: auto;\r\n  width: 410px;\r\n}\r\n.input{\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n  border: 3px solid #ccc;\r\n  border-radius: 5px;\r\n  transition: -webkit-transform 0.5s;\r\n  transition: transform 0.5s;\r\n  transition: transform 0.5s, -webkit-transform 0.5s;\r\n  outline: none;\r\n}\r\n.input:focus {\r\n  border: 3px solid #555;\r\n}\r\n#date{\r\n  position: relative;\r\n  right: 30px;\r\n}\r\n#time{\r\n  position: relative;\r\n  right: 30px;\r\n}\r\n#partySize{\r\n  width: 330px;\r\n}\r\n#cancel:hover{\r\n  color: red;\r\n}\r\n.submitForm{\r\n  padding: 12px 20px;\r\n  margin: 8px 20px;\r\n  box-sizing: border-box;\r\n  border: 3px solid #ccc;\r\n  border-radius: 5px;\r\n  transition: -webkit-transform 0.5s;\r\n  transition: transform 0.5s;\r\n  transition: transform 0.5s, -webkit-transform 0.5s;\r\n  outline: none;\r\n}\r\n.submitForm:hover {\r\n  border: 3px solid #555;\r\n  cursor:pointer;\r\n}\r\n.submitForm:disabled{\r\n  cursor:not-allowed;\r\n}\r\n.success{\r\n  text-align: center;\r\n  padding: 12px 20px;\r\n  margin: 0 auto;\r\n  box-sizing: border-box;\r\n  border: 3px solid black;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  font-family: Papyrus;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  width: 40%;\r\n  background-color: lightgreen;\r\n}\r\n@media only screen and (max-width: 700px) {\r\n  .input{\r\n    width: 80%;\r\n  }\r\n  #partySize{\r\n    position: relative;\r\n    left: 15px;\r\n    width: 80%;\r\n  }\r\n  .input-group{\r\n    width: 80%;\r\n  }\r\n  .alertg{\r\n    position: relative;\r\n    left: 0%;\r\n    width: 80%;\r\n  }\r\n  .submitForm{\r\n    position: relative;\r\n    right: 0px;\r\n  }\r\n  .success{\r\n    width: 80%;\r\n  }\r\n  h2{\r\n    left: 10%;\r\n    width: 80%;\r\n  }\r\n}\r\n"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = "#userdiv{\r\n  text-align: center;\r\n}\r\nh2{\r\n  position: relative;\r\n  right: 20px;\r\n  text-align: center;\r\n  font-family: Comic Sans MS;\r\n  font-size: 30px;\r\n  text-shadow: 2px 2px 5px #ccc;\r\n}\r\n.myForm{\r\n  position: relative;\r\n  right: 20px;\r\n  text-align: center;\r\n}\r\n.submitForm{\r\n  padding: 12px 20px;\r\n  margin: 8px 20px;\r\n  box-sizing: border-box;\r\n  border: 3px solid #ccc;\r\n  border-radius: 5px;\r\n  transition: -webkit-transform 0.5s;\r\n  transition: transform 0.5s;\r\n  transition: transform 0.5s, -webkit-transform 0.5s;\r\n  outline: none;\r\n}\r\n.submitForm:hover {\r\n  border: 3px solid #555;\r\n  cursor:pointer;\r\n}\r\n.submitForm:disabled{\r\n  cursor:not-allowed;\r\n}\r\n.input{\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n  border: 3px solid #ccc;\r\n  border-radius: 5px;\r\n  transition: -webkit-transform 0.5s;\r\n  transition: transform 0.5s;\r\n  transition: transform 0.5s, -webkit-transform 0.5s;\r\n  outline: none;\r\n}\r\n.input:focus {\r\n  border: 3px solid #555;\r\n}\r\n.colname{\r\n  display: inline-block;\r\n  width: 170px;\r\n  text-align: end;\r\n  margin-right: 20px;\r\n  font-family: Papyrus;\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  color: white;\r\n}\r\n.input-group{\r\n  float: none;\r\n  margin: auto;\r\n  width: 410px;\r\n}\r\n.alert{\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n  border: 3px solid red;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  font-family: Papyrus;\r\n  font-weight: bold;\r\n  background-color: pink;\r\n}\r\n.alertg{\r\n  display: inline-block;\r\n  position: relative;\r\n  left: 95px;\r\n  width: 330px;\r\n}\r\n@media only screen and (max-width: 700px) {\r\n  .input{\r\n    width: 80%;\r\n  }\r\n  .input-group{\r\n    width: 80%;\r\n  }\r\n  .alertg {\r\n    position: relative;\r\n    left: 0%;\r\n    width: 80%;\r\n  }\r\n  .submitForm{\r\n    position: relative;\r\n    right: 0px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = "<br>\n<h1>\n  Yunnan Crossbridge Restaurant\n</h1>\n<div id=\"users\">\n  <button id=\"userBtn\" routerLink=\"/users\" routerLinkActive=\"active\" [style.borderColor]=\"userColor\" (click)=\"changeUser()\">User</button>\n  <button id=\"ownerBtn\" routerLink=\"/owners\" routerLinkActive=\"active\" [style.borderColor]=\"ownerColor\" (click)=\"changeOwner()\">Owner</button>\n</div>\n<router-outlet></router-outlet>\n<br>\n<app-slideshow *ngIf=\"slide()\"></app-slideshow>\n\n"

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = "<div id=\"menu\" [ngSwitch]=\"myVal\">\n  <div *ngSwitchCase=\"1\">\n    <h2>Owner Menu</h2>\n    <button class=\"submitForm\" (click)=\"myVal = 2\">View Booking</button><br>\n    <button class=\"submitForm\" (click)=\"myVal = 3\">View Seating Area</button><br>\n    <button class=\"submitForm\" (click)=\"modal1.open()\">Edit Company Contact Information</button><br>\n    <button class=\"submitForm\" (click)=\"logout()\">Log Out</button>\n  </div>\n  <modal #modal1>\n    <modal-header [show-close]=\"true\">\n      <h4 class=\"modal-title\">Contact Information</h4>\n    </modal-header>\n    <modal-body>\n      <table class=\"table table-striped\">\n        <tr><td>Name:</td><td><input type=\"text\" #nameRef class=\"form-control\" value=\"{{info.name}}\"/></td></tr>\n        <tr><td>Address:</td><td><input type=\"text\" #addressRef class=\"form-control\" value=\"{{info.address}}\"/></td></tr>\n        <tr><td>Telephone:</td><td><input type=\"text\" #telephoneRef class=\"form-control\" value=\"{{info.tel}}\"/></td></tr>\n        <tr><td>Email:</td><td><input type=\"text\" #emailRef class=\"form-control\" value=\"{{info.email}}\"/></td></tr>\n      </table>\n      <label for=\"content1\">Please enter the content:</label>\n      <textarea class=\"form-control\" id=\"content1\" #contentRef value=\"{{info.content}}\">\n      </textarea>\n    </modal-body>\n    <modal-footer>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"save(nameRef.value, addressRef.value, telephoneRef.value, emailRef.value, contentRef.value);modal1.close();\">Save</button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal1.close();\">Close</button>\n    </modal-footer>\n  </modal>\n  <app-owner-view-booking *ngSwitchCase=\"2\"></app-owner-view-booking>\n  <app-owner-view-seating-area *ngSwitchCase=\"3\"></app-owner-view-seating-area>\n</div>\n\n"

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = "<h2>Owner Register</h2>\n<form #userForm=\"ngForm\" id=\"myForm\" [hidden]=\"submit\">\n  <span class=\"colname\" >Username:</span>\n  <input class=\"input\" type=\"text\" size=\"35\" placeholder=\"Username\"\n         required minlength=\"5\" maxlength=\"20\" ngModel name=\"username\" #userNameRef=\"ngModel\" pattern=\"[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]*\"/><br>\n  <div class=\"alertg\" *ngIf=\"(userNameRef.touched&&!userNameRef.valid) || userNameRef.errors?.minlength || userNameRef.errors?.pattern\">\n    <div class=\"alert\" *ngIf=\"userNameRef.touched&&!userNameRef.valid\">Username required</div>\n    <div class=\"alert\" *ngIf=\"userNameRef.errors?.minlength\">Username should be minlength 5</div>\n    <div class=\"alert\" *ngIf=\"userNameRef.errors?.pattern\">Username invalid</div>\n  </div><br>\n  <span class=\"colname\">Password:</span>\n  <input class=\"input\" type=\"password\" size=\"35\" placeholder=\"Password\"\n         required minlength=\"6\" maxlength=\"20\" ngModel name=\"password\" #passwordRef=\"ngModel\" pattern=\"[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]*\"/><br>\n  <div class=\"alertg\" *ngIf=\"(passwordRef.touched&&!passwordRef.valid) || passwordRef.errors?.minlength || passwordRef.errors?.pattern\">\n   <div class=\"alert\" *ngIf=\"passwordRef.touched&&!passwordRef.valid\">Password required</div>\n   <div class=\"alert\" *ngIf=\"passwordRef.errors?.minlength\">Password should be minlength 6</div>\n   <div class=\"alert\" *ngIf=\"passwordRef.errors?.pattern\">Password invalid</div>\n  </div><br>\n  <span class=\"colname\">Confirm Password:</span>\n  <input class=\"input\" type=\"password\" size=\"35\" placeholder=\"Confirm Password\"\n         required minlength=\"6\" maxlength=\"20\" ngModel name=\"cpassword\" #cpasswordRef=\"ngModel\" pattern=\"[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]*\"/><br>\n  <div class=\"alertg\" *ngIf=\"(cpasswordRef.touched&&!cpasswordRef.valid) || cpasswordRef.errors?.minlength || cpasswordRef.value !== passwordRef.value || cpasswordRef.errors?.pattern\">\n   <div class=\"alert\" *ngIf=\"cpasswordRef.touched&&!cpasswordRef.valid\">Confirm Password required</div>\n   <div class=\"alert\" *ngIf=\"cpasswordRef.errors?.minlength\">Confirm Password should be minlength 6</div>\n   <div class=\"alert\" *ngIf=\"cpasswordRef.value !== passwordRef.value\">Password and confirm password should be the same</div>\n  <div class=\"alert\" *ngIf=\"cpasswordRef.errors?.pattern\">Confirm Password invalid</div>\n  </div><br>\n  <span id=\"email\">Email:</span>\n  <input class=\"input\" type=\"email\" size=\"25\" placeholder=\"Email\" (ngModelChange)='emailChange()'\n         required  maxlength=\"30\" ngModel name=\"email\" #emailRef=\"ngModel\" pattern=\"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$\" />\n  <button id=\"check\" (click)=\"verify(emailRef.value)\">Check</button><br>\n  <div class=\"alertg\" *ngIf=\"(emailRef.touched&&!emailRef.valid) || emailRef.errors?.pattern || emailError()\">\n    <div class=\"alert\" *ngIf=\"emailRef.touched&&!emailRef.valid\">Email required</div>\n    <div class=\"alert\" *ngIf=\"emailRef.errors?.pattern\">Email invalid</div>\n    <div class=\"alert\" *ngIf=\"emailError()\">Email already exists</div>\n  </div><br>\n  <input [disabled]=\"!userForm.form.valid || cpasswordRef.value !== passwordRef.value || account !== null\" id=\"submitForm\" type=\"submit\" value=\"Register\"  (click)=\"register(userNameRef.value, passwordRef.value, emailRef.value)\"/>\n</form>\n<div id=\"success\" [hidden]=\"!submit\">You have registered the account successfully</div>\n<br><br>\n"

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

module.exports = "<div id=\"menu\">\n  <h2>View all the bookingss</h2>\n  <button class=\"submitBtn\" (click)=\"modal2.open()\">Click to Search</button>\n  <button class=\"submitBtn\" (click)=\"reset()\">Reset</button>\n  <table id=\"myTable\" class=\"table table-striped\">\n    <tr><td>Date</td><td>Time</td><td>Name</td><td>Phone</td><td>Party Size</td><td>Status</td></tr>\n    <tr (click)=\"modal1.open()\" *ngFor=\"let booking of bookings\">\n      <td>{{booking.date | Date}}</td>\n      <td>{{booking.time | Time}}</td>\n      <td>{{booking.name}}</td>\n      <td>{{booking.phone}}</td>\n      <td>{{booking.partysize}}</td>\n      <td>{{booking.status}}</td>\n      <modal #modal1>\n        <modal-header [show-close]=\"true\">\n          <h4 class=\"modal-title\">{{booking.name}}</h4>\n        </modal-header>\n        <modal-body>\n          <button class=\"btn btn-primary\" (click)=\"unlock()\">{{unlockText}}</button><br><br>\n          <table class=\"table table-striped\">\n            <tr><td>Name:</td><td><input type=\"text\" #nameRef class=\"form-control\" value=\"{{booking.name}}\" [disabled]=\"unlockVal\"/></td></tr>\n            <tr><td>Date:</td><td><input type=\"date\" #dateRef class=\"form-control\" value=\"{{booking.date | Date2}}\" [disabled]=\"unlockVal\"/></td></tr>\n            <tr><td>Time:</td><td><input type=\"time\" #timeRef class=\"form-control\" value=\"{{booking.time | Time}}\" [disabled]=\"unlockVal\"/></td></tr>\n            <tr><td>Phone:</td><td><input type=\"tel\" #phoneRef class=\"form-control\" value=\"{{booking.phone}}\" [disabled]=\"unlockVal\"/></td></tr>\n            <tr><td>Party Size:</td><td>\n              <select class=\"form-control\" #partysizeRef value=\"{{booking.partysize}}\" [disabled]=\"unlockVal\">\n                <option value=\"1\">1 Persons</option>\n                <option value=\"2\">2 Persons</option>\n                <option value=\"3\">3 Persons</option>\n                <option value=\"4\">4 Persons</option>\n                <option value=\"5\">5 Persons</option>\n                <option value=\"6\">6 Persons</option>\n                <option value=\"7\">7 Persons</option>\n                <option value=\"8\">8 Persons</option>\n                <option value=\"9\">9 Persons</option>\n                <option value=\"10\">10 Persons</option>\n                <option value=\"11\">More than 10 Persons</option>\n              </select>\n            </td></tr>\n            <tr><td>Area:</td><td>{{booking.area}}</td></tr>\n            <tr><td>Table:</td><td>{{booking.table}}</td></tr>\n            <tr><td>Confirmation Code:</td><td>{{booking._id}}</td></tr>\n          </table>\n          <label for=\"status1\">Select an status (select one):</label>\n          <select class=\"form-control\" id=\"status1\" #statusRef value=\"{{booking.status}}\">\n            <option value=\"Pending\">Pending</option>\n            <option value=\"Complete\">Complete</option>\n          </select>\n          <label for=\"area1\">Select an area (select one):</label>\n          <select class=\"form-control\" id=\"area1\" #areaRef>\n            <option>A</option>\n            <option>B</option>\n            <option>C</option>\n            <option>D</option>\n          </select>\n          <label for=\"table1\">Select a table (select one):</label>\n          <select class=\"form-control\" id=\"table1\" #tableRef>\n            <option>1</option>\n            <option>2</option>\n            <option>3</option>\n            <option>4</option>\n            <option>5</option>\n            <option>6</option>\n            <option>7</option>\n            <option>8</option>\n          </select>\n        </modal-body>\n        <modal-footer>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"bookingUpdate(booking, nameRef.value,\n          dateRef.value, timeRef.value, phoneRef.value, partysizeRef.value, statusRef.value, areaRef.value, tableRef.value);modal1.close();\">Assign</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal1.close()\">Close</button>\n        </modal-footer>\n      </modal>\n    </tr>\n  </table>\n  <button class=\"submitBtn\" (click)=\"reload()\">Back</button>\n  <modal #modal2>\n  <modal-header [show-close]=\"true\">\n  <h4 class=\"modal-title\">Search</h4>\n  </modal-header>\n  <modal-body>\n  <table class=\"table table-striped\">\n  <tr><td>Name:</td><td><input type=\"text\" class=\"form-control\" #name/></td></tr>\n  <tr><td>Phone:</td><td><input type=\"phone\" class=\"form-control\" #phone/></td></tr>\n  <tr><td>Status:</td><td>\n    <select class=\"form-control\" #status>\n    <option value=\"Pending\">Pending</option>\n    <option value=\"Complete\">Complete</option>\n  </select></td></tr>\n  <tr><td>Confirmation Code:</td><td><input type=\"text\" class=\"form-control\" #code/></td></tr>\n  </table>\n  </modal-body>\n  <modal-footer>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"search(name.value, phone.value, status.value, code.value);modal2.close()\">Search</button>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal2.close()\">Close</button>\n  </modal-footer>\n  </modal>\n</div>\n"

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports = "\n\n<h2>View Seating Area</h2>\n<span class=\"colname\">Please select a seating area</span>\n<select class=\"input\" [(ngModel)]=\"area\">\n  <option value=\"all\">All</option>\n  <option value=\"A\">A</option>\n  <option value=\"B\">B</option>\n  <option value=\"C\">C</option>\n  <option value=\"D\">D</option>\n</select><br>\n<span class=\"colname\">Please select a seating table</span>\n<select class=\"input\" [(ngModel)]=\"table\">\n  <option value=\"all\">All</option>\n  <option value=\"1\">1</option>\n  <option value=\"2\">2</option>\n  <option value=\"3\">3</option>\n  <option value=\"4\">4</option>\n  <option value=\"5\">5</option>\n  <option value=\"6\">6</option>\n  <option value=\"7\">7</option>\n  <option value=\"8\">8</option>\n</select><br>\n<div class=\"table\">\n  <div class=\"item\" (click)=\"modal1.open()\" *ngFor=\"let booking of bookings | SeatFilter | AreaFilter:area | TableFilter:table\">\n      <div class=\"success\">\n        {{ booking.name }}<br>\n        {{ booking.area}}{{ booking.table}}<br>\n      </div><br>\n      <img src=\"../../assets/table.png\" />\n    <modal #modal1>\n      <modal-header [show-close]=\"true\">\n        <h4 class=\"modal-title\">{{booking.name}}</h4>\n      </modal-header>\n      <modal-body>\n        <table class=\"table table-striped\">\n          <tr><td>Name:</td><td>{{booking.name}}</td></tr>\n          <tr><td>Date:</td><td>{{booking.date | Date}}</td></tr>\n          <tr><td>Time:</td><td>{{booking.time | Time}}</td></tr>\n          <tr><td>Phone:</td><td>{{booking.phone}}</td></tr>\n          <tr><td>Party Size:</td><td>{{booking.partysize}}</td></tr>\n          <tr><td>Area:</td><td>{{booking.area}}</td></tr>\n          <tr><td>Table:</td><td>{{booking.table}}</td></tr>\n          <tr><td>Status:</td><td>{{booking.status}}</td></tr>\n          <tr><td>Confirmation Code:</td><td>{{booking._id}}</td></tr>\n        </table>\n      </modal-body>\n      <modal-footer>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal1.close()\">Close</button>\n      </modal-footer>\n    </modal>\n  </div>\n</div>\n"

/***/ }),

/***/ 723:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!loginSuccess()\">\n  <h2>Owner Login</h2>\n  <form id=\"myForm\">\n    <span class=\"colname\">Email:</span><input class=\"input\" name=\"email\" type=\"email\" ngModel #emailRef=\"ngModel\" size=\"35\" placeholder=\"Email\"/><br>\n    <span class=\"colname\">Password:</span><input class=\"input\" name=\"password\" type=\"password\" ngModel #passwordRef=\"ngModel\" size=\"35\" placeholder=\"Password\" /><br>\n    <span class=\"colname\"></span><div id=\"loginF\" *ngIf=\"loginFailed()\">Your email or password is not correct</div><br>\n    <input id=\"submitForm\" type=\"submit\" value=\"Login\" (click)=\"loginFun(emailRef.value, passwordRef.value)\">\n    <button id=\"registerForm\" (click)=\"registerAcc()\">Register</button><br>\n  </form>\n</div>\n<app-owner-menu *ngIf=\"loginSuccess() && !register\"></app-owner-menu>\n<app-owner-register *ngIf=\"register\"></app-owner-register>\n"

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

module.exports = "<div>\n  <div id=\"success\">{{content.content}}\n  <img id=\"moreImg\" src=\"../../assets/more.png\" width=\"40px\" (click)=\"modal1.open()\" />\n  </div>\n  <modal #modal1>\n    <modal-header [show-close]=\"true\">\n      <h4 class=\"modal-title\">Contact Information</h4>\n    </modal-header>\n    <modal-body>\n      <table class=\"table table-striped\">\n        <tr><td>Name:</td><td>{{content.name}}</td></tr>\n        <tr><td>Address:</td><td>{{content.address}}</td></tr>\n        <tr><td>Telephone:</td><td>{{content.tel}}</td></tr>\n        <tr><td>Email:</td><td>{{content.email}}</td></tr>\n      </table>\n    </modal-body>\n    <modal-footer>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal1.close()\">Close</button>\n    </modal-footer>\n  </modal>\n  <br>\n  <div class=\"carousel\">\n    <ul class=\"slides\">\n      <li *ngFor=\"let image of images\">\n        <h2>{{image.title}}</h2>\n        <img src=\"{{image.url}}\" alt=\"\">\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = "<div id=\"menu\" [ngSwitch]=\"myVal\">\n  <div *ngSwitchCase=\"1\">\n    <h2>User Menu</h2>\n    <button class=\"submitForm\" (click)=\"myVal = 2\">Create a Booking</button><br>\n    <button class=\"submitForm\" (click)=\"myVal = 3\">Edit/Cancel a Booking</button><br>\n    <button class=\"submitForm\" (click)=\"logout()\">Log Out</button>\n  </div>\n  <app-usercreate *ngSwitchCase=\"2\"></app-usercreate>\n  <app-useredit *ngSwitchCase=\"3\"></app-useredit>\n</div>\n"

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!loginSuccess()\">\n  <h2>User Login</h2>\n  <form id=\"myForm\">\n    <span class=\"colname\">Email:</span><input class=\"input\" name=\"email\" type=\"email\" ngModel #emailRef=\"ngModel\" size=\"35\" placeholder=\"Email\"/><br>\n    <span class=\"colname\">Password:</span><input class=\"input\" name=\"password\" type=\"password\" ngModel #passwordRef=\"ngModel\" size=\"35\" placeholder=\"Password\" /><br>\n    <span class=\"colname\"></span><div id=\"loginF\" *ngIf=\"loginFailed()\">Your email or password is not correct</div><br>\n    <input id=\"submitForm\" type=\"submit\" value=\"Login\" (click)=\"loginFun(emailRef.value, passwordRef.value)\">\n    <button id=\"registerForm\" (click)=\"registerAcc()\">Register</button><br>\n  </form>\n</div>\n<app-user-menu *ngIf=\"loginSuccess() && !register\"></app-user-menu>\n<app-user-register *ngIf=\"register\"></app-user-register>\n"

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

module.exports = "<h2>User Register</h2>\n<form #userForm=\"ngForm\" id=\"myForm\" [hidden]=\"submit\">\n  <span class=\"colname\" >Username:</span>\n  <input class=\"input\" type=\"text\" size=\"35\" placeholder=\"Username\"\n         required minlength=\"5\" maxlength=\"20\" ngModel name=\"username\" #userNameRef=\"ngModel\" pattern=\"[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]*\"/><br>\n  <div class=\"alertg\" *ngIf=\"(userNameRef.touched&&!userNameRef.valid) || userNameRef.errors?.minlength || userNameRef.errors?.pattern\">\n    <div class=\"alert\" *ngIf=\"userNameRef.touched&&!userNameRef.valid\">Username required</div>\n    <div class=\"alert\" *ngIf=\"userNameRef.errors?.minlength\">Username should be minlength 5</div>\n    <div class=\"alert\" *ngIf=\"userNameRef.errors?.pattern\">Username invalid</div>\n  </div><br>\n  <span class=\"colname\">Password:</span>\n  <input class=\"input\" type=\"password\" size=\"35\" placeholder=\"Password\"\n         required minlength=\"6\" maxlength=\"20\" ngModel name=\"password\" #passwordRef=\"ngModel\" pattern=\"[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]*\"/><br>\n  <div class=\"alertg\" *ngIf=\"(passwordRef.touched&&!passwordRef.valid) || passwordRef.errors?.minlength || passwordRef.errors?.pattern\">\n    <div class=\"alert\" *ngIf=\"passwordRef.touched&&!passwordRef.valid\">Password required</div>\n    <div class=\"alert\" *ngIf=\"passwordRef.errors?.minlength\">Password should be minlength 6</div>\n    <div class=\"alert\" *ngIf=\"passwordRef.errors?.pattern\">Password invalid</div>\n  </div><br>\n  <span class=\"colname\">Confirm Password:</span>\n  <input class=\"input\" type=\"password\" size=\"35\" placeholder=\"Confirm Password\"\n         required minlength=\"6\" maxlength=\"20\" ngModel name=\"cpassword\" #cpasswordRef=\"ngModel\" pattern=\"[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]*\"/><br>\n  <div class=\"alertg\" *ngIf=\"(cpasswordRef.touched&&!cpasswordRef.valid) || cpasswordRef.errors?.minlength || cpasswordRef.value !== passwordRef.value || cpasswordRef.errors?.pattern\">\n    <div class=\"alert\" *ngIf=\"cpasswordRef.touched&&!cpasswordRef.valid\">Confirm Password required</div>\n    <div class=\"alert\" *ngIf=\"cpasswordRef.errors?.minlength\">Confirm Password should be minlength 6</div>\n    <div class=\"alert\" *ngIf=\"cpasswordRef.value !== passwordRef.value\">Password and confirm password should be the same</div>\n    <div class=\"alert\" *ngIf=\"cpasswordRef.errors?.pattern\">Confirm Password invalid</div>\n  </div><br>\n  <span id=\"email\">Email:</span>\n  <input class=\"input\" type=\"email\" size=\"25\" placeholder=\"Email\" (ngModelChange)='emailChange()'\n         required  maxlength=\"30\" ngModel name=\"email\" #emailRef=\"ngModel\" pattern=\"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$\" />\n  <button id=\"check\" (click)=\"verify(emailRef.value)\">Check</button><br>\n  <div class=\"alertg\" *ngIf=\"(emailRef.touched&&!emailRef.valid) || emailRef.errors?.pattern || emailError()\">\n    <div class=\"alert\" *ngIf=\"emailRef.touched&&!emailRef.valid\">Email required</div>\n    <div class=\"alert\" *ngIf=\"emailRef.errors?.pattern\">Email invalid</div>\n    <div class=\"alert\" *ngIf=\"emailError()\">Email already exists</div>\n  </div><br>\n  <input [disabled]=\"!userForm.form.valid || cpasswordRef.value !== passwordRef.value || account !== null\" id=\"submitForm\" type=\"submit\" value=\"Register\"  (click)=\"register(userNameRef.value, passwordRef.value, emailRef.value)\"/>\n</form>\n<div id=\"success\" [hidden]=\"!submit\">You have registered the account successfully</div>\n<br><br>\n\n"

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

module.exports = "<div id=\"userdiv\">\n  <h2>Create a Booking</h2>\n  <form #userForm=\"ngForm\" id=\"myForm\" [hidden]=\"submit\">\n    <div class=\"form-group\">\n      <span class=\"colname\" id=\"date\">Date:</span>\n      <div class=\"input-group date form_date col-xs-3\" data-date=\"\" data-date-format=\"mm-dd-yyyy\" data-link-field=\"dtp_input2\" data-link-format=\"yyyy-mm-dd\">\n        <input id=\"dateInput\" class=\"form-control\" size=\"16\" type=\"text\" required readonly>\n        <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-remove\"></span></span>\n        <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-calendar\"></span></span>\n      </div>\n      <input type=\"hidden\" id=\"dtp_input2\" value=\"\" /><br/>\n      </div>\n    <div class=\"form-group\">\n      <span class=\"colname\" id=\"time\">Time:</span>\n      <div class=\"input-group date form_time col-xs-3\" data-date=\"\" data-date-format=\"hh-ii\" data-link-field=\"dtp_input3\" data-link-format=\"hh:ii\">\n        <input id=\"timeInput\" class=\"form-control\" size=\"16\" type=\"text\" required readonly>\n        <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-remove\"></span></span>\n        <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-time\"></span></span>\n      </div>\n      <input type=\"hidden\" id=\"dtp_input3\" value=\"\" /><br/>\n    </div>\n    <div id=\"info\">\n    <span class=\"colname\">Party Size:</span>\n    <select id=\"partySize\" class=\"input\" name=\"party\" ngModel #partyRef=\"ngModel\">\n      <option value=\"1\">1 Persons</option>\n      <option value=\"2\">2 Persons</option>\n      <option value=\"3\">3 Persons</option>\n      <option value=\"4\">4 Persons</option>\n      <option value=\"5\">5 Persons</option>\n      <option value=\"6\">6 Persons</option>\n      <option value=\"7\">7 Persons</option>\n      <option value=\"8\">8 Persons</option>\n      <option value=\"9\">9 Persons</option>\n      <option value=\"10\">10 Persons</option>\n      <option value=\"11\">More than 10 Persons</option>\n    </select><br><br>\n      <span class=\"colname\" >Name:</span>\n      <input class=\"input\" type=\"text\" size=\"35\" placeholder=\"Name\"\n             required minlength=\"2\" maxlength=\"20\" ngModel name=\"name\" #nameRef=\"ngModel\" pattern=\"[a-zA-Z0-9 .!#$%&’*+/=?^_`{|}~-]*\"/><br>\n      <div class=\"alertg\" *ngIf=\"(nameRef.touched&&!nameRef.valid) || nameRef.errors?.minlength || nameRef.errors?.pattern\">\n        <div class=\"alert\" *ngIf=\"nameRef.touched&&!nameRef.valid\">Name required</div>\n        <div class=\"alert\" *ngIf=\"nameRef.errors?.minlength\">Name should be minlength 2</div>\n        <div class=\"alert\" *ngIf=\"nameRef.errors?.pattern\">Name invalid</div>\n      </div><br>\n    <span class=\"colname\">Phone Number:</span>\n      <input class=\"input\"  type=\"tel\" size=\"35\" placeholder=\"Phone Number\"\n             required name=\"phone\" ngModel #phoneRef=\"ngModel\" pattern=\"[0-9]{10}\"/><br>\n      <div class=\"alertg\" *ngIf=\"(phoneRef.touched&&!phoneRef.valid) || phoneRef.errors?.pattern\">\n        <div class=\"alert\" *ngIf=\"phoneRef.touched&&!phoneRef.valid\">Phone Number required</div>\n        <div class=\"alert\" *ngIf=\"phoneRef.errors?.pattern\">Phone Number invalid</div>\n      </div>\n    </div>\n      <br>\n    <input [disabled]=\"!userForm.form.valid || checkDateTime()\" class=\"submitForm\" type=\"submit\" value=\"Create\" (click)=\"createBooking(partyRef.value, nameRef.value, phoneRef.value)\">\n  </form>\n  <br>\n  <div id=\"success\" [hidden]=\"!submit\">You have created the book successfully<br>\n    The Booking Number is {{code}}\n  </div>\n</div>\n"

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

module.exports = "<form [hidden]=\"formShow()\" #userForm=\"ngForm\" class=\"myForm\">\n    <h2>Hello {{booking.name}}, please update your booking</h2>\n    <h2>Booking Status: {{booking.status}}</h2>\n  <div class=\"form-group\">\n    <span class=\"colname\" id=\"date\">Date:</span>\n    <div class=\"input-group date form_date col-xs-3\" data-date=\"\" data-date-format=\"mm-dd-yyyy\" data-link-field=\"dtp_input2\" data-link-format=\"yyyy-mm-dd\">\n      <input id=\"dateInput\" class=\"form-control\" size=\"16\" type=\"text\" value={{booking.date}} required readonly>\n      <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-remove\"></span></span>\n      <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-calendar\"></span></span>\n    </div>\n    <input type=\"hidden\" id=\"dtp_input2\" value=\"\" /><br/>\n  </div>\n  <div class=\"form-group\">\n    <span class=\"colname\" id=\"time\">Time:</span>\n    <div class=\"input-group date form_time col-xs-3\" data-date=\"\" data-date-format=\"hh-ii\" data-link-field=\"dtp_input3\" data-link-format=\"hh:ii\">\n      <input id=\"timeInput\" class=\"form-control\" size=\"16\" type=\"text\" value={{booking.time}} required readonly>\n      <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-remove\"></span></span>\n      <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-time\"></span></span>\n    </div>\n    <input type=\"hidden\" id=\"dtp_input3\" value=\"\" /><br/>\n  </div>\n  <div id=\"info\">\n    <span class=\"colname\">Party Size:</span>\n    <select id=\"partySize\" class=\"input\" name=\"party\" value={{booking.partysize}} #partyRef>\n      <option value=\"1\">1 Persons</option>\n      <option value=\"2\">2 Persons</option>\n      <option value=\"3\">3 Persons</option>\n      <option value=\"4\">4 Persons</option>\n      <option value=\"5\">5 Persons</option>\n      <option value=\"6\">6 Persons</option>\n      <option value=\"7\">7 Persons</option>\n      <option value=\"8\">8 Persons</option>\n      <option value=\"9\">9 Persons</option>\n      <option value=\"10\">10 Persons</option>\n      <option value=\"11\">More than 10 Persons</option>\n    </select><br>\n  </div>\n  <br>\n  <input [disabled]=\"checkDateTime() || booking.status === 'Complete'\" class=\"submitForm\" type=\"submit\" value=\"Update\" (click)=\"updateBooking(partyRef.value)\">\n  <input id=\"cancel\" [disabled]=\"checkDateTime() || booking.status === 'Complete'\" class=\"submitForm\" type=\"submit\" value=\"Cancel Booking\" (click)=\"cancelBooking()\">\n  </form>\n  <br>\n  <div class=\"success\" *ngIf=\"successShow()\">You have updated the booking successfully</div>\n  <div class=\"success\" *ngIf=\"cancelShow()\">You have cancelled the booking successfully</div>\n"

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

module.exports = "<div id=\"userdiv\">\n  <form #codeForm=\"ngForm\" [hidden]=\"codeSubmit && booking !== null\">\n    <h2>Edit a Booking</h2>\n    <br>\n  <span class=\"colname\">Confirmation Code:</span>\n  <input class=\"input\"  type=\"tel\" size=\"35\" placeholder=\"Confirmation Code\"\n         required name=\"code\" ngModel #codeRef=\"ngModel\" pattern=\"[0-9a-z]{24}\"/><br>\n    <div class=\"alertg\" *ngIf=\"booking === null && codeSubmit === true\">\n      <div class=\"alert\">Your Confirmation Code does not exists</div>\n    </div>\n  <div class=\"alertg\" *ngIf=\"(codeRef.touched&&!codeRef.valid) || codeRef.errors?.pattern\">\n    <div class=\"alert\" *ngIf=\"codeRef.touched&&!codeRef.valid\">Confirmation Code required</div>\n    <div class=\"alert\" *ngIf=\"codeRef.errors?.pattern\">Confirmation Code invalid</div>\n  </div><br>\n    <input [disabled]=\"!codeForm.form.valid\" class=\"submitForm\" type=\"submit\" value=\"Submit\" (click)=\"submitCode(codeRef.value)\">\n  </form>\n  <app-useredit-update [booking]=\"booking\" *ngIf=\"codeSubmit && booking !== null\"></app-useredit-update>\n</div>\n\n"

/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(399);


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookingService = (function () {
    function BookingService(_http) {
        this._http = _http;
        this._url = 'api/book/';
        this._urls = 'api/books';
        this._urls2 = 'api/booksf/';
        this._url_id = 'api/booki/';
    }
    BookingService.prototype.getBooking = function (date, time, phone) {
        return this._http.get(this._url + date + '&' + time + '&' + phone)
            .map(function (response) { return response.json(); });
    };
    BookingService.prototype.getSearchedBookings = function (name, phone, status, code) {
        return this._http.get(this._urls2 + name + '|' + phone + '|' + status + '|' + code)
            .map(function (response) { return response.json(); });
    };
    BookingService.prototype.getBookings = function () {
        return this._http.get(this._urls)
            .map(function (response) { return response.json(); });
    };
    BookingService.prototype.postBooking = function (task) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/api/book', JSON.stringify(task), { headers: headers }).map(function (res) { return res.json(); });
    };
    BookingService.prototype.getEditBooking = function (code) {
        return this._http.get(this._url_id + code)
            .map(function (response) { return response.json(); });
    };
    BookingService.prototype.updateStatus = function (task, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.put('/api/bookupdate/' + id, JSON.stringify(task), { headers: headers }).map(function (res) { return res.json(); });
    };
    BookingService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], BookingService);
    return BookingService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Bard/Desktop/project/src/booking.service.js.map

/***/ })

},[752]);
//# sourceMappingURL=main.bundle.map