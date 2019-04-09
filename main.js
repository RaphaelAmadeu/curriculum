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
		var e = new Error("Cannot find module '" + req + "'");
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

module.exports = "html {\n  scroll-behavior: smooth;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar\n[headingTitle]=\"headingTitle\"></app-navbar>\n<app-leadspace [name]=\"name\" [(quote)]=\"quote\"></app-leadspace>\n<div>\n  <app-band *ngFor=\"let band of bands\"\n   [anchor]=\"band.anchor\"\n   [heading]=\"band.heading\"\n   [content]=\"band.content\"\n   [img]=\"band.img\"\n   [alt]=\"band.alt\"\n   [alternate]=\"band.alternate\"\n   [list]=\"band.list\"\n   [listContent]=\"band.listContent\"\n   [cta_active]=\"band.cta_active\"\n   [ctas]=\"band.ctas\"\n   >\n </app-band>\n <app-footer></app-footer>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bands_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bands-mock */ "./src/app/bands-mock.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Curriculum';
        this.headingTitle = "R.Amadeu";
        this.name = "Raphael Amadeu";
        this.quote = "Learning is like the horizon, it has NO limits.";
        this.bands = _bands_mock__WEBPACK_IMPORTED_MODULE_2__["BANDS"];
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _leadspace_leadspace_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./leadspace/leadspace.component */ "./src/app/leadspace/leadspace.component.ts");
/* harmony import */ var _band_band_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./band/band.component */ "./src/app/band/band.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _leadspace_leadspace_component__WEBPACK_IMPORTED_MODULE_5__["LeadspaceComponent"],
                _band_band_component__WEBPACK_IMPORTED_MODULE_6__["BandComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/band/band.component.css":
/*!*****************************************!*\
  !*** ./src/app/band/band.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".band {\n  margin-top: 14px;\n  padding: 20px;\n}\n\nh3 {\n  font-family: 'Ubuntu', sans-serif;\n  font-weight: 700;\n}\n\n.content {\n  margin-top: 20px;\n  font-family: 'roboto', sans-serif;\n  font-weight: 500;\n}\n\nli {\n  font-family: 'roboto', sans-serif;\n  font-size: 90%;\n}\n\npre {\n  white-space: pre-wrap;       /* css-3 */\n  white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */\n  white-space: -pre-wrap;      /* Opera 4-6 */\n  white-space: -o-pre-wrap;    /* Opera 7 */\n  word-wrap: break-word;       /* Internet Explorer 5.5+ */\n}\n\ndiv.col-6 {\n  display: flex;\n}\n\n.ctas {\n  display: inline-block;\n  align-self: flex-end;\n}\n\n.btn {\n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n\n.show-small {\n  display: none;\n}\n\n@media screen and (max-width: 768px){\n  .hidden-small {\n    display: none;\n  }\n\n  .show-small {\n    display: block;\n  }\n\n  img {\n    margin-bottom: 15px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFuZC9iYW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGNBQWM7QUFDaEI7O0FBR0E7RUFDRSxxQkFBcUIsUUFBUSxVQUFVO0VBQ3ZDLDBCQUEwQixHQUFHLHdCQUF3QjtFQUNyRCxzQkFBc0IsT0FBTyxjQUFjO0VBQzNDLHdCQUF3QixLQUFLLFlBQVk7RUFDekMscUJBQXFCLFFBQVEsMkJBQTJCO0FBQzFEOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2JhbmQvYmFuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbmQge1xuICBtYXJnaW4tdG9wOiAxNHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG5oMyB7XG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LWZhbWlseTogJ3JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmxpIHtcbiAgZm9udC1mYW1pbHk6ICdyb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDkwJTtcbn1cblxuXG5wcmUge1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7ICAgICAgIC8qIGNzcy0zICovXG4gIHdoaXRlLXNwYWNlOiAtbW96LXByZS13cmFwOyAgLyogTW96aWxsYSwgc2luY2UgMTk5OSAqL1xuICB3aGl0ZS1zcGFjZTogLXByZS13cmFwOyAgICAgIC8qIE9wZXJhIDQtNiAqL1xuICB3aGl0ZS1zcGFjZTogLW8tcHJlLXdyYXA7ICAgIC8qIE9wZXJhIDcgKi9cbiAgd29yZC13cmFwOiBicmVhay13b3JkOyAgICAgICAvKiBJbnRlcm5ldCBFeHBsb3JlciA1LjUrICovXG59XG5cbmRpdi5jb2wtNiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jdGFzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5zaG93LXNtYWxsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xuICAuaGlkZGVuLXNtYWxsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnNob3ctc21hbGwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgaW1nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/band/band.component.html":
/*!******************************************!*\
  !*** ./src/app/band/band.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [id]=\"anchor\" class=\"band bg-light shadow\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 col-md-4 show-small\">\n        <img class=\"img-fluid shadow\" [src]=\"img\" [alt]=\"alt\">\n      </div>\n\n      <div [class.order-2]=\"alternate\" class=\"col-lg-6 col-md-8\">\n        <h3 class=\"text-center h2\">\n          {{ heading }}\n        </h3>\n\n        <div class=\"content\">\n          <pre>{{ content }}</pre>\n          <div *ngIf=\"list\">\n            <ul>\n              <li *ngFor=\"let item of listContent\">\n                {{ item }}\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div *ngIf=\"cta_active\" class=\"ctas\">\n          <div>\n            <a *ngFor=\"let cta of ctas\" class=\"btn btn-{{ cta.type }}\"\n            target=\"{{ cta.external ? '_blank' : '_self' }}\"\n            [href]=\"cta.url\"\n            role=\"button\">\n              {{ cta.text }}\n            </a>\n          </div>\n        </div>\n      </div>\n      <div [class.order-1]=\"alternate\" class=\"col-lg-6 col-md-4 hidden-small\">\n        <img class=\"img-fluid shadow\" [src]=\"img\" [alt]=\"alt\">\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/band/band.component.ts":
/*!****************************************!*\
  !*** ./src/app/band/band.component.ts ***!
  \****************************************/
/*! exports provided: BandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandComponent", function() { return BandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BandComponent = /** @class */ (function () {
    function BandComponent() {
    }
    BandComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BandComponent.prototype, "anchor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BandComponent.prototype, "heading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BandComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BandComponent.prototype, "img", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BandComponent.prototype, "alt", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], BandComponent.prototype, "alternate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], BandComponent.prototype, "list", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], BandComponent.prototype, "listContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], BandComponent.prototype, "cta_active", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], BandComponent.prototype, "ctas", void 0);
    BandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-band',
            template: __webpack_require__(/*! ./band.component.html */ "./src/app/band/band.component.html"),
            styles: [__webpack_require__(/*! ./band.component.css */ "./src/app/band/band.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BandComponent);
    return BandComponent;
}());



/***/ }),

/***/ "./src/app/bands-mock.ts":
/*!*******************************!*\
  !*** ./src/app/bands-mock.ts ***!
  \*******************************/
/*! exports provided: BANDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BANDS", function() { return BANDS; });
var BANDS = [
    {
        anchor: "whoami",
        heading: "Who am I",
        content: "Raphael Soares Amadeu, 20, São Paulo - SP, Brazil \n\nI've been a Web Developer for nearly 4 years, being the last 2 years working at IBM Brazil as a Front-End Developer. \n \nI'm a very passionate student that is always looking for something new to learn, focused on Interactive Experiences through Web and Game Development. \n\nGraduated as a Digital Games technologist by FMU, I'm a very Creative person that is Cooperative and good at Team Work. \n\nCurrently, I'm studying System Development and Analysis at FATEC São Paulo.",
        img: "./assets/raphael.png",
        alt: "A picture of me",
        alternate: false,
        list: false,
        listContent: [],
        cta_active: true,
        ctas: [
            {
                text: "Do I have any Experience?",
                url: "#experience",
                type: "primary",
                external: false
            }
        ]
    },
    {
        anchor: "experience",
        heading: "Experience",
        content: "After working on several personal projects, I've been hired to work at IBM in 2017, as a Front-end Developer. \n\nMy work can be seen across many projects, some of them are: \nCloud, Security, Events and Analytics.\n\nOne highlight certainly would be the Web coverage of IBM Cloud Discovery 2018, the biggest IBM event on Brazil to this day.\n\nSkills and Technologies used:",
        img: "./assets/experience.jpeg",
        alt: "A picture of me",
        alternate: true,
        list: true,
        listContent: [
            'HTML 5', 'CSS3', 'JavaScript / ES6', 'Reative Web Frameworks: Angular and Vue', 'Agile Practices: Scrum and Kanban', 'Node.js', 'GitHub Versioning', 'Automated Testing and Web Scrapping using Puppeteer framework'
        ],
        cta_active: true,
        ctas: [
            {
                text: "What can I do?",
                url: "#skills",
                type: "primary",
                external: false
            },
            {
                text: "IBM Cloud Discovery Webpage",
                url: "https://www.ibm.com/events/br/pt/ibmclouddiscovery/",
                type: "secondary",
                external: true
            }
        ]
    },
    {
        anchor: "skills",
        heading: "Skills",
        content: "Some of the skills I've obtained are:",
        img: "./assets/education.png",
        alt: "A picture of me",
        alternate: false,
        list: true,
        listContent: [
            'Web Development: HTML5, CSS3 and JavaScript (ES6)',
            'Angular.js Development (This whole page is built on it)',
            'Vue.js Development',
            'Agile Practices: Scrum and Kanban',
            'RESTful API Consumption',
            'Node.js Development',
            'Mongo DB',
            'Express.js',
            'Automated Web Testing and Scrapping using Puppeteer API',
            'Git Versioning',
            'Mail Marketing Development',
            'Game Development using Unity 3D',
            'Basic Image manipulation using Photoshop',
            'Gamification routines'
        ],
        cta_active: true,
        ctas: [
            {
                text: "Visit my LinkedIn",
                url: "https://www.linkedin.com/in/raphaelsamadeu/",
                type: "primary",
                external: true
            },
            {
                text: "Send me an e-mail",
                url: "mailto:raphael.s.amadeu@gmail.com",
                type: "secondary",
                external: true
            },
        ]
    },
];


/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  margin-top: 10px;\n  height: 50px;\n  color: white;\n  font-family: 'Ubuntu', sans-serif;\n  padding-top: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"bg-dark\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <p>Raphael Amadeu - 2019</p>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/leadspace/leadspace.component.css":
/*!***************************************************!*\
  !*** ./src/app/leadspace/leadspace.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div#leadspace {\n  height: 250px;\n\n  background: url('leadspace.jpg');\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.flex {\n\n}\n\np {\n  color: white;\n  font-style: italic;\n  margin-top: 20px;\n  text-shadow: 0px 2px rgba(0,0,0,.5);\n}\n\nh1 {\n  font-weight: bold;\n  font-family: 'Ubuntu', sans-serif;\n  color: white;\n  text-shadow: 0px 3px rgba(0,0,0,.5);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhZHNwYWNlL2xlYWRzcGFjZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTs7RUFFYixnQ0FBNkM7RUFDN0MsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCOztFQUV0QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTs7QUFFQTs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLG1DQUFtQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL2xlYWRzcGFjZS9sZWFkc3BhY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiNsZWFkc3BhY2Uge1xuICBoZWlnaHQ6IDI1MHB4O1xuXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2xlYWRzcGFjZS5qcGcnKTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZmxleCB7XG5cbn1cblxucCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LXNoYWRvdzogMHB4IDJweCByZ2JhKDAsMCwwLC41KTtcbn1cblxuaDEge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAwcHggM3B4IHJnYmEoMCwwLDAsLjUpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/leadspace/leadspace.component.html":
/*!****************************************************!*\
  !*** ./src/app/leadspace/leadspace.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"leadspace\" class=\"shadow\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <h1 class=\"text-center col\">{{ name }}</h1>\n    </div>\n    <div class=\"row \">\n      <p class=\"text-center col h5\">\n        &ldquo;{{ quote }}&ldquo;\n      </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/leadspace/leadspace.component.ts":
/*!**************************************************!*\
  !*** ./src/app/leadspace/leadspace.component.ts ***!
  \**************************************************/
/*! exports provided: LeadspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadspaceComponent", function() { return LeadspaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LeadspaceComponent = /** @class */ (function () {
    function LeadspaceComponent() {
    }
    LeadspaceComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LeadspaceComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LeadspaceComponent.prototype, "quote", void 0);
    LeadspaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leadspace',
            template: __webpack_require__(/*! ./leadspace.component.html */ "./src/app/leadspace/leadspace.component.html"),
            styles: [__webpack_require__(/*! ./leadspace.component.css */ "./src/app/leadspace/leadspace.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LeadspaceComponent);
    return LeadspaceComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand {\n  font-weight: 600;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1icmFuZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">{{ headingTitle }}</a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav\">\n      <a *ngFor=\"let button of buttons\" class=\"nav-item nav-link\" href=\"#{{ button.anchor }}\">\n        {{ button.heading }}\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bands_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bands-mock */ "./src/app/bands-mock.ts");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.buttons = _bands_mock__WEBPACK_IMPORTED_MODULE_2__["BANDS"];
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NavbarComponent.prototype, "headingTitle", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/raphael.amadeu/curriculum_page_ramadeu/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map