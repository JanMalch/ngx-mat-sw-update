(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ngx-mat-sw-update/fesm5/ngx-mat-sw-update.js":
/*!***********************************************************!*\
  !*** ./dist/ngx-mat-sw-update/fesm5/ngx-mat-sw-update.js ***!
  \***********************************************************/
/*! exports provided: NgxMatSwUpdateService, NgxMatSwUpdateModule, MsuPaddedImageDialogComponent, MsuImageDialogComponent, MsuBasicDialogComponent, DialogMatSwUpdate, EnDialogMatSwUpdate, SnackBarMatSwUpdate, EnSnackBarMatSwUpdate, MsuSnackBarModule, MsuDialogModule, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatSwUpdateService", function() { return NgxMatSwUpdateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatSwUpdateModule", function() { return NgxMatSwUpdateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsuPaddedImageDialogComponent", function() { return MsuPaddedImageDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsuImageDialogComponent", function() { return MsuImageDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsuBasicDialogComponent", function() { return MsuBasicDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogMatSwUpdate", function() { return DialogMatSwUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnDialogMatSwUpdate", function() { return EnDialogMatSwUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarMatSwUpdate", function() { return SnackBarMatSwUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnSnackBarMatSwUpdate", function() { return EnSnackBarMatSwUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsuSnackBarModule", function() { return MsuSnackBarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsuDialogModule", function() { return MsuDialogModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return MSU_DIALOG_COMPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return MSU_DIALOG_IMAGE; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var NgxMatSwUpdateService = /** @class */ (function () {
    function NgxMatSwUpdateService(updates) {
        this.updates = updates;
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * @return {?}
     */
    NgxMatSwUpdateService.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.updates.available.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.onDestroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return _this.doShow(event); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (event) { return _this.showNotification(event); })).subscribe(function (result) { return _this.onAction(result); });
    };
    /**
     * @return {?}
     */
    NgxMatSwUpdateService.prototype.activateUpdate = /**
     * @return {?}
     */
    function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.updates.activateUpdate());
    };
    /**
     * @param {?=} force
     * @return {?}
     */
    NgxMatSwUpdateService.prototype.reloadPage = /**
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        document.location.reload(force);
    };
    /**
     * @return {?}
     */
    NgxMatSwUpdateService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy$.next();
    };
    NgxMatSwUpdateService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxMatSwUpdateService.ctorParameters = function () { return [
        { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"] }
    ]; };
    /** @nocollapse */ NgxMatSwUpdateService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function NgxMatSwUpdateService_Factory() { return new NgxMatSwUpdateService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"])); }, token: NgxMatSwUpdateService, providedIn: "root" });
    return NgxMatSwUpdateService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxMatSwUpdateModule = /** @class */ (function () {
    function NgxMatSwUpdateModule() {
    }
    NgxMatSwUpdateModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"]
                    ] /*,
                      declarations: [MsuBasicDialogComponent, MsuImageDialogComponent, MsuPaddedImageDialogComponent],
                      exports: [MsuBasicDialogComponent, MsuImageDialogComponent, MsuPaddedImageDialogComponent],
                      entryComponents: [MsuBasicDialogComponent, MsuImageDialogComponent, MsuPaddedImageDialogComponent]*/
                },] }
    ];
    return NgxMatSwUpdateModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @param {?} data
 * @return {?}
 */
function assertHasImageProperty(data) {
    if (!('image' in data)) {
        throw new Error('No \'image\' property found in DialogInput.');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MsuPaddedImageDialogComponent = /** @class */ (function () {
    function MsuPaddedImageDialogComponent(data) {
        this.data = data;
        assertHasImageProperty(this.data);
    }
    MsuPaddedImageDialogComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'msu-padded-image-dialog',
                    template: "<img mat-card-image [src]=\"data.image\">\n<mat-card-title>{{ data.title }}</mat-card-title>\n<mat-card-content>\n  <p>{{ data.description }}</p>\n</mat-card-content>\n<mat-card-actions>\n  <button mat-button [mat-dialog-close]=\"false\">{{ data.cancelBtn }}</button>\n  <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"true\" cdkFocusInitial>{{ data.reloadBtn }}</button>\n</mat-card-actions>\n",
                    styles: ["img{width:100%;margin:0 0 24px;-o-object-fit:cover;object-fit:cover}.mat-card-actions,.mat-card-content,.mat-card-title{display:block;text-align:center}.mat-card-content{margin:16px 0 24px}p{white-space:pre-wrap}.mat-card-actions>button:first-child{margin-right:8px}"]
                }] }
    ];
    /** @nocollapse */
    MsuPaddedImageDialogComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
    ]; };
    return MsuPaddedImageDialogComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MsuImageDialogComponent = /** @class */ (function () {
    function MsuImageDialogComponent(data) {
        this.data = data;
        assertHasImageProperty(this.data);
    }
    MsuImageDialogComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'msu-image-dialog',
                    template: "<img mat-card-image [src]=\"data.image\">\n<mat-card-title>{{ data.title }}</mat-card-title>\n<mat-card-content>\n  <p>{{ data.description }}</p>\n</mat-card-content>\n<mat-card-actions>\n  <button mat-button [mat-dialog-close]=\"false\">{{ data.cancelBtn }}</button>\n  <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"true\" cdkFocusInitial>{{ data.reloadBtn }}</button>\n</mat-card-actions>\n",
                    styles: ["img{width:calc(100% + 48px);margin:-24px -24px 24px;-o-object-fit:cover;object-fit:cover}.mat-card-actions,.mat-card-content,.mat-card-title{display:block;text-align:center}.mat-card-content{margin:16px 0 24px}p{white-space:pre-wrap}.mat-card-actions>button:first-child{margin-right:8px}"]
                }] }
    ];
    /** @nocollapse */
    MsuImageDialogComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
    ]; };
    return MsuImageDialogComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MsuBasicDialogComponent = /** @class */ (function () {
    function MsuBasicDialogComponent(data) {
        this.data = data;
    }
    MsuBasicDialogComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'msu-basic-dialog',
                    template: "<h1 mat-dialog-title>{{ data.title }}</h1>\n<mat-dialog-content>\n  <p>{{ data.description }}</p>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button [mat-dialog-close]=\"false\">{{ data.cancelBtn }}</button>\n  <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"true\" cdkFocusInitial>{{ data.reloadBtn }}</button>\n</mat-dialog-actions>\n"
                }] }
    ];
    /** @nocollapse */
    MsuBasicDialogComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
    ]; };
    return MsuBasicDialogComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var DialogMatSwUpdate = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(DialogMatSwUpdate, _super);
    function DialogMatSwUpdate(updates, dialog, locale) {
        var _this = _super.call(this, updates) || this;
        _this.dialog = dialog;
        _this.locale = locale;
        return _this;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    DialogMatSwUpdate.prototype.showNotification = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var ref = this.dialog.open(this.usedComponent, {
            data: this.getDialogInput(this.locale)
        });
        return ref.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(Boolean));
    };
    /**
     * @param {?} response
     * @return {?}
     */
    DialogMatSwUpdate.prototype.onAction = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var _this = this;
        if (response) {
            this.activateUpdate().subscribe(function () { return _this.reloadPage(); });
        }
    };
    DialogMatSwUpdate.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DialogMatSwUpdate.ctorParameters = function () { return [
        { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] }] }
    ]; };
    /** @nocollapse */ DialogMatSwUpdate.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function DialogMatSwUpdate_Factory() { return new DialogMatSwUpdate(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])); }, token: DialogMatSwUpdate, providedIn: "root" });
    return DialogMatSwUpdate;
}(NgxMatSwUpdateService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var english = {
    title: 'Update available',
    cancelBtn: 'Cancel',
    reloadBtn: 'Reload',
    description: 'There\'s a new update available, which brings new features and bug fixes!\n'
        + 'Simply refresh the page to get the latest version.'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var MSU_DIALOG_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("MSU_DIALOG_COMPONENT");
/** @type {?} */
var MSU_DIALOG_IMAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("MSU_DIALOG_IMAGE");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var EnDialogMatSwUpdate = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(EnDialogMatSwUpdate, _super);
    function EnDialogMatSwUpdate(updates, dialog, locale, _component, image) {
        var _this = _super.call(this, updates, dialog, locale) || this;
        _this.image = image;
        _this.usedComponent = _component || MsuBasicDialogComponent;
        return _this;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    EnDialogMatSwUpdate.prototype.doShow = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        // return data.available.appData.crucial;
        return true;
    };
    /**
     * @param {?} locale
     * @return {?}
     */
    EnDialogMatSwUpdate.prototype.getDialogInput = /**
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__assign"])({}, english, { image: this.image });
    };
    EnDialogMatSwUpdate.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EnDialogMatSwUpdate.ctorParameters = function () { return [
        { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Type"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MSU_DIALOG_COMPONENT,] }] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MSU_DIALOG_IMAGE,] }] }
    ]; };
    /** @nocollapse */ EnDialogMatSwUpdate.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function EnDialogMatSwUpdate_Factory() { return new EnDialogMatSwUpdate(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(MSU_DIALOG_COMPONENT, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(MSU_DIALOG_IMAGE, 8)); }, token: EnDialogMatSwUpdate, providedIn: "root" });
    return EnDialogMatSwUpdate;
}(DialogMatSwUpdate));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var SnackBarMatSwUpdate = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(SnackBarMatSwUpdate, _super);
    function SnackBarMatSwUpdate(updates, snackBar, locale) {
        var _this = _super.call(this, updates) || this;
        _this.snackBar = snackBar;
        _this.locale = locale;
        return _this;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    SnackBarMatSwUpdate.prototype.showNotification = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _a = this.getTranslation(this.locale), description = _a.description, reloadBtn = _a.reloadBtn;
        /** @type {?} */
        var ref = this.snackBar.open(description, reloadBtn);
        return ref.afterDismissed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (dismiss) { return dismiss.dismissedByAction; }));
    };
    /**
     * @param {?} response
     * @return {?}
     */
    SnackBarMatSwUpdate.prototype.onAction = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var _this = this;
        if (response) {
            this.activateUpdate().subscribe(function () { return _this.reloadPage(); });
        }
    };
    SnackBarMatSwUpdate.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SnackBarMatSwUpdate.ctorParameters = function () { return [
        { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] }] }
    ]; };
    /** @nocollapse */ SnackBarMatSwUpdate.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function SnackBarMatSwUpdate_Factory() { return new SnackBarMatSwUpdate(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])); }, token: SnackBarMatSwUpdate, providedIn: "root" });
    return SnackBarMatSwUpdate;
}(NgxMatSwUpdateService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var EnSnackBarMatSwUpdate = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(EnSnackBarMatSwUpdate, _super);
    function EnSnackBarMatSwUpdate(updates, snackBar, locale) {
        return _super.call(this, updates, snackBar, locale) || this;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    EnSnackBarMatSwUpdate.prototype.doShow = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        // return data.available.appData.crucial;
        return true;
    };
    /**
     * @param {?} locale
     * @return {?}
     */
    EnSnackBarMatSwUpdate.prototype.getTranslation = /**
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        return { description: english.description, reloadBtn: 'RELOAD' };
    };
    EnSnackBarMatSwUpdate.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EnSnackBarMatSwUpdate.ctorParameters = function () { return [
        { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] }] }
    ]; };
    /** @nocollapse */ EnSnackBarMatSwUpdate.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function EnSnackBarMatSwUpdate_Factory() { return new EnSnackBarMatSwUpdate(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])); }, token: EnSnackBarMatSwUpdate, providedIn: "root" });
    return EnSnackBarMatSwUpdate;
}(SnackBarMatSwUpdate));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MsuSnackBarModule = /** @class */ (function () {
    function MsuSnackBarModule() {
    }
    /**
     * @return {?}
     */
    MsuSnackBarModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: MsuSnackBarModule,
            providers: [
                {
                    provide: NgxMatSwUpdateService,
                    useClass: EnSnackBarMatSwUpdate
                }
            ]
        };
    };
    MsuSnackBarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"]
                    ]
                },] }
    ];
    return MsuSnackBarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MsuDialogModule = /** @class */ (function () {
    function MsuDialogModule() {
    }
    /**
     * @param {?=} useComponent
     * @param {?=} imageUrl
     * @return {?}
     */
    MsuDialogModule.forRoot = /**
     * @param {?=} useComponent
     * @param {?=} imageUrl
     * @return {?}
     */
    function (useComponent, imageUrl) {
        if (useComponent === void 0) { useComponent = MsuBasicDialogComponent; }
        return {
            ngModule: MsuDialogModule,
            providers: [
                {
                    provide: NgxMatSwUpdateService,
                    useClass: EnDialogMatSwUpdate
                },
                {
                    provide: MSU_DIALOG_COMPONENT,
                    useValue: useComponent
                },
                {
                    provide: MSU_DIALOG_IMAGE,
                    useValue: imageUrl
                }
            ]
        };
    };
    MsuDialogModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"]
                    ],
                    declarations: [MsuBasicDialogComponent, MsuImageDialogComponent, MsuPaddedImageDialogComponent],
                    entryComponents: [MsuBasicDialogComponent, MsuImageDialogComponent, MsuPaddedImageDialogComponent],
                    exports: [MsuBasicDialogComponent, MsuImageDialogComponent, MsuPaddedImageDialogComponent]
                },] }
    ];
    return MsuDialogModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdC1zdy11cGRhdGUuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1tYXQtc3ctdXBkYXRlL2xpYi9uZ3gtbWF0LXN3LXVwZGF0ZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtbWF0LXN3LXVwZGF0ZS9saWIvbmd4LW1hdC1zdy11cGRhdGUubW9kdWxlLnRzIiwibmc6Ly9uZ3gtbWF0LXN3LXVwZGF0ZS9saWIvZXJyb3JzLnRzIiwibmc6Ly9uZ3gtbWF0LXN3LXVwZGF0ZS9saWIvY29tcG9uZW50cy9tc3UtcGFkZGVkLWltYWdlLWRpYWxvZy9tc3UtcGFkZGVkLWltYWdlLWRpYWxvZy5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXQtc3ctdXBkYXRlL2xpYi9jb21wb25lbnRzL21zdS1pbWFnZS1kaWFsb2cvbXN1LWltYWdlLWRpYWxvZy5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXQtc3ctdXBkYXRlL2xpYi9jb21wb25lbnRzL21zdS1iYXNpYy1kaWFsb2cvbXN1LWJhc2ljLWRpYWxvZy5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXQtc3ctdXBkYXRlL2xpYi9pbXBsZW1lbnRhdGlvbnMvZGlhbG9nLnNlcnZpY2UudHMiLCJuZzovL25neC1tYXQtc3ctdXBkYXRlL2xpYi90cmFuc2xhdGlvbnMvZW4udHMiLCJuZzovL25neC1tYXQtc3ctdXBkYXRlL2xpYi90b2tlbnMudHMiLCJuZzovL25neC1tYXQtc3ctdXBkYXRlL2xpYi9pbXBsZW1lbnRhdGlvbnMvZGlhbG9nLmVuLnNlcnZpY2UudHMiLCJuZzovL25neC1tYXQtc3ctdXBkYXRlL2xpYi9pbXBsZW1lbnRhdGlvbnMvc25hY2tiYXIuc2VydmljZS50cyIsIm5nOi8vbmd4LW1hdC1zdy11cGRhdGUvbGliL2ltcGxlbWVudGF0aW9ucy9zbmFja2Jhci5lbi5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtbWF0LXN3LXVwZGF0ZS9saWIvbXN1LXNuYWNrYmFyLm1vZHVsZS50cyIsIm5nOi8vbmd4LW1hdC1zdy11cGRhdGUvbGliL21zdS1kaWFsb2cubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTd1VwZGF0ZX0gZnJvbSAnQGFuZ3VsYXIvc2VydmljZS13b3JrZXInO1xuaW1wb3J0IHtVcGRhdGVBdmFpbGFibGVFdmVudH0gZnJvbSAnQGFuZ3VsYXIvc2VydmljZS13b3JrZXIvc3JjL2xvd19sZXZlbCc7XG5pbXBvcnQge2Zyb20sIE9ic2VydmFibGUsIFN1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtmaWx0ZXIsIG1lcmdlTWFwLCB0YWtlVW50aWx9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7RGlhbG9nSW5wdXR9IGZyb20gJy4vbW9kZWxzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmd4TWF0U3dVcGRhdGVTZXJ2aWNlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByb3RlY3RlZCByZWFkb25seSBvbkRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJvdGVjdGVkIHVwZGF0ZXM6IFN3VXBkYXRlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnVwZGF0ZXMuYXZhaWxhYmxlLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5vbkRlc3Ryb3kkKSxcbiAgICAgIGZpbHRlcihldmVudCA9PiB0aGlzLmRvU2hvdyhldmVudCkpLFxuICAgICAgbWVyZ2VNYXAoZXZlbnQgPT4gdGhpcy5zaG93Tm90aWZpY2F0aW9uKGV2ZW50KSlcbiAgICApLnN1YnNjcmliZShyZXN1bHQgPT4gdGhpcy5vbkFjdGlvbihyZXN1bHQpKTtcbiAgfVxuXG4gIGFic3RyYWN0IGRvU2hvdyhkYXRhOiBVcGRhdGVBdmFpbGFibGVFdmVudCk6IGJvb2xlYW47XG5cbiAgYWJzdHJhY3Qgc2hvd05vdGlmaWNhdGlvbihkYXRhOiBVcGRhdGVBdmFpbGFibGVFdmVudCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgYWJzdHJhY3Qgb25BY3Rpb24ocmVzcG9uc2U6IGJvb2xlYW4pOiB2b2lkO1xuXG4gIHByb3RlY3RlZCBhY3RpdmF0ZVVwZGF0ZSgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gZnJvbSh0aGlzLnVwZGF0ZXMuYWN0aXZhdGVVcGRhdGUoKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVsb2FkUGFnZShmb3JjZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoZm9yY2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3kkLm5leHQoKTtcbiAgfVxuXG59XG5cbiIsImltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIFR5cGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHtNc3VCYXNpY0RpYWxvZ0NvbXBvbmVudCwgTXN1SW1hZ2VEaWFsb2dDb21wb25lbnQsIE1zdVBhZGRlZEltYWdlRGlhbG9nQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGUsIE1hdENhcmRNb2R1bGUsIE1hdERpYWxvZ01vZHVsZSwgTWF0U25hY2tCYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7Tmd4TWF0U3dVcGRhdGVTZXJ2aWNlfSBmcm9tICcuL25neC1tYXQtc3ctdXBkYXRlLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlXG4gIF0vKixcbiAgZGVjbGFyYXRpb25zOiBbTXN1QmFzaWNEaWFsb2dDb21wb25lbnQsIE1zdUltYWdlRGlhbG9nQ29tcG9uZW50LCBNc3VQYWRkZWRJbWFnZURpYWxvZ0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtNc3VCYXNpY0RpYWxvZ0NvbXBvbmVudCwgTXN1SW1hZ2VEaWFsb2dDb21wb25lbnQsIE1zdVBhZGRlZEltYWdlRGlhbG9nQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbTXN1QmFzaWNEaWFsb2dDb21wb25lbnQsIE1zdUltYWdlRGlhbG9nQ29tcG9uZW50LCBNc3VQYWRkZWRJbWFnZURpYWxvZ0NvbXBvbmVudF0qL1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYXRTd1VwZGF0ZU1vZHVsZSB7XG5cbiAgLypjb25zdHJ1Y3Rvcihwcml2YXRlIG1hdFVwZGF0ZXM6IE5neE1hdFN3VXBkYXRlU2VydmljZSkge1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLm1hdFVwZGF0ZXM6JywgdGhpcy5tYXRVcGRhdGVzKTtcbiAgICB0aGlzLm1hdFVwZGF0ZXMubmdPbkluaXQoKTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JSb290KHVzZUltcGxlbWVudGF0aW9uOiBUeXBlPE5neE1hdFN3VXBkYXRlU2VydmljZT4pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neE1hdFN3VXBkYXRlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbe1xuICAgICAgICBwcm92aWRlOiBOZ3hNYXRTd1VwZGF0ZVNlcnZpY2UsXG4gICAgICAgIHVzZVZhbHVlOiB1c2VJbXBsZW1lbnRhdGlvblxuICAgICAgfV1cbiAgICB9O1xuICB9Ki9cbn1cbiIsImltcG9ydCB7RGlhbG9nSW5wdXR9IGZyb20gJy4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRIYXNJbWFnZVByb3BlcnR5KGRhdGE6IERpYWxvZ0lucHV0KTogdm9pZCB7XHJcbiAgaWYgKCEoJ2ltYWdlJyBpbiBkYXRhKSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBcXCdpbWFnZVxcJyBwcm9wZXJ0eSBmb3VuZCBpbiBEaWFsb2dJbnB1dC4nKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlhbG9nSW5wdXR9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcbmltcG9ydCB7TUFUX0RJQUxPR19EQVRBfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcbmltcG9ydCB7YXNzZXJ0SGFzSW1hZ2VQcm9wZXJ0eX0gZnJvbSBcIi4uLy4uL2Vycm9yc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtc3UtcGFkZGVkLWltYWdlLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9tc3UtcGFkZGVkLWltYWdlLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21zdS1wYWRkZWQtaW1hZ2UtZGlhbG9nLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNc3VQYWRkZWRJbWFnZURpYWxvZ0NvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dJbnB1dCkge1xuICAgIGFzc2VydEhhc0ltYWdlUHJvcGVydHkodGhpcy5kYXRhKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNQVRfRElBTE9HX0RBVEF9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xuaW1wb3J0IHthc3NlcnRIYXNJbWFnZVByb3BlcnR5fSBmcm9tIFwiLi4vLi4vZXJyb3JzXCI7XG5pbXBvcnQge0RpYWxvZ0lucHV0fSBmcm9tICcuLi8uLi9tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtc3UtaW1hZ2UtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21zdS1pbWFnZS1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tc3UtaW1hZ2UtZGlhbG9nLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNc3VJbWFnZURpYWxvZ0NvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dJbnB1dCkge1xuICAgIGFzc2VydEhhc0ltYWdlUHJvcGVydHkodGhpcy5kYXRhKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TUFUX0RJQUxPR19EQVRBfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcbmltcG9ydCB7RGlhbG9nSW5wdXR9IGZyb20gJy4uLy4uL21vZGVscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21zdS1iYXNpYy1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vbXN1LWJhc2ljLWRpYWxvZy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTXN1QmFzaWNEaWFsb2dDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nSW5wdXQpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZSwgTE9DQUxFX0lELCBUeXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNQVRfRElBTE9HX0RFRkFVTFRfT1BUSU9OUywgTWF0RGlhbG9nLCBNYXREaWFsb2dDb25maWd9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHtTd1VwZGF0ZX0gZnJvbSAnQGFuZ3VsYXIvc2VydmljZS13b3JrZXInO1xyXG5pbXBvcnQge1VwZGF0ZUF2YWlsYWJsZUV2ZW50fSBmcm9tICdAYW5ndWxhci9zZXJ2aWNlLXdvcmtlci9zcmMvbG93X2xldmVsJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHtOZ3hNYXRTd1VwZGF0ZVNlcnZpY2V9IGZyb20gJy4uL25neC1tYXQtc3ctdXBkYXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQge0RpYWxvZ0lucHV0fSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGlhbG9nTWF0U3dVcGRhdGUgZXh0ZW5kcyBOZ3hNYXRTd1VwZGF0ZVNlcnZpY2Uge1xyXG5cclxuICBwcm90ZWN0ZWQgY29uc3RydWN0b3IodXBkYXRlczogU3dVcGRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3RlY3RlZCBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgQEluamVjdChMT0NBTEVfSUQpIHByb3RlY3RlZCBsb2NhbGU6IHN0cmluZykge1xyXG4gICAgc3VwZXIodXBkYXRlcyk7XHJcbiAgfVxyXG5cclxuICBhYnN0cmFjdCBnZXREaWFsb2dJbnB1dChsb2NhbGU6IHN0cmluZyk6IERpYWxvZ0lucHV0O1xyXG5cclxuICBhYnN0cmFjdCBnZXQgdXNlZENvbXBvbmVudCgpOiBUeXBlPGFueT47XHJcblxyXG4gIHNob3dOb3RpZmljYXRpb24oZGF0YTogVXBkYXRlQXZhaWxhYmxlRXZlbnQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IHJlZiA9IHRoaXMuZGlhbG9nLm9wZW4odGhpcy51c2VkQ29tcG9uZW50LCB7XHJcbiAgICAgIGRhdGE6IHRoaXMuZ2V0RGlhbG9nSW5wdXQodGhpcy5sb2NhbGUpXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVmLmFmdGVyQ2xvc2VkKCkucGlwZShcclxuICAgICAgbWFwKEJvb2xlYW4pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgb25BY3Rpb24ocmVzcG9uc2U6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICB0aGlzLmFjdGl2YXRlVXBkYXRlKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVsb2FkUGFnZSgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7RGlhbG9nSW5wdXR9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgY29uc3QgZW5nbGlzaDogRGlhbG9nSW5wdXQgPSB7XHJcbiAgdGl0bGU6ICdVcGRhdGUgYXZhaWxhYmxlJyxcclxuICBjYW5jZWxCdG46ICdDYW5jZWwnLFxyXG4gIHJlbG9hZEJ0bjogJ1JlbG9hZCcsXHJcbiAgZGVzY3JpcHRpb246ICdUaGVyZVxcJ3MgYSBuZXcgdXBkYXRlIGF2YWlsYWJsZSwgd2hpY2ggYnJpbmdzIG5ldyBmZWF0dXJlcyBhbmQgYnVnIGZpeGVzIVxcbidcclxuICAgICsgJ1NpbXBseSByZWZyZXNoIHRoZSBwYWdlIHRvIGdldCB0aGUgbGF0ZXN0IHZlcnNpb24uJ1xyXG59O1xyXG4iLCJpbXBvcnQge0luamVjdGlvblRva2VuLCBUeXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBjb25zdCBNU1VfRElBTE9HX0NPTVBPTkVOVCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxUeXBlPGFueT4+KFwiTVNVX0RJQUxPR19DT01QT05FTlRcIik7XHJcbmV4cG9ydCBjb25zdCBNU1VfRElBTE9HX0lNQUdFID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oXCJNU1VfRElBTE9HX0lNQUdFXCIpO1xyXG4iLCJpbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZSwgTE9DQUxFX0lELCBPcHRpb25hbCwgVHlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TWF0RGlhbG9nfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7U3dVcGRhdGV9IGZyb20gJ0Bhbmd1bGFyL3NlcnZpY2Utd29ya2VyJztcclxuaW1wb3J0IHtVcGRhdGVBdmFpbGFibGVFdmVudH0gZnJvbSAnQGFuZ3VsYXIvc2VydmljZS13b3JrZXIvc3JjL2xvd19sZXZlbCc7XHJcbmltcG9ydCB7RGlhbG9nTWF0U3dVcGRhdGV9IGZyb20gJy4vZGlhbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQge0RpYWxvZ0lucHV0fSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQge2VuZ2xpc2h9IGZyb20gJy4uL3RyYW5zbGF0aW9ucy9lbic7XHJcbmltcG9ydCB7TVNVX0RJQUxPR19DT01QT05FTlQsIE1TVV9ESUFMT0dfSU1BR0V9IGZyb20gJy4uL3Rva2Vucyc7XHJcbmltcG9ydCB7TXN1QmFzaWNEaWFsb2dDb21wb25lbnR9IGZyb20gJy4uL2NvbXBvbmVudHMvbXN1LWJhc2ljLWRpYWxvZy9tc3UtYmFzaWMtZGlhbG9nLmNvbXBvbmVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbkRpYWxvZ01hdFN3VXBkYXRlIGV4dGVuZHMgRGlhbG9nTWF0U3dVcGRhdGUge1xyXG5cclxuICByZWFkb25seSB1c2VkQ29tcG9uZW50OiBUeXBlPGFueT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHVwZGF0ZXM6IFN3VXBkYXRlLFxyXG4gICAgICAgICAgICAgIGRpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgICAgICAgICAgIEBJbmplY3QoTE9DQUxFX0lEKSBsb2NhbGU6IHN0cmluZyxcclxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE1TVV9ESUFMT0dfQ09NUE9ORU5UKSBfY29tcG9uZW50OiBUeXBlPGFueT4sXHJcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChNU1VfRElBTE9HX0lNQUdFKSBwcm90ZWN0ZWQgaW1hZ2U6IHN0cmluZykge1xyXG4gICAgc3VwZXIodXBkYXRlcywgZGlhbG9nLCBsb2NhbGUpO1xyXG4gICAgdGhpcy51c2VkQ29tcG9uZW50ID0gX2NvbXBvbmVudCB8fCBNc3VCYXNpY0RpYWxvZ0NvbXBvbmVudDtcclxuICB9XHJcblxyXG4gIGRvU2hvdyhkYXRhOiBVcGRhdGVBdmFpbGFibGVFdmVudCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gcmV0dXJuIGRhdGEuYXZhaWxhYmxlLmFwcERhdGEuY3J1Y2lhbDtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGlhbG9nSW5wdXQobG9jYWxlOiBzdHJpbmcpOiBEaWFsb2dJbnB1dCB7XHJcbiAgICByZXR1cm4gey4uLmVuZ2xpc2gsIGltYWdlOiB0aGlzLmltYWdlIH07XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZSwgTE9DQUxFX0lEfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNQVRfU05BQ0tfQkFSX0RFRkFVTFRfT1BUSU9OUywgTWF0U25hY2tCYXIsIE1hdFNuYWNrQmFyQ29uZmlnfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7U3dVcGRhdGV9IGZyb20gJ0Bhbmd1bGFyL3NlcnZpY2Utd29ya2VyJztcclxuaW1wb3J0IHtVcGRhdGVBdmFpbGFibGVFdmVudH0gZnJvbSAnQGFuZ3VsYXIvc2VydmljZS13b3JrZXIvc3JjL2xvd19sZXZlbCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7Tmd4TWF0U3dVcGRhdGVTZXJ2aWNlfSBmcm9tICcuLi9uZ3gtbWF0LXN3LXVwZGF0ZS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNuYWNrQmFyTWF0U3dVcGRhdGUgZXh0ZW5kcyBOZ3hNYXRTd1VwZGF0ZVNlcnZpY2Uge1xyXG5cclxuICBwcm90ZWN0ZWQgY29uc3RydWN0b3IodXBkYXRlczogU3dVcGRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3RlY3RlZCBzbmFja0JhcjogTWF0U25hY2tCYXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBJbmplY3QoTE9DQUxFX0lEKSBwcm90ZWN0ZWQgbG9jYWxlOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKHVwZGF0ZXMpO1xyXG4gIH1cclxuXHJcbiAgYWJzdHJhY3QgZ2V0VHJhbnNsYXRpb24obG9jYWxlOiBzdHJpbmcpOiB7IGRlc2NyaXB0aW9uOiBzdHJpbmcsIHJlbG9hZEJ0bjogc3RyaW5nIH07XHJcblxyXG4gIHNob3dOb3RpZmljYXRpb24oZGF0YTogVXBkYXRlQXZhaWxhYmxlRXZlbnQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IHtkZXNjcmlwdGlvbiwgcmVsb2FkQnRufSA9IHRoaXMuZ2V0VHJhbnNsYXRpb24odGhpcy5sb2NhbGUpO1xyXG4gICAgY29uc3QgcmVmID0gdGhpcy5zbmFja0Jhci5vcGVuKGRlc2NyaXB0aW9uLCByZWxvYWRCdG4pO1xyXG5cclxuICAgIHJldHVybiByZWYuYWZ0ZXJEaXNtaXNzZWQoKS5waXBlKFxyXG4gICAgICBtYXAoZGlzbWlzcyA9PiBkaXNtaXNzLmRpc21pc3NlZEJ5QWN0aW9uKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG9uQWN0aW9uKHJlc3BvbnNlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZVVwZGF0ZSgpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlbG9hZFBhZ2UoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZSwgTE9DQUxFX0lEfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNYXRTbmFja0Jhcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQge1N3VXBkYXRlfSBmcm9tICdAYW5ndWxhci9zZXJ2aWNlLXdvcmtlcic7XHJcbmltcG9ydCB7VXBkYXRlQXZhaWxhYmxlRXZlbnR9IGZyb20gJ0Bhbmd1bGFyL3NlcnZpY2Utd29ya2VyL3NyYy9sb3dfbGV2ZWwnO1xyXG5pbXBvcnQge2VuZ2xpc2h9IGZyb20gJy4uL3RyYW5zbGF0aW9ucy9lbic7XHJcbmltcG9ydCB7U25hY2tCYXJNYXRTd1VwZGF0ZX0gZnJvbSAnLi9zbmFja2Jhci5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEVuU25hY2tCYXJNYXRTd1VwZGF0ZSBleHRlbmRzIFNuYWNrQmFyTWF0U3dVcGRhdGUge1xyXG5cclxuICBjb25zdHJ1Y3Rvcih1cGRhdGVzOiBTd1VwZGF0ZSxcclxuICAgICAgICAgICAgICBzbmFja0JhcjogTWF0U25hY2tCYXIsXHJcbiAgICAgICAgICAgICAgQEluamVjdChMT0NBTEVfSUQpIGxvY2FsZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlcih1cGRhdGVzLCBzbmFja0JhciwgbG9jYWxlKTtcclxuICB9XHJcblxyXG4gIGRvU2hvdyhkYXRhOiBVcGRhdGVBdmFpbGFibGVFdmVudCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gcmV0dXJuIGRhdGEuYXZhaWxhYmxlLmFwcERhdGEuY3J1Y2lhbDtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0VHJhbnNsYXRpb24obG9jYWxlOiBzdHJpbmcpOiB7IGRlc2NyaXB0aW9uOiBzdHJpbmcsIHJlbG9hZEJ0bjogc3RyaW5nIH0ge1xyXG4gICAgcmV0dXJuIHtkZXNjcmlwdGlvbjogZW5nbGlzaC5kZXNjcmlwdGlvbiwgcmVsb2FkQnRuOiAnUkVMT0FEJ307XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TWF0U25hY2tCYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHtOZ3hNYXRTd1VwZGF0ZVNlcnZpY2V9IGZyb20gJy4vbmd4LW1hdC1zdy11cGRhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7RW5TbmFja0Jhck1hdFN3VXBkYXRlfSBmcm9tICcuL2ltcGxlbWVudGF0aW9ucy9zbmFja2Jhci5lbi5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgTWF0U25hY2tCYXJNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNc3VTbmFja0Jhck1vZHVsZSB7XHJcblxyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE1zdVNuYWNrQmFyTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBOZ3hNYXRTd1VwZGF0ZVNlcnZpY2UsXHJcbiAgICAgICAgICB1c2VDbGFzczogRW5TbmFja0Jhck1hdFN3VXBkYXRlXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBUeXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGUsIE1hdENhcmRNb2R1bGUsIE1hdERpYWxvZ01vZHVsZSwgTWF0U25hY2tCYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHtOZ3hNYXRTd1VwZGF0ZVNlcnZpY2V9IGZyb20gJy4vbmd4LW1hdC1zdy11cGRhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7RW5EaWFsb2dNYXRTd1VwZGF0ZX0gZnJvbSAnLi9pbXBsZW1lbnRhdGlvbnMvZGlhbG9nLmVuLnNlcnZpY2UnO1xyXG5pbXBvcnQge01TVV9ESUFMT0dfQ09NUE9ORU5ULCBNU1VfRElBTE9HX0lNQUdFfSBmcm9tICcuL3Rva2Vucyc7XHJcbmltcG9ydCB7TXN1QmFzaWNEaWFsb2dDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9tc3UtYmFzaWMtZGlhbG9nL21zdS1iYXNpYy1kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHtNc3VJbWFnZURpYWxvZ0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL21zdS1pbWFnZS1kaWFsb2cvbXN1LWltYWdlLWRpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQge01zdVBhZGRlZEltYWdlRGlhbG9nQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbXN1LXBhZGRlZC1pbWFnZS1kaWFsb2cvbXN1LXBhZGRlZC1pbWFnZS1kaWFsb2cuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgTWF0Q2FyZE1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTXN1QmFzaWNEaWFsb2dDb21wb25lbnQsIE1zdUltYWdlRGlhbG9nQ29tcG9uZW50LCBNc3VQYWRkZWRJbWFnZURpYWxvZ0NvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbTXN1QmFzaWNEaWFsb2dDb21wb25lbnQsIE1zdUltYWdlRGlhbG9nQ29tcG9uZW50LCBNc3VQYWRkZWRJbWFnZURpYWxvZ0NvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW01zdUJhc2ljRGlhbG9nQ29tcG9uZW50LCBNc3VJbWFnZURpYWxvZ0NvbXBvbmVudCwgTXN1UGFkZGVkSW1hZ2VEaWFsb2dDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNc3VEaWFsb2dNb2R1bGUge1xyXG5cclxuICBzdGF0aWMgZm9yUm9vdCh1c2VDb21wb25lbnQ6IFR5cGU8YW55PiA9IE1zdUJhc2ljRGlhbG9nQ29tcG9uZW50LCBpbWFnZVVybD86IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE1zdURpYWxvZ01vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogTmd4TWF0U3dVcGRhdGVTZXJ2aWNlLFxyXG4gICAgICAgICAgdXNlQ2xhc3M6IEVuRGlhbG9nTWF0U3dVcGRhdGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IE1TVV9ESUFMT0dfQ09NUE9ORU5ULFxyXG4gICAgICAgICAgdXNlVmFsdWU6IHVzZUNvbXBvbmVudFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogTVNVX0RJQUxPR19JTUFHRSxcclxuICAgICAgICAgIHVzZVZhbHVlOiBpbWFnZVVybFxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7SUFjRSwrQkFBZ0MsT0FBaUI7UUFBakIsWUFBTyxHQUFQLE9BQU8sQ0FBVTswQkFGakIsSUFBSSxPQUFPLEVBQVE7S0FHbEQ7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDekIsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFDMUIsTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFJ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

/***/ }),

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

module.exports = ":host {\r\n  display: block;\r\n  margin: 120px auto;\r\n  max-width: 564px;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  align-items: baseline;\r\n  justify-content: space-between;\r\n}\r\n\r\np {\r\n  margin: 1em 0.25em;\r\n}\r\n\r\ndiv {\r\n  margin: 0 0 24px;\r\n}\r\n\r\ninput, select {\r\n  display: block;\r\n  margin: 4px 0;\r\n  width: 500px;\r\n  outline: none;\r\n  border-radius: 2px;\r\n  background: #eee;\r\n  border: 1px solid #e0e0e0;\r\n  padding: 8px;\r\n  color: hsla(182, 96%, 27%, 1);\r\n  font-size: inherit;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* https://codepen.io/tyrellrummage/full/ZJPXgy/ */\r\n\r\nform {\r\n  background: #fff;\r\n  border-radius: 5px;\r\n  box-shadow: 0 3px 2px 0 rgba(0,0,0,.05);\r\n  padding: 2rem;\r\n  position: relative;\r\n  overflow: hidden;\r\n  display: inline-block;\r\n}\r\n\r\nform:before {\r\n  content: '';\r\n  width: 100%;\r\n  height: .5rem;\r\n  top: 0;\r\n  left: 0;\r\n  background: linear-gradient(to right, #04B3BA 0%,#0ABEA2 100%);\r\n  display: block;\r\n  position: absolute;\r\n}\r\n\r\nform button {\r\n  background: linear-gradient(to right, hsl(182, 96%, 37%) 0%,hsl(171, 90%, 39%) 100%);\r\n  color: #fff;\r\n  font-weight: 500;\r\n  padding: .5rem 2rem;\r\n  border-radius: 5px;\r\n  border: none;\r\n  text-transform: uppercase;\r\n  margin-top: 1rem;\r\n  text-shadow: 0 1px 2px rgba(0,0,0,.2);\r\n  cursor: pointer;\r\n  outline: none;\r\n  font-family: inherit;\r\n  font-size: 14px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1>ngx-mat-sw-update</h1>\n  <div>\n    <a href=\"https://github.com/JanMalch/ngx-mat-sw-update\">GitHub</a>&nbsp;&nbsp;<a href=\"http://npmjs.com/package/ngx-mat-sw-update\">npm</a>\n  </div>\n</header>\n<form #myForm=\"ngForm\" (ngSubmit)=\"register(myForm)\" novalidate>\n  <div>\n    <label>Notification type</label>\n    <select name=\"yourStrategy\" [ngModel]=\"initStrat\">\n      <option value=\"SnackBar\">SnackBar</option>\n      <option value=\"Dialog\">Dialog</option>\n    </select>\n  </div>\n  <div>\n    <label>Dialog Designs</label>\n    <select name=\"yourDialogComponent\" [ngModel]=\"initDesign\">\n      <option value=\"Basic\">Basic</option>\n      <option value=\"Image\">Image</option>\n      <option value=\"Padded\">Padded Image</option>\n    </select>\n  </div>\n  <div>\n    <label>Image URL for Image / Padded Image Dialogs</label>\n    <input type=\"text\" name=\"yourImageUrl\" [ngModel]=\"initImg\"/>\n  </div>\n  <button type=\"submit\">Save and Reload</button>\n</form>\n<p>\n  <small>The ServiceWorker updates are mocked via Angular's DI for this demo. They appear every time you open this\n    page. Check out the GitHub repo to learn more about how you can configure these notifications!\n  </small>\n  <br/>\n  <small>This library is unreleased on npm as there are currently AOT issues.</small>\n</p>\n"

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
    AppComponent.prototype.register = function (myForm) {
        Object.entries(myForm.value).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            return localStorage.setItem(key, value);
        });
        document.location.reload();
    };
    Object.defineProperty(AppComponent.prototype, "initDesign", {
        get: function () {
            return localStorage.getItem("yourDialogComponent") || 'Basic';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "initStrat", {
        get: function () {
            return localStorage.getItem("yourStrategy") || 'SnackBar';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "initImg", {
        get: function () {
            return localStorage.getItem("yourImage") || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a20bc6324f6ef2969d9a7cae56b8d4d1&auto=format&fit=crop&w=580&q=80";
        },
        enumerable: true,
        configurable: true
    });
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_mat_sw_update__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mat-sw-update */ "./dist/ngx-mat-sw-update/fesm5/ngx-mat-sw-update.js");
/* harmony import */ var _sw_update_mock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sw-update.mock */ "./src/app/sw-update.mock.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// --------- for demo purposes ---------
var yourImageUrl = localStorage.getItem('yourImageUrl');
var dialogOptions = {
    'Basic': ngx_mat_sw_update__WEBPACK_IMPORTED_MODULE_6__["MsuBasicDialogComponent"],
    'Image': ngx_mat_sw_update__WEBPACK_IMPORTED_MODULE_6__["MsuImageDialogComponent"],
    'Padded': ngx_mat_sw_update__WEBPACK_IMPORTED_MODULE_6__["MsuPaddedImageDialogComponent"]
};
var yourDialogComponent = dialogOptions[localStorage.getItem('yourDialogComponent') || 'Basic'];
var yourStrategy = localStorage.getItem('yourStrategy') === 'Dialog' ? ngx_mat_sw_update__WEBPACK_IMPORTED_MODULE_6__["EnDialogMatSwUpdate"] : ngx_mat_sw_update__WEBPACK_IMPORTED_MODULE_6__["EnSnackBarMatSwUpdate"];
var AppModule = /** @class */ (function () {
    function AppModule(matUpdates) {
        matUpdates.ngOnInit();
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production }),
                ngx_mat_sw_update__WEBPACK_IMPORTED_MODULE_6__["MsuSnackBarModule"].forRoot(),
                // MsuDialogModule.forRoot(MsuPaddedImageDialogComponent, 'https://firebase.google.com/images/homepage/grow_2x.png') // the actual way
                ngx_mat_sw_update__WEBPACK_IMPORTED_MODULE_6__["MsuDialogModule"].forRoot(yourDialogComponent, yourImageUrl) // this is just for the demo
            ],
            providers: [
                {
                    provide: _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["SwUpdate"],
                    useClass: _sw_update_mock__WEBPACK_IMPORTED_MODULE_7__["SwUpdateMock"]
                },
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MAT_DIALOG_DEFAULT_OPTIONS"],
                    useValue: { disableClose: true, maxWidth: 580, hasBackdrop: true }
                },
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MAT_SNACK_BAR_DEFAULT_OPTIONS"],
                    useValue: { duration: 15000 }
                },
                {
                    provide: ngx_mat_sw_update__WEBPACK_IMPORTED_MODULE_6__["NgxMatSwUpdateService"],
                    useClass: yourStrategy
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [ngx_mat_sw_update__WEBPACK_IMPORTED_MODULE_6__["NgxMatSwUpdateService"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/sw-update.mock.ts":
/*!***********************************!*\
  !*** ./src/app/sw-update.mock.ts ***!
  \***********************************/
/*! exports provided: SwUpdateMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwUpdateMock", function() { return SwUpdateMock; });
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


var SwUpdateMock = /** @class */ (function () {
    function SwUpdateMock() {
        this.available = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({});
        this.activated = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({});
        this.isEnabled = true;
    }
    SwUpdateMock.prototype.checkForUpdate = function () {
        return Promise.resolve();
    };
    SwUpdateMock.prototype.activateUpdate = function () {
        return Promise.resolve();
    };
    SwUpdateMock = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SwUpdateMock);
    return SwUpdateMock;
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

module.exports = __webpack_require__(/*! C:\Users\Jan\Documents\__Coding\__GitHub\ngx-mat-sw-update\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map