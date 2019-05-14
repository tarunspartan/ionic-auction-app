webpackJsonp([1],{

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__productdetails_productdetails__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environment_environment__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http, popoverCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.popoverCtrl = popoverCtrl;
        this.menuCtrl = menuCtrl;
        this.isSearchOpened = false;
        this.cat = "all";
        this.showloader = true;
        this.showloader = true;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.cat = "All";
        this.http.get(__WEBPACK_IMPORTED_MODULE_4__environment_environment__["a" /* SERVER_URL */] + "/sell").subscribe(function (data) {
            _this.prod = data.json();
            _this.products = _this.prod;
            _this.showloader = false;
            // console.log(this.products);
        });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var mail = localStorage.getItem("mail");
        if (!mail) {
            this.menuCtrl.enable(false);
        }
        else {
            this.menuCtrl.enable(true);
        }
    };
    // refresher
    // doRefresh(refresher) {
    //   this.ngOnInit();
    //   setTimeout(() => {
    //     refresher.complete();
    //   }, 2000);
    // }
    HomePage.prototype.updateView = function (data) {
        var _this = this;
        this.cat = data;
        if (data == "all") {
            this.showloader = true;
            this.ngOnInit();
        }
        else {
            this.showloader = true;
            var category = data;
            this.http
                .get(__WEBPACK_IMPORTED_MODULE_4__environment_environment__["a" /* SERVER_URL */] + "/category?category=" + category)
                .subscribe(function (data) {
                // console.log(data.json());
                _this.prod = data.json();
                _this.products = _this.prod;
                _this.showloader = false;
            });
        }
    };
    HomePage.prototype.initializeItems = function () {
        this.products = this.prod;
    };
    HomePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != "") {
            this.products = this.products.filter(function (item) {
                return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
        }
    };
    HomePage.prototype.open = function (id) {
        // alert(name);
        // this.navCtrl.push(ProductdetailsPage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__productdetails_productdetails__["a" /* ProductdetailsPage */], { itemId: id });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"D:\college\Auction\project\auction\src\pages\home\home.html"*/'<ion-header>\n  <!-- <ion-navbar color="primary">\n    <button *ngIf="!isSearchOpened" ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title *ngIf="!isSearchOpened">Home</ion-title>\n    <ion-searchbar *ngIf="isSearchOpened" (ionInput)="getItems($event)" showCancelButton="true" (ionCancel)="isSearchOpened=false"></ion-searchbar>\n    <ion-buttons end>\n      <button ion-button icon-only *ngIf="!isSearchOpened" (click)="isSearchOpened=true">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="show=true" end>\n        <ion-icon *ngIf="!show" name="funnel"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="show=false">\n        <ion-icon *ngIf="show" name="close"></ion-icon>\n      </button>\n\n    </ion-buttons>\n  </ion-navbar> -->\n\n  <ion-navbar color="primary" *ngIf="!show">\n\n    <button *ngIf="!isSearchOpened" ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title *ngIf="!isSearchOpened">Home</ion-title>\n\n    <ion-searchbar *ngIf="isSearchOpened" (ionInput)="getItems($event)" showCancelButton=true (ionCancel)="isSearchOpened=false"\n      animated="true"></ion-searchbar>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only *ngIf="!isSearchOpened" (click)="isSearchOpened=true">\n        <ion-icon name="search"></ion-icon>\n      </button>\n\n      <button ion-button icon-only *ngIf="!isSearchOpened" (click)="show=true" end>\n        <ion-icon *ngIf="!show" name="funnel"></ion-icon>\n      </button>\n\n      <!-- <button ion-button *ngIf="isSearchOpened" icon-only (click)="show=false;isSearchOpened=false">\n        <ion-icon name="close"></ion-icon>\n      </button> -->\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-navbar color="primary" *ngIf="show">\n\n    <ion-item>\n      <ion-label>Select Category</ion-label>\n      <ion-select [(ngModel)]="category" (ngModelChange)="updateView($event)" interface="action-sheet">\n        <ion-option value="all">All</ion-option>\n        <ion-option value="Fine Art">Fine Art</ion-option>\n        <ion-option value="Coins and Jewelry">Coins & Jewelry</ion-option>\n        <ion-option value="Collectibles">Collectibles</ion-option>\n        <ion-option value="Antiques">Antiques</ion-option>\n        <ion-option value="Memorabilia">Memorabilia</ion-option>\n        <ion-option value="Clothing and Souvenirs">Clothing & Souvenirs</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="show=false; ngOnInit()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n\n    </ion-buttons>\n\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-down" pullingText="Pull to refresh" refreshingSpinner="crescent">\n    </ion-refresher-content>\n  </ion-refresher> -->\n\n  <!-- <ion-card *ngIf="show">\n    <ion-list>\n      <ion-item>\n        <ion-label>Select Category</ion-label>\n        <ion-select [(ngModel)]="category" (ngModelChange)="updateView($event)" interface="action-sheet">\n          <ion-option value="all">All</ion-option>\n          <ion-option value="Fine Art">Fine Art</ion-option>\n          <ion-option value="Coins and Jewelry">Coins & Jewelry</ion-option>\n          <ion-option value="Collectibles">Collectibles</ion-option>\n          <ion-option value="Antiques">Antiques</ion-option>\n          <ion-option value="Memorabilia">Memorabilia</ion-option>\n          <ion-option value="Clothing and Souvenirs">Clothing & Souvenirs</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n</ion-card> -->\n\n\n  <h1 style="margin: 10px;font-family: Montserrat;color: cornflowerblue">{{cat | uppercase}}</h1>\n\n  <div *ngIf="showloader">\n    <page-loader id="loading"> </page-loader>\n  </div>\n  <div *ngIf="!showloader">\n    <div *ngFor="let c of products">\n      <ion-card>\n        <ion-item (click)="open(c._id)" no-lines>\n          <!-- style=" border-style: solid;\n        border-width: 1px 1px 2px 1px; border-color:#2368a0;" -->\n          <ion-thumbnail item-start>\n            <img src="{{c.image}}">\n          </ion-thumbnail>\n          <h2 style="color: cornflowerblue;font-family: Montserrat"><b>{{c.name | uppercase}}</b></h2>\n          <br>\n          <p><b>Initial Bid Price:</b> ₹{{c.initialprice}}/-</p>\n          <p>Will end on <ion-note>{{c.date | date}}</ion-note>\n          </p>\n        </ion-item>\n      </ion-card>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\college\Auction\project\auction\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* MenuController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environment_environment__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the UserpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserpagePage = /** @class */ (function () {
    function UserpagePage(navCtrl, navParams, http, callNumber) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.callNumber = callNumber;
        this.email = this.navParams.get("usermail");
    }
    UserpagePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad UserpagePage");
    };
    UserpagePage.prototype.ngOnInit = function () {
        var _this = this;
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.http
            .get(__WEBPACK_IMPORTED_MODULE_3__environment_environment__["a" /* SERVER_URL */] + "/getuser?mail=" + this.email)
            .subscribe(function (data) {
            _this.user = data.json();
            _this.name = _this.user[0].fullName;
            _this.mail = _this.user[0].email;
            _this.number = _this.user[0].phoneNumber;
            // console.log(this.user);
        });
    };
    UserpagePage.prototype.call = function (num) {
        console.log(num);
        this.callNumber
            .callNumber("this.number", true)
            .then(function (res) { return console.log("Launched dialer!", res); })
            .catch(function (err) { return console.log("Error launching dialer", err); });
    };
    UserpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-userpage",template:/*ion-inline-start:"D:\college\Auction\project\auction\src\pages\userpage\userpage.html"*/'<!--\n  Generated template for the UserpagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <p>{{name}}</p>\n  <p>{{mail}}</p>\n  <p>{{number}}</p> -->\n\n  <ion-card>\n    <ion-card-header>\n      <h1>{{name}}</h1>\n    </ion-card-header>\n\n    <ion-list>\n      <ion-item>\n        <ion-icon name="call" item-start></ion-icon>\n        {{number}}\n        <ion-icon name="send" color="secondary" (click)="call(number)" item-end></ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="mail" item-start></ion-icon>\n        {{mail}}\n        <!-- <ion-icon name="send" color="secondary" item-end></ion-icon> -->\n      </ion-item>\n\n\n    </ion-list>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\college\Auction\project\auction\src\pages\userpage\userpage.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */]])
    ], UserpagePage);
    return UserpagePage;
}());

//# sourceMappingURL=userpage.js.map

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 180;

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/userpage/userpage.module": [
		520,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 222;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environment_environment__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { Body } from '@angular/http/src/body';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, menuCtrl, navParams, http, loadingCtrl, alertCtrl, network, formBuilder) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.formBuilder = formBuilder;
        this.userData = {
            fullName: "",
            email: "",
            phoneNumber: "",
            password: ""
        };
        this.todo = this.formBuilder.group({
            name: ["", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required],
            number: ["", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required],
            email: ["", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required],
            password: ["", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required]
        });
    }
    SignupPage.prototype.checkConnection = function () {
        if (this.network.type == "none") {
            // alert("Check your Internet Connection");
            this.internetAlert();
        }
        else {
            this.register();
        }
    };
    SignupPage.prototype.ionViewWillEnter = function () {
        console.log("ionViewDidLoad SignupPage");
        this.menuCtrl.enable(false);
    };
    SignupPage.prototype.ionViewWillLeave = function () {
        // this.menuCtrl.swipeEnable(true);
        this.menuCtrl.enable(true);
    };
    SignupPage.prototype.register = function () {
        var _this = this;
        this.presentLoading();
        // alert("Im in")
        this.http.post(__WEBPACK_IMPORTED_MODULE_4__environment_environment__["a" /* SERVER_URL */] + "/signup", this.userData).subscribe(function (data) {
            console.log(data);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
            _this.loadAlert.dismiss();
            // console.log(this.userData);
        });
    };
    SignupPage.prototype.presentLoading = function () {
        this.loadAlert = this.loadingCtrl.create({
            content: "Signing you up..",
            // duration: 3000
            dismissOnPageChange: true
        });
        this.loadAlert.present();
    };
    SignupPage.prototype.internetAlert = function () {
        var alert = this.alertCtrl.create({
            title: "No Internet!",
            subTitle: "Please connect to proper Network & try again.",
            buttons: ["OK"]
        });
        alert.present();
    };
    SignupPage.prototype.loginpage = function () {
        this.navCtrl.pop();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-signup",template:/*ion-inline-start:"D:\college\Auction\project\auction\src\pages\signup\signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>signup</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content padding>\n  <img id="logo" src="../../assets/imgs/signup.gif" alt="logo">\n  <form [formGroup]="todo" (submit)="checkConnection()">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="person" style="padding-right: 5px"></ion-icon>Full Name\n        </ion-label>\n        <ion-input type="text" name="fullName" formControlName="name" [(ngModel)]="userData.fullName" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="logo-google" style="padding-right: 5px"></ion-icon>Email\n        </ion-label>\n        <ion-input type="email" name="email" formControlName="email" [(ngModel)]="userData.email" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="call" style="padding-right: 5px"></ion-icon>Phone Number\n        </ion-label>\n        <ion-input type="tel" name="phoneNumber" formControlName="number" [(ngModel)]="userData.phoneNumber" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="key" style="padding-right: 5px"></ion-icon>Password\n        </ion-label>\n        <ion-input type="password" name="password" formControlName="password" [(ngModel)]="userData.password" required></ion-input>\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button type="submit" color="secondary" [disabled]="!todo.valid" block>Signup</button>\n  </form>\n  <a color="dark" (click)="loginpage()" small clear style="font-size: 15px;color: black">Already have an account? <b>Login</b>\n    here.</a>\n</ion-content>\n'/*ion-inline-end:"D:\college\Auction\project\auction\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var ForgotpasswordPage = /** @class */ (function () {
    function ForgotpasswordPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        // this.menuCtrl.enable(false);
    }
    ForgotpasswordPage.prototype.ionViewWillEnter = function () {
        console.log("ionViewDidLoad ForgotpasswordPage");
        this.menuCtrl.enable(false);
    };
    ForgotpasswordPage.prototype.ionViewWillLeave = function () {
        // this.menuCtrl.swipeEnable(true);
        this.menuCtrl.enable(true);
    };
    ForgotpasswordPage.prototype.recovery = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    ForgotpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-forgotpassword",template:/*ion-inline-start:"D:\college\Auction\project\auction\src\pages\forgotpassword\forgotpassword.html"*/'<!--\n  Generated template for the ForgotpasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>forgotpassword</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content padding>\n  <img id="logo" src="../../assets/imgs/resetlogo.png" alt="logo">\n    <ion-list>\n\n        <ion-item>\n          <ion-label stacked>Enter your mail</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item><br>\n        <ion-note item-end>Recovery mail will be soon sent to this mail.</ion-note>\n      </ion-list>\n\n  <button ion-button (click)="recovery()" color="secondary" block>Send</button>\n\n</ion-content>\n'/*ion-inline-end:"D:\college\Auction\project\auction\src\pages\forgotpassword\forgotpassword.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* MenuController */]])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());

//# sourceMappingURL=forgotpassword.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_crop__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environment_environment__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the SellPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var SellPage = /** @class */ (function () {
    // https://firebasestorage.googleapis.com/v0/b/auctionapp-a1f6d.appspot.com/o/itemphotos%2Fitemicon.png?alt=media&token=2348d69a-1294-428b-86cf-5b9b061e86e5
    function SellPage(navCtrl, navParams, actionsheetCtrl, camera, http, loadingCtrl, alertCtrl, network, crop, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionsheetCtrl = actionsheetCtrl;
        this.camera = camera;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.crop = crop;
        this.formBuilder = formBuilder;
        this.loader = "../../assets/imgs/sellpage.gif";
        this.mail = localStorage.getItem("mail");
        this.product = {
            mail: this.mail,
            name: "",
            initialprice: "",
            bidprice: "",
            bidder: "",
            date: "",
            image: "",
            category: "",
            description: ""
        };
        this.todo = this.formBuilder.group({
            name: ["", __WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* Validators */].required],
            price: ["", __WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* Validators */].required],
            date: ["", __WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* Validators */].required],
            category: ["", __WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* Validators */].required],
            description: ["", __WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* Validators */].required]
        });
    }
    SellPage_1 = SellPage;
    SellPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SellPage");
        this.show = false;
    };
    SellPage.prototype.checkConnection = function () {
        if (this.network.type == "none") {
            // alert("Check your Internet Connection");
            this.internetAlert();
        }
        else {
            this.sell();
        }
    };
    SellPage.prototype.sell = function () {
        var _this = this;
        this.presentLoading();
        this.http.post(__WEBPACK_IMPORTED_MODULE_6__environment_environment__["a" /* SERVER_URL */] + "/sell", this.product).subscribe(function (data) {
            // console.log(data.json());
            _this.navCtrl.setRoot(SellPage_1);
            _this.pushAlert();
            // console.log(this.userData);
        });
        console.log(this.product);
    };
    SellPage.prototype.presentLoading = function () {
        this.loadAlert = this.loadingCtrl.create({
            content: "Uploading...",
            // duration: 3000
            dismissOnPageChange: true
        });
        this.loadAlert.present();
    };
    SellPage.prototype.capture = function () {
        var _this = this;
        // Defining camera options
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 800,
            targetHeight: 800,
            allowEdit: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.base64ImageURL = "data:image/jpeg;base64," + imageData;
            // alert(this.base64ImageURL);
            // this.img = this.base64ImageURL;
            // alert(this.img);
            _this.show = true;
            _this.uploadPicture();
        }, function (err) {
            // Handle error
            console.log(err);
        });
    };
    SellPage.prototype.choose = function () {
        var _this = this;
        // console.log("Im in choose");
        // Defining camera options
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false,
            targetWidth: 800,
            targetHeight: 800,
            allowEdit: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.base64ImageURL = "data:image/jpeg;base64," + imageData;
            // this.img = this.base64ImageURL;
            _this.show = true;
            _this.uploadPicture();
        }, function (err) {
            // Handle error
            console.log(err);
        });
    };
    SellPage.prototype.uploadPicture = function () {
        var _this = this;
        // alert("im in upload");
        // console.log("Im in upload");
        var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.storage().ref("/itemphotos");
        var uuid = this.guid();
        var imageRef = storageRef.child("itemphotos" + uuid);
        imageRef
            .putString(this.base64ImageURL, __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.storage.StringFormat.DATA_URL)
            .then(function (snapshot) {
            // Do something here when the data is succesfully uploaded!
            // alert("snapshot" + snapshot.downloadURL);
            //  this.product.image = snapshot.downloadURL;
            //  console.log("imgurl"+this.imgurl);
            imageRef
                .getDownloadURL()
                .then(function (url) {
                // console.log("url:" + url);
                //  this.img=url;
                _this.product.image = url;
                // alert(this.product.image);
            })
                .catch(function (error) {
                console.log(error);
            });
            //this.loading.dismiss();
            _this.base64ImageURL = "";
        });
    };
    SellPage.prototype.guid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return (s4() +
            s4() +
            "-" +
            s4() +
            "-" +
            s4() +
            "-" +
            s4() +
            "-" +
            s4() +
            s4() +
            s4());
    };
    SellPage.prototype.openActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionsheetCtrl.create({
            title: "Options",
            cssClass: "action-sheets-basic-page",
            buttons: [
                {
                    text: "Camera",
                    role: "destructive",
                    icon: "camera",
                    handler: function () {
                        _this.capture();
                    }
                },
                {
                    text: "Gallery",
                    icon: "image",
                    handler: function () {
                        _this.choose();
                        console.log("Share clicked");
                    }
                },
                {
                    text: "Cancel",
                    role: "cancel",
                    icon: "close",
                    handler: function () { }
                }
            ]
        });
        actionSheet.present();
    };
    SellPage.prototype.internetAlert = function () {
        var alert = this.alertCtrl.create({
            title: "No Internet!",
            subTitle: "Please connect to proper Network & try again.",
            buttons: ["OK"]
        });
        alert.present();
    };
    SellPage.prototype.pushAlert = function () {
        var alert = this.alertCtrl.create({
            title: "Added Succussfully",
            // subTitle: "Please connect to proper Network & try again.",
            buttons: ["OK"]
        });
        alert.present();
    };
    SellPage = SellPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-sell",template:/*ion-inline-start:"D:\college\Auction\project\auction\src\pages\sell\sell.html"*/'<!--\n  Generated template for the SellPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sell</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="todo" (submit)="checkConnection()">\n\n    <ion-list>\n\n      <ion-item>\n        <ion-label stacked>Name</ion-label>\n        <ion-input name="name" clearInput="true" formControlName="name" [(ngModel)]="product.name" type="text" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Minimal Price</ion-label>\n        <ion-input name="price" type="number" formControlName="price" [(ngModel)]="product.initialprice" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Last Date</ion-label>\n        <ion-datetime name="date" formControlName="date" [(ngModel)]="product.date" displayFormat="DD/MMM/YY hh:mm A"\n          type="date" placeholder="DD/MMM/YYYY HH:MM" required></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Category</ion-label>\n        <ion-select name="category" formControlName="category" [(ngModel)]="product.category" interface="popover">\n          <ion-option value="Fine Art">Fine Art</ion-option>\n          <ion-option value="Coins and Jewelry">Coins & Jewelry</ion-option>\n          <ion-option value="Collectibles">Collectibles</ion-option>\n          <ion-option value="Antiques">Antiques</ion-option>\n          <ion-option value="Memorabilia">Memorabilia</ion-option>\n          <ion-option value="Clothing and Souvenirs">Clothing & Souvenirs</ion-option>\n        </ion-select>\n      </ion-item>\n      <br>\n      <div style="text-align: center">\n\n        <a ion-button color="dark" (click)="openActionSheet()" outline round>\n          <ion-icon name="add"></ion-icon>Add Photos\n        </a>\n\n      </div>\n\n\n      <div *ngIf="show"><img src="{{product.image || loader}}" alt="photo"></div>\n\n      <ion-item>\n        <ion-label stacked>Description</ion-label>\n        <ion-textarea name="description" formControlName="description" [(ngModel)]="product.description" rows="4"\n          placeholder="Write something about product" required></ion-textarea>\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button color="default" type="submit" [disabled]="!todo.valid" block>Sell</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"D:\college\Auction\project\auction\src\pages\sell\sell.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_crop__["a" /* Crop */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormBuilder */]])
    ], SellPage);
    return SellPage;
    var SellPage_1;
}());

//# sourceMappingURL=sell.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MybidsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment_environment__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__productdetails_productdetails__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MybidsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var MybidsPage = /** @class */ (function () {
    function MybidsPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.bidder = localStorage.getItem("mail");
    }
    MybidsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad MybidsPage");
    };
    MybidsPage.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this.bidder);
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        // console.log("http://localhost:3000/sellbyuser?mail="+this.mail);
        this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* SERVER_URL */] + "/mybids?bidder=" + this.bidder)
            .subscribe(function (data) {
            // console.log(data.json());
            _this.mybids = data.json();
        });
    };
    MybidsPage.prototype.open = function (id) {
        // alert(name);
        // this.navCtrl.push(ProductdetailsPage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__productdetails_productdetails__["a" /* ProductdetailsPage */], { itemId: id });
    };
    MybidsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-mybids",template:/*ion-inline-start:"D:\college\Auction\project\auction\src\pages\mybids\mybids.html"*/'<!--\n  Generated template for the MybidsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Bids</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <!-- <div *ngFor="let c of mybids">\n    <ion-list>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="{{c.image}}">\n        </ion-avatar>\n        <h2>{{c.name}}</h2>\n      </ion-item>\n    </ion-list>\n  </div> -->\n\n  <ion-list *ngFor="let c of mybids">\n    <ion-card (click)="open(c._id)">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="{{c.image}}">\n        </ion-thumbnail>\n        <h2><b>{{c.name}}</b></h2>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"D:\college\Auction\project\auction\src\pages\mybids\mybids.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], MybidsPage);
    return MybidsPage;
}());

//# sourceMappingURL=mybids.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyauctionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environment_environment__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__productdetails_productdetails__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MyauctionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var MyauctionsPage = /** @class */ (function () {
    // img="../../assets/imgs/itemicon.png"
    // image:any="../../assets/imgs/itemicon.png"
    function MyauctionsPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.mail = localStorage.getItem("mail");
    }
    MyauctionsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad MyauctionsPage");
    };
    MyauctionsPage.prototype.open = function (id) {
        // alert(name);
        // this.navCtrl.push(ProductdetailsPage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__productdetails_productdetails__["a" /* ProductdetailsPage */], { itemId: id });
    };
    MyauctionsPage.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this.mail);
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        // console.log("http://localhost:3000/sellbyuser?mail="+this.mail);
        this.http
            .get(__WEBPACK_IMPORTED_MODULE_3__environment_environment__["a" /* SERVER_URL */] + "/sellbyuser?mail=" + this.mail)
            .subscribe(function (data) {
            // console.log(data.json());
            _this.myauctionsdata = data.json();
        });
    };
    MyauctionsPage.prototype.deleteItem = function (id) {
        var _this = this;
        console.log(id);
        this.http.delete(__WEBPACK_IMPORTED_MODULE_3__environment_environment__["a" /* SERVER_URL */] + "/deleteitem/" + id).subscribe(function (data) {
            _this.ngOnInit();
            console.log(data);
        });
    };
    MyauctionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-myauctions",template:/*ion-inline-start:"D:\college\Auction\project\auction\src\pages\myauctions\myauctions.html"*/'<!--\n  Generated template for the MyauctionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Auctions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <!-- <div *ngFor="let c of myauctionsdata"> -->\n  <!-- <ion-item  style=" border-style: solid;\n    border-width: 1px 1px 2px 1px; border-color:#2368a0;" no-lines> -->\n  <!-- <ion-item> -->\n  <!-- <ion-thumbnail item-start>\n      <img src="{{c.image}}" style="border: 1px solid rgb(111, 186, 216);\n      border-radius: 50%; height :60px; width :60px; padding :2px;">\n    </ion-thumbnail> -->\n  <!-- <h2><b>{{c.name}}</b></h2> -->\n  <!-- <p>₹{{c.price}}/-</p>\n    <p>Will end on <ion-note>{{c.date}}</ion-note></p>\n    <p>{{c.description}}</p> -->\n  <!-- </ion-item> -->\n  <ion-list *ngFor="let c of myauctionsdata">\n    <ion-item-sliding>\n      <ion-item (click)="open(c._id)">\n        <ion-avatar item-start>\n          <img src="{{c.image}}">\n        </ion-avatar>\n        <h2>{{c.name}}</h2>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button (click)="deleteItem(c._id)" color="danger">\n          <ion-icon name="trash"></ion-icon>\n          DELETE\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <!-- </div> -->\n\n</ion-content>\n'/*ion-inline-end:"D:\college\Auction\project\auction\src\pages\myauctions\myauctions.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], MyauctionsPage);
    return MyauctionsPage;
}());

//# sourceMappingURL=myauctions.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_crop__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_android_full_screen__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_sell_sell__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_mybids_mybids__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_call_number__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_myauctions_myauctions__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_productdetails_productdetails__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_loader_loader__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_forgotpassword_forgotpassword__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_userpage_userpage__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ionic_img_viewer__ = __webpack_require__(414);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























// import { PopoverPage } from "../pages/home/";
var firebaseConfig = {
    apiKey: "AIzaSyDLutLNsZk7Cshpu7RkIRMhRo_bTnlXWNA",
    authDomain: "auctionapp-a1f6d.firebaseapp.com",
    databaseURL: "https://auctionapp-a1f6d.firebaseio.com",
    projectId: "auctionapp-a1f6d",
    storageBucket: "auctionapp-a1f6d.appspot.com",
    messagingSenderId: "651258766641"
};
__WEBPACK_IMPORTED_MODULE_4_firebase___default.a.initializeApp(firebaseConfig);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_sell_sell__["a" /* SellPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_mybids_mybids__["a" /* MybidsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_myauctions_myauctions__["a" /* MyauctionsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_productdetails_productdetails__["a" /* ProductdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_loader_loader__["a" /* LoaderPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_userpage_userpage__["a" /* UserpagePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/userpage/userpage.module#UserpagePageModule', name: 'UserpagePage', segment: 'userpage', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_23_ionic_img_viewer__["a" /* IonicImageViewerModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_sell_sell__["a" /* SellPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_mybids_mybids__["a" /* MybidsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_myauctions_myauctions__["a" /* MyauctionsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_productdetails_productdetails__["a" /* ProductdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_loader_loader__["a" /* LoaderPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_userpage_userpage__["a" /* UserpagePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_android_full_screen__["a" /* AndroidFullScreen */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_crop__["a" /* Crop */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVER_URL; });
var SERVER_URL = "https://ionic-auction.herokuapp.com";
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_full_screen__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sell_sell__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mybids_mybids__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_myauctions_myauctions__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl, androidFullScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.menuCtrl = menuCtrl;
        this.androidFullScreen = androidFullScreen;
        this.mail = localStorage.getItem("mail");
        this.initializeApp();
        // this.mail = localStorage.getItem("mail");
        // used for an example of ngFor and navigation
        this.pages = [
            { icon: "home", title: "Home", component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], color: "primary" },
            { icon: "pricetag", title: "Sell", component: __WEBPACK_IMPORTED_MODULE_7__pages_sell_sell__["a" /* SellPage */], color: "light" },
            {
                icon: "albums",
                title: "My Bids",
                component: __WEBPACK_IMPORTED_MODULE_8__pages_mybids_mybids__["a" /* MybidsPage */],
                color: "light"
            },
            {
                icon: "albums",
                title: "My Auctions",
                component: __WEBPACK_IMPORTED_MODULE_9__pages_myauctions_myauctions__["a" /* MyauctionsPage */],
                color: "light"
            }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.androidFullScreen.immersiveMode();
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleLightContent();
            _this.splashScreen.hide();
            if (_this.mail) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
        page.color = "primary";
        for (var _i = 0, _a = this.pages; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.title == page.title) {
                p.color = "primary";
            }
            else {
                p.color = "light";
            }
        }
    };
    MyApp.prototype.logout = function () {
        // delete this.mail;
        localStorage.clear();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\college\Auction\project\auction\src\app\app.html"*/'<ion-menu id="authenticated" [content]="content">\n\n\n  <ion-content>\n    <img id="logo" src="../assets/imgs/auctionlogo.png" alt="logo">\n    <div style="padding-left: 20px">\n      <!-- <ion-chip>\n        <ion-icon name="person" color="primary"></ion-icon>\n        <ion-label>{{mail}}</ion-label>\n      </ion-chip> -->\n    </div>\n    <br>\n    <ion-list no-lines>\n      <button menuClose ion-item color="{{p.color}}" style="font-family:Montserrat" *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="{{p.icon}}" style="padding-right: 5px"></ion-icon> {{p.title | uppercase}}\n      </button>\n    </ion-list>\n\n\n    <button menuClose ion-button color="danger" clear block style="position: absolute;\n        bottom:0px;" (click)="logout()">Logout\n      <ion-icon name="log-out"> </ion-icon></button>\n\n\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"D:\college\Auction\project\auction\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_full_screen__["a" /* AndroidFullScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LoaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var LoaderPage = /** @class */ (function () {
    function LoaderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoaderPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad LoaderPage");
    };
    LoaderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-loader",template:/*ion-inline-start:"D:\college\Auction\project\auction\src\pages\loader\loader.html"*/'<div class="container" [ngClass]="{\'busy\': isBusy}">\n  <div class="backdrop"></div>\n  <div class=\'loader\'>\n    <div class="bg"></div>\n    <div class=\'circle\'></div>\n    <div class=\'circle\'></div>\n    <div class=\'circle\'></div>\n    <div class=\'circle\'></div>\n    <div class=\'circle\'></div>\n  </div>\n</div>\n'/*ion-inline-end:"D:\college\Auction\project\auction\src\pages\loader\loader.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], LoaderPage);
    return LoaderPage;
}());

//# sourceMappingURL=loader.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environment_environment__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__userpage_userpage__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProductdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var ProductdetailsPage = /** @class */ (function () {
    function ProductdetailsPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.mail = localStorage.getItem("mail");
        this.loader = "../../assets/imgs/tenor.gif";
        this.user = false;
    }
    ProductdetailsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ProductdetailsPage");
    };
    ProductdetailsPage.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        var _this = this;
        if (this.mail) {
            this.authuser = true;
        }
        else {
            this.authuser = false;
        }
        var id = this.navParams.get("itemId");
        // console.log(id);
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__environment_environment__["a" /* SERVER_URL */] + "/getitem?_id=" + id).subscribe(function (data) {
            // console.log(data.json());
            _this.itemData = data.json();
            // console.log(this.itemData);
            _this.id = _this.itemData[0]._id;
            _this.iname = _this.itemData[0].name;
            _this.ides = _this.itemData[0].description;
            _this.imail = _this.itemData[0].mail;
            _this.iprice = _this.itemData[0].initialprice;
            _this.idate = _this.itemData[0].date;
            _this.iimage = _this.itemData[0].image;
            _this.bprice = _this.itemData[0].bidprice;
            _this.bidder = _this.itemData[0].bidder;
            if (_this.bidder == "") {
                _this.bidstatus = false;
            }
            else {
                _this.bidstatus = true;
            }
            if (_this.imail == _this.mail) {
                _this.user = false;
            }
            else {
                _this.user = true;
            }
        });
    };
    ProductdetailsPage.prototype.bidnow = function () {
        var _this = this;
        // console.log(this.bidprice);
        if (this.bidprice > this.iprice && this.bidprice > this.bprice) {
            this.http
                .post(__WEBPACK_IMPORTED_MODULE_3__environment_environment__["a" /* SERVER_URL */] + "/updateBidPrice", {
                bidprice: this.bidprice,
                id: this.id,
                mail: this.mail
            })
                .subscribe(function (data) {
                // console.log(data.json());
                // console.log("Bid Price Updated");
                _this.ngOnInit();
            });
        }
        else {
            this.bidAlert();
            // alert("Bid price must be Greater than Present Price");
        }
    };
    ProductdetailsPage.prototype.getUser = function (mail) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__userpage_userpage__["a" /* UserpagePage */], { usermail: mail });
    };
    ProductdetailsPage.prototype.loginFirst = function () {
        this.authAlert();
    };
    ProductdetailsPage.prototype.bidAlert = function () {
        var alert = this.alertCtrl.create({
            title: "Bid price must be Greater than Present Price",
            // subTitle: "Bid price must be Greater than Present Price",
            buttons: ["OK"]
        });
        alert.present();
    };
    ProductdetailsPage.prototype.authAlert = function () {
        var alert = this.alertCtrl.create({
            title: "You have to login to place your Bid.",
            // subTitle: "Bid price must be Greater than Present Price",
            buttons: ["OK"]
        });
        alert.present();
    };
    ProductdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-productdetails",template:/*ion-inline-start:"D:\college\Auction\project\auction\src\pages\productdetails\productdetails.html"*/'<!--\n  Generated template for the ProductdetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Product Info</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <img style="height: 250px;width: 250px" src="{{iimage || loader}}" imageViewer />\n    <ion-card-content>\n      <ion-card-title>\n        <b>{{iname}}</b>\n      </ion-card-title>\n      <p>\n        <ion-note>{{ides}}</ion-note>\n      </p>\n      <p>By <a (click)="getUser(imail)">{{imail}}</a></p>\n      <p>Starting Bid Price: {{iprice}}</p>\n\n      <div *ngIf="bidstatus; else elseBlock ">\n        <p>Present Bid Price: {{bprice}}</p>\n      </div>\n      <ng-template #elseBlock>\n        <ion-note>\n          <p>No bids yet.</p>\n        </ion-note>\n      </ng-template>\n\n      <p>Ends on {{idate| date:\'medium\' }}</p>\n    </ion-card-content>\n  </ion-card>\n\n\n  <div *ngIf="user">\n\n    <div *ngIf="!authuser; else trueBlock">\n      <br>\n      <button ion-button outline block (click)="loginFirst()">Bid Now</button>\n\n    </div>\n\n    <ng-template #trueBlock>\n\n      <ion-list>\n        <br>\n        <button *ngIf="!bidinput" ion-button outline block (click)="bidinput=true">Bid Now</button>\n        <div *ngIf="bidinput">\n          <form (submit)=bidnow()>\n            <ion-item>\n              <ion-input type="number" name="bidprice" [(ngModel)]="bidprice" placeholder="Enter your bid price here..."></ion-input>\n            </ion-item><br>\n\n            <button ion-button outline block type="submit">Bid Now</button>\n          </form>\n        </div>\n      </ion-list>\n    </ng-template>\n\n\n\n\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\college\Auction\project\auction\src\pages\productdetails\productdetails.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ProductdetailsPage);
    return ProductdetailsPage;
}());

//# sourceMappingURL=productdetails.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgotpassword_forgotpassword__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environment_environment__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, menuCtrl, http, alertCtrl, loadingCtrl, network, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.network = network;
        this.formBuilder = formBuilder;
        this.status = true;
        this.todo = this.formBuilder.group({
            email: ["", __WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* Validators */].required],
            password: ["", __WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* Validators */].required]
        });
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        console.log("ionViewDidLoad LoginPage");
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.enable(true);
    };
    LoginPage.prototype.checkConnection = function () {
        if (this.network.type == "none") {
            // alert("Check your Internet Connection");
            this.internetAlert();
        }
        else {
            this.login();
        }
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        // console.log(this.todo.value.email);
        this.presentLoading();
        // alert(this.userEmail+","+this.userPassword)
        this.status = false;
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_6__environment_environment__["a" /* SERVER_URL */] + "/signin", {
            mail: this.userEmail,
            password: this.userPassword
        })
            .subscribe(function (data) {
            data = data.json();
            var status = "" + data.status;
            // console.log(data);
            if (status === "OK") {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                localStorage.setItem("mail", _this.userEmail);
                _this.status = true;
            }
            else {
                _this.status = true;
                _this.failAlert();
                _this.loadAlert.dismiss();
                // alert("Authentication Failed");
            }
        });
    };
    LoginPage.prototype.skipLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.failAlert = function () {
        var alert = this.alertCtrl.create({
            title: "Authentication Failed!",
            subTitle: "You entered Invalid Mail or Password.",
            buttons: ["OK"]
        });
        alert.present();
    };
    LoginPage.prototype.internetAlert = function () {
        var alert = this.alertCtrl.create({
            title: "No Internet!",
            subTitle: "Please connect to proper Network & try again.",
            buttons: ["OK"]
        });
        alert.present();
    };
    LoginPage.prototype.presentLoading = function () {
        this.loadAlert = this.loadingCtrl.create({
            content: "Logging you in...",
            // duration: 3000
            dismissOnPageChange: true
        });
        this.loadAlert.present();
    };
    LoginPage.prototype.forgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */]);
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-login",template:/*ion-inline-start:"D:\college\Auction\project\auction\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content padding>\n  <img id="logo" src="../../assets/imgs/auction.svg" alt="logo">\n  <ion-card>\n\n    <ion-card-header style="text-align: center; font-family:Montserrat"><b>LOGIN</b></ion-card-header>\n\n    <ion-card-content>\n      <form [formGroup]="todo" (submit)="checkConnection()">\n\n        <ion-list no-lines>\n\n          <ion-item>\n\n            <ion-label>\n              <ion-icon name="person"></ion-icon>\n            </ion-label>\n            <ion-input type="email" name="userEmail" placeholder="Email" [(ngModel)]="userEmail" formControlName="email"\n              required></ion-input>\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label>\n              <ion-icon name="key"></ion-icon>\n            </ion-label>\n            <ion-input type="password" name="userPassword" placeholder="Password" [(ngModel)]="userPassword"\n              formControlName="password" required></ion-input>\n          </ion-item>\n\n        </ion-list>\n        <div style="text-align: right">\n          <a (click)="forgotPassword()" color="danger" small clear style="font-size: 10px;">Forgot password?</a><br>\n        </div>\n        <button tappable ion-button type="submit" color="secondary" [disabled]="!todo.valid" block>\n          <div *ngIf="status; else logging">LOGIN</div>\n          <ng-template #logging>LOGGING IN...</ng-template>\n        </button>\n        <br>\n        <a style="display: flex;justify-content: center;" ion-button tappable (click)="skipLogin()" color="primary"\n          outline small>\n          SKIP\n        </a>\n      </form>\n    </ion-card-content>\n\n  </ion-card>\n\n  <a color="dark" (click)="signup()" small clear style="font-size: 15px;color: white">Don\'t have an account? <b>Sign\n      up</b> here.</a>\n</ion-content>\n'/*ion-inline-end:"D:\college\Auction\project\auction\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[306]);
//# sourceMappingURL=main.js.map