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

module.exports = "<dinc-header></dinc-header>\n<dinc-game-container></dinc-game-container>\n<dinc-debug></dinc-debug>"

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
        this.title = 'app';
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _game_container_game_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game-container/game-container.module */ "./src/app/game-container/game-container.module.ts");
/* harmony import */ var _debug_debug_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./debug/debug.component */ "./src/app/debug/debug.component.ts");
/* harmony import */ var _game_container_game_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./game-container/game.state */ "./src/app/game-container/game.state.ts");
/* harmony import */ var _village_village_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./village/village.state */ "./src/app/village/village.state.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _debug_debug_component__WEBPACK_IMPORTED_MODULE_8__["DebugComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["NgxsModule"].forRoot([_game_container_game_state__WEBPACK_IMPORTED_MODULE_9__["GameState"], _village_village_state__WEBPACK_IMPORTED_MODULE_10__["VillageState"]]),
                _game_container_game_container_module__WEBPACK_IMPORTED_MODULE_7__["GameContainerModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/debug/debug.component.css":
/*!*******************************************!*\
  !*** ./src/app/debug/debug.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".debug-container {\r\n    position: fixed;\r\n    top: 70px;\r\n    right: 10px;\r\n    background-color: rgba(0,0,0,0.3);\r\n}"

/***/ }),

/***/ "./src/app/debug/debug.component.html":
/*!********************************************!*\
  !*** ./src/app/debug/debug.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"debug-container\">\n  <mat-card-title>Debug</mat-card-title>\n  <mat-card-content>Loop id: {{gameLoopId || 0}}</mat-card-content>\n  <mat-card-content>{{villageStateObject | json}}</mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/debug/debug.component.ts":
/*!******************************************!*\
  !*** ./src/app/debug/debug.component.ts ***!
  \******************************************/
/*! exports provided: DebugComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugComponent", function() { return DebugComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _game_container_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game-container/game.service */ "./src/app/game-container/game.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _village_village_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../village/village.state */ "./src/app/village/village.state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DebugComponent = /** @class */ (function () {
    function DebugComponent(gameService) {
        this.gameService = gameService;
    }
    DebugComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameLoopSub = this.gameService.gameLoop.subscribe(this.loop.bind(this));
        this.villageState.subscribe(function (state) { return _this.villageStateObject = state; });
    };
    DebugComponent.prototype.ngOnDestroy = function () {
        this.gameLoopSub.unsubscribe();
    };
    DebugComponent.prototype.loop = function (id) {
        this.gameLoopId = id;
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_village_village_state__WEBPACK_IMPORTED_MODULE_4__["VillageState"]),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], DebugComponent.prototype, "villageState", void 0);
    DebugComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dinc-debug',
            template: __webpack_require__(/*! ./debug.component.html */ "./src/app/debug/debug.component.html"),
            styles: [__webpack_require__(/*! ./debug.component.css */ "./src/app/debug/debug.component.css")]
        }),
        __metadata("design:paramtypes", [_game_container_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]])
    ], DebugComponent);
    return DebugComponent;
}());



/***/ }),

/***/ "./src/app/game-container/actions/reset.action.ts":
/*!********************************************************!*\
  !*** ./src/app/game-container/actions/reset.action.ts ***!
  \********************************************************/
/*! exports provided: ResetAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetAction", function() { return ResetAction; });
var ResetAction = /** @class */ (function () {
    function ResetAction() {
    }
    ResetAction.type = "[Game] reset";
    return ResetAction;
}());



/***/ }),

/***/ "./src/app/game-container/game-container.component.css":
/*!*************************************************************!*\
  !*** ./src/app/game-container/game-container.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".game-container {\r\n    margin: 10px;\r\n    display: flex;\r\n}"

/***/ }),

/***/ "./src/app/game-container/game-container.component.html":
/*!**************************************************************!*\
  !*** ./src/app/game-container/game-container.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"game-container\">\n  <dinc-village></dinc-village>\n</div>\n"

/***/ }),

/***/ "./src/app/game-container/game-container.component.ts":
/*!************************************************************!*\
  !*** ./src/app/game-container/game-container.component.ts ***!
  \************************************************************/
/*! exports provided: GameContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameContainerComponent", function() { return GameContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GameContainerComponent = /** @class */ (function () {
    function GameContainerComponent() {
    }
    GameContainerComponent.prototype.ngOnInit = function () {
    };
    GameContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dinc-game-container',
            template: __webpack_require__(/*! ./game-container.component.html */ "./src/app/game-container/game-container.component.html"),
            styles: [__webpack_require__(/*! ./game-container.component.css */ "./src/app/game-container/game-container.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GameContainerComponent);
    return GameContainerComponent;
}());



/***/ }),

/***/ "./src/app/game-container/game-container.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/game-container/game-container.module.ts ***!
  \*********************************************************/
/*! exports provided: GameContainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameContainerModule", function() { return GameContainerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _game_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-container.component */ "./src/app/game-container/game-container.component.ts");
/* harmony import */ var _village_village_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../village/village.component */ "./src/app/village/village.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GameContainerModule = /** @class */ (function () {
    function GameContainerModule() {
    }
    GameContainerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]],
            declarations: [_game_container_component__WEBPACK_IMPORTED_MODULE_2__["GameContainerComponent"], _village_village_component__WEBPACK_IMPORTED_MODULE_3__["VillageComponent"]],
            exports: [_game_container_component__WEBPACK_IMPORTED_MODULE_2__["GameContainerComponent"]]
        })
    ], GameContainerModule);
    return GameContainerModule;
}());



/***/ }),

/***/ "./src/app/game-container/game.service.ts":
/*!************************************************!*\
  !*** ./src/app/game-container/game.service.ts ***!
  \************************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameService = /** @class */ (function () {
    function GameService() {
        this.gameLoop = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(250);
    }
    Object.defineProperty(GameService.prototype, "gameLoop", {
        get: function () {
            return this._gameLoop;
        },
        set: function (observable) {
            this._gameLoop = observable;
        },
        enumerable: true,
        configurable: true
    });
    GameService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/app/game-container/game.state.ts":
/*!**********************************************!*\
  !*** ./src/app/game-container/game.state.ts ***!
  \**********************************************/
/*! exports provided: GameState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameState", function() { return GameState; });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.service */ "./src/app/game-container/game.service.ts");
/* harmony import */ var _village_village_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../village/village.state */ "./src/app/village/village.state.ts");
/* harmony import */ var _actions_reset_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/reset.action */ "./src/app/game-container/actions/reset.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameState = /** @class */ (function () {
    function GameState(gameService, store) {
        this.gameService = gameService;
        this.store = store;
        this.defaultState = {
            village: { step: 0 }
        };
    }
    GameState.prototype.reset = function (ctx) {
        ctx.setState(this.defaultState);
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_actions_reset_action__WEBPACK_IMPORTED_MODULE_3__["ResetAction"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GameState.prototype, "reset", null);
    GameState = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["State"])({
            name: 'game',
            defaults: {},
            children: [_village_village_state__WEBPACK_IMPORTED_MODULE_2__["VillageState"]]
        }),
        __metadata("design:paramtypes", [_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"], _ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Store"]])
    ], GameState);
    return GameState;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\"><span>{{title}}</span></mat-toolbar>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.title = 'Dunginc';
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dinc-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"]]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/village/actions/roam.action.ts":
/*!************************************************!*\
  !*** ./src/app/village/actions/roam.action.ts ***!
  \************************************************/
/*! exports provided: Roam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roam", function() { return Roam; });
var Roam = /** @class */ (function () {
    function Roam() {
    }
    Roam.type = "[Village] roam";
    return Roam;
}());



/***/ }),

/***/ "./src/app/village/actions/settle.action.ts":
/*!**************************************************!*\
  !*** ./src/app/village/actions/settle.action.ts ***!
  \**************************************************/
/*! exports provided: Settle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settle", function() { return Settle; });
var Settle = /** @class */ (function () {
    function Settle() {
    }
    Settle.type = "[Village] settle";
    return Settle;
}());



/***/ }),

/***/ "./src/app/village/actions/turnBack.actions.ts":
/*!*****************************************************!*\
  !*** ./src/app/village/actions/turnBack.actions.ts ***!
  \*****************************************************/
/*! exports provided: TurnBack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurnBack", function() { return TurnBack; });
var TurnBack = /** @class */ (function () {
    function TurnBack() {
    }
    TurnBack.type = "[Village] turn back";
    return TurnBack;
}());



/***/ }),

/***/ "./src/app/village/village.component.css":
/*!***********************************************!*\
  !*** ./src/app/village/village.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".village-container {\r\n    width: 400px;\r\n}"

/***/ }),

/***/ "./src/app/village/village.component.html":
/*!************************************************!*\
  !*** ./src/app/village/village.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"village-container\">\n  <mat-card-title>{{roamTitle}}</mat-card-title>\n  <mat-card-content>{{roamFlair}}</mat-card-content>\n  <mat-card-actions align=\"end\">\n    <button *ngFor=\"let action of actions\" mat-stroked-button (click)=\"action.action()\">{{action.label}}</button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/village/village.component.ts":
/*!**********************************************!*\
  !*** ./src/app/village/village.component.ts ***!
  \**********************************************/
/*! exports provided: VillageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VillageComponent", function() { return VillageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _village_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./village.service */ "./src/app/village/village.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _village_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./village.state */ "./src/app/village/village.state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VillageComponent = /** @class */ (function () {
    function VillageComponent(villageService) {
        this.villageService = villageService;
    }
    VillageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.villageState$.subscribe(function (state) {
            console.log('village state changed, processing changes');
            _this.actions = _this.villageService.getActions(state.step);
            _this.roamTitle = _this.villageService.getRoamTitle(state.step);
            _this.roamFlair = _this.villageService.getRoamFlair(state.step);
        });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_village_state__WEBPACK_IMPORTED_MODULE_4__["VillageState"]),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], VillageComponent.prototype, "villageState$", void 0);
    VillageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dinc-village',
            template: __webpack_require__(/*! ./village.component.html */ "./src/app/village/village.component.html"),
            styles: [__webpack_require__(/*! ./village.component.css */ "./src/app/village/village.component.css")]
        }),
        __metadata("design:paramtypes", [_village_service__WEBPACK_IMPORTED_MODULE_1__["VillageService"]])
    ], VillageComponent);
    return VillageComponent;
}());



/***/ }),

/***/ "./src/app/village/village.service.ts":
/*!********************************************!*\
  !*** ./src/app/village/village.service.ts ***!
  \********************************************/
/*! exports provided: VillageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VillageService", function() { return VillageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _game_container_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game-container/game.service */ "./src/app/game-container/game.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _actions_roam_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/roam.action */ "./src/app/village/actions/roam.action.ts");
/* harmony import */ var _actions_turnBack_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/turnBack.actions */ "./src/app/village/actions/turnBack.actions.ts");
/* harmony import */ var _actions_settle_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions/settle.action */ "./src/app/village/actions/settle.action.ts");
/* harmony import */ var _game_container_actions_reset_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../game-container/actions/reset.action */ "./src/app/game-container/actions/reset.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VillageService = /** @class */ (function () {
    function VillageService(gameService, store) {
        this.gameService = gameService;
        this.store = store;
        this.actions = [
            [{ label: "Roam", action: this.roam.bind(this) }],
            [{ label: "Roam", action: this.roam.bind(this) }],
            [{ label: "Roam", action: this.roam.bind(this) }, { label: "Settle", action: this.settle.bind(this) }],
            [{ label: "Roam", action: this.roam.bind(this) }, { label: "Settle", action: this.settle.bind(this) }, { label: "Turn back", action: this.turnBack.bind(this) }],
            [{ label: "Roam", action: this.roam.bind(this) }, { label: "Settle", action: this.settle.bind(this) }, { label: "Turn back", action: this.turnBack.bind(this) }],
            [{ label: "Try again", action: this.reset.bind(this) }],
            [{ label: "Fortify" }]
        ];
        this.roamTitle = [
            "Outside the walls",
            "Forest line",
            "Deep into the forest",
            "Even deeper into the forest",
            "Very deep into the forest",
            "Bottom of the cliff",
            "Village"
        ];
        this.roamFlair = [
            "You have been betrayed by your kingdom and you've been exiled from your kingdom. You decide to roam and look for a place to settle.",
            "You reach the edge of a forest. You decide it's best to venture into the forest to find a place to settle.",
            "After a long walk you reach a bare patch in the middle of the forest. This might be a nice place to settle or you could continue looking for a better place.",
            "After yet another long walk you meet a beatiful open field surrounded by the forest. This might be a nice spot to settle or you could continue looking for a better place.",
            "The journey is taking a toll on you, will you settle here?",
            "After a long journey you lose all focus and don't notice you reached the edge of a cliff. You fall and die.",
            "You start settling..."
        ];
        gameService.gameLoop.subscribe(this.loop.bind(this));
    }
    VillageService.prototype.loop = function (id) {
    };
    VillageService.prototype.roam = function () {
        this.store.dispatch(new _actions_roam_action__WEBPACK_IMPORTED_MODULE_3__["Roam"]());
    };
    VillageService.prototype.settle = function () {
        this.store.dispatch(new _actions_settle_action__WEBPACK_IMPORTED_MODULE_5__["Settle"]());
    };
    VillageService.prototype.turnBack = function () {
        this.store.dispatch(new _actions_turnBack_actions__WEBPACK_IMPORTED_MODULE_4__["TurnBack"]());
    };
    VillageService.prototype.reset = function () {
        this.store.dispatch(new _game_container_actions_reset_action__WEBPACK_IMPORTED_MODULE_6__["ResetAction"]());
    };
    VillageService.prototype.getRoamFlair = function (index) {
        if (index < this.roamFlair.length) {
            return this.roamFlair[index];
        }
        else {
            return "Nothing to declare";
        }
    };
    VillageService.prototype.getRoamTitle = function (index) {
        if (index < this.roamTitle.length) {
            return this.roamTitle[index];
        }
        else {
            return "Nothing to declare";
        }
    };
    VillageService.prototype.getActions = function (index) {
        if (index < this.actions.length) {
            return this.actions[index];
        }
        else {
            return {};
        }
    };
    /**
     *
     * @param action an action that will get added to the final entry in the actions array
     */
    VillageService.prototype.addAction = function (action) {
        this.actions[this.actions.length - 1].push(action);
    };
    VillageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_game_container_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"], _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], VillageService);
    return VillageService;
}());



/***/ }),

/***/ "./src/app/village/village.state.ts":
/*!******************************************!*\
  !*** ./src/app/village/village.state.ts ***!
  \******************************************/
/*! exports provided: VillageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VillageState", function() { return VillageState; });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _actions_roam_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions/roam.action */ "./src/app/village/actions/roam.action.ts");
/* harmony import */ var _actions_settle_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/settle.action */ "./src/app/village/actions/settle.action.ts");
/* harmony import */ var _actions_turnBack_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/turnBack.actions */ "./src/app/village/actions/turnBack.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VillageState = /** @class */ (function () {
    function VillageState() {
    }
    VillageState.prototype.roam = function (_a) {
        var patchState = _a.patchState, getState = _a.getState;
        var currentStep = getState().step;
        patchState({ step: currentStep + 1 });
    };
    VillageState.prototype.turnBack = function (_a) {
        var patchState = _a.patchState, getState = _a.getState;
        var currentStep = getState().step;
        patchState({ step: currentStep - 1 });
    };
    VillageState.prototype.settle = function (_a) {
        var patchState = _a.patchState, getState = _a.getState;
        patchState({ settled: true });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_actions_roam_action__WEBPACK_IMPORTED_MODULE_1__["Roam"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], VillageState.prototype, "roam", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_actions_turnBack_actions__WEBPACK_IMPORTED_MODULE_3__["TurnBack"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], VillageState.prototype, "turnBack", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_actions_settle_action__WEBPACK_IMPORTED_MODULE_2__["Settle"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], VillageState.prototype, "settle", null);
    VillageState = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["State"])({
            name: 'village',
            defaults: {
                step: 0,
                settled: false
            }
        }),
        __metadata("design:paramtypes", [])
    ], VillageState);
    return VillageState;
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
    production: false
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

module.exports = __webpack_require__(/*! D:\git\dunginc.github.io\dunginc\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map