(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ngx-mat-sw-update/fesm5/ngx-mat-sw-update.js":
/*!***********************************************************!*\
  !*** ./dist/ngx-mat-sw-update/fesm5/ngx-mat-sw-update.js ***!
  \***********************************************************/
/*! exports provided: MatSwUpdate, MsuPaddedImageDialogComponent, MsuImageDialogComponent, MsuBasicDialogComponent, MsuDialog, MsuDialogEn, MsuSnackBar, MsuSnackBarEn, MsuSnackBarModule, MsuDialogModule, ɵe, ɵd, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSwUpdate", function() { return MatSwUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsuPaddedImageDialogComponent", function() { return MsuPaddedImageDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsuImageDialogComponent", function() { return MsuImageDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsuBasicDialogComponent", function() { return MsuBasicDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsuDialog", function() { return MsuDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsuDialogEn", function() { return MsuDialogEn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsuSnackBar", function() { return MsuSnackBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsuSnackBarEn", function() { return MsuSnackBarEn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsuSnackBarModule", function() { return MsuSnackBarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsuDialogModule", function() { return MsuDialogModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return MsuDialogEn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return MsuSnackBarEn; });
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
var MatSwUpdate = /** @class */ (function () {
    function MatSwUpdate(updates) {
        this.updates = updates;
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * @return {?}
     */
    MatSwUpdate.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.updates.available.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.onDestroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return _this.doShow(event); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (event) { return _this.showNotification(event); })).subscribe(function (result) { return _this.onAction(result); });
    };
    /**
     * @return {?}
     */
    MatSwUpdate.prototype.activateUpdate = /**
     * @return {?}
     */
    function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.updates.activateUpdate());
    };
    /**
     * @param {?=} force
     * @return {?}
     */
    MatSwUpdate.prototype.reloadPage = /**
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        document.location.reload(force);
    };
    /**
     * @return {?}
     */
    MatSwUpdate.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy$.next();
    };
    MatSwUpdate.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MatSwUpdate.ctorParameters = function () { return [
        { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"] }
    ]; };
    /** @nocollapse */ MatSwUpdate.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function MatSwUpdate_Factory() { return new MatSwUpdate(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"])); }, token: MatSwUpdate, providedIn: "root" });
    return MatSwUpdate;
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
    if (!("image" in data)) {
        throw new Error("No 'image' property found in DialogInput.");
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
var MsuDialog = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(MsuDialog, _super);
    function MsuDialog(updates, dialog, locale) {
        var _this = _super.call(this, updates) || this;
        _this.dialog = dialog;
        _this.locale = locale;
        return _this;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    MsuDialog.prototype.showNotification = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var ref = this.dialog.open(this.usedComponent, {
            data: this.getDialogInput(data, this.locale)
        });
        return ref.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(Boolean));
    };
    /**
     * @param {?} response
     * @return {?}
     */
    MsuDialog.prototype.onAction = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var _this = this;
        if (response) {
            this.activateUpdate().subscribe(function () { return _this.reloadPage(); });
        }
    };
    MsuDialog.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MsuDialog.ctorParameters = function () { return [
        { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] }] }
    ]; };
    /** @nocollapse */ MsuDialog.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function MsuDialog_Factory() { return new MsuDialog(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])); }, token: MsuDialog, providedIn: "root" });
    return MsuDialog;
}(MatSwUpdate));

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
var MsuDialogEn = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(MsuDialogEn, _super);
    function MsuDialogEn(updates, dialog, locale, _component, image) {
        var _this = _super.call(this, updates, dialog, locale) || this;
        _this.image = image;
        _this.usedComponent = _component || MsuBasicDialogComponent;
        return _this;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    MsuDialogEn.prototype.doShow = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        // return data.available.appData.crucial;
        return true;
    };
    /**
     * @param {?} data
     * @param {?} locale
     * @return {?}
     */
    MsuDialogEn.prototype.getDialogInput = /**
     * @param {?} data
     * @param {?} locale
     * @return {?}
     */
    function (data, locale) {
        return {
            title: 'Update available',
            cancelBtn: 'Cancel',
            reloadBtn: 'Reload',
            description: 'There\'s a new update available, which brings new features and bug fixes!\n'
                + 'Simply refresh the page to get the latest version.',
            image: this.image
        };
    };
    MsuDialogEn.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MsuDialogEn.ctorParameters = function () { return [
        { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Type"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MSU_DIALOG_COMPONENT,] }] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MSU_DIALOG_IMAGE,] }] }
    ]; };
    /** @nocollapse */ MsuDialogEn.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function MsuDialogEn_Factory() { return new MsuDialogEn(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(MSU_DIALOG_COMPONENT, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(MSU_DIALOG_IMAGE, 8)); }, token: MsuDialogEn, providedIn: "root" });
    return MsuDialogEn;
}(MsuDialog));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var MsuSnackBar = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(MsuSnackBar, _super);
    function MsuSnackBar(updates, snackBar, locale) {
        var _this = _super.call(this, updates) || this;
        _this.snackBar = snackBar;
        _this.locale = locale;
        return _this;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    MsuSnackBar.prototype.showNotification = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _a = this.getTranslation(data, this.locale), description = _a.description, reloadBtn = _a.reloadBtn;
        /** @type {?} */
        var ref = this.snackBar.open(description, reloadBtn);
        return ref.afterDismissed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (dismiss) { return dismiss.dismissedByAction; }));
    };
    /**
     * @param {?} response
     * @return {?}
     */
    MsuSnackBar.prototype.onAction = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var _this = this;
        if (response) {
            this.activateUpdate().subscribe(function () { return _this.reloadPage(); });
        }
    };
    MsuSnackBar.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MsuSnackBar.ctorParameters = function () { return [
        { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] }] }
    ]; };
    /** @nocollapse */ MsuSnackBar.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function MsuSnackBar_Factory() { return new MsuSnackBar(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])); }, token: MsuSnackBar, providedIn: "root" });
    return MsuSnackBar;
}(MatSwUpdate));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MsuSnackBarEn = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(MsuSnackBarEn, _super);
    function MsuSnackBarEn(updates, snackBar, locale) {
        return _super.call(this, updates, snackBar, locale) || this;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    MsuSnackBarEn.prototype.doShow = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        // return data.available.appData.crucial;
        return true;
    };
    /**
     * @param {?} data
     * @param {?} locale
     * @return {?}
     */
    MsuSnackBarEn.prototype.getTranslation = /**
     * @param {?} data
     * @param {?} locale
     * @return {?}
     */
    function (data, locale) {
        return { description: "There's a new update available, which brings new features and bug fixes! " +
                "Simply refresh the page to get the latest version.", reloadBtn: 'RELOAD' };
    };
    MsuSnackBarEn.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MsuSnackBarEn.ctorParameters = function () { return [
        { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] }] }
    ]; };
    /** @nocollapse */ MsuSnackBarEn.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function MsuSnackBarEn_Factory() { return new MsuSnackBarEn(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])); }, token: MsuSnackBarEn, providedIn: "root" });
    return MsuSnackBarEn;
}(MsuSnackBar));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

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
                    provide: MatSwUpdate,
                    useClass: MsuSnackBarEn
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
                    provide: MatSwUpdate,
                    useClass: MsuDialogEn
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdC1zdy11cGRhdGUuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1tYXQtc3ctdXBkYXRlL2xpYi9tYXQtc3ctdXBkYXRlLnRzIiwibmc6Ly9uZ3gtbWF0LXN3LXVwZGF0ZS9saWIvZXJyb3JzLnRzIiwibmc6Ly9uZ3gtbWF0LXN3LXVwZGF0ZS9saWIvY29tcG9uZW50cy9tc3UtcGFkZGVkLWltYWdlLWRpYWxvZy9tc3UtcGFkZGVkLWltYWdlLWRpYWxvZy5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXQtc3ctdXBkYXRlL2xpYi9jb21wb25lbnRzL21zdS1pbWFnZS1kaWFsb2cvbXN1LWltYWdlLWRpYWxvZy5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXQtc3ctdXBkYXRlL2xpYi9jb21wb25lbnRzL21zdS1iYXNpYy1kaWFsb2cvbXN1LWJhc2ljLWRpYWxvZy5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXQtc3ctdXBkYXRlL2xpYi9pbXBsZW1lbnRhdGlvbnMvbXN1LWRpYWxvZy50cyIsIm5nOi8vbmd4LW1hdC1zdy11cGRhdGUvbGliL3Rva2Vucy50cyIsIm5nOi8vbmd4LW1hdC1zdy11cGRhdGUvbGliL2ltcGxlbWVudGF0aW9ucy9tc3UtZGlhbG9nLmVuLnRzIiwibmc6Ly9uZ3gtbWF0LXN3LXVwZGF0ZS9saWIvaW1wbGVtZW50YXRpb25zL21zdS1zbmFja2Jhci50cyIsIm5nOi8vbmd4LW1hdC1zdy11cGRhdGUvbGliL2ltcGxlbWVudGF0aW9ucy9tc3Utc25hY2tiYXIuZW4udHMiLCJuZzovL25neC1tYXQtc3ctdXBkYXRlL2xpYi9tc3Utc25hY2tiYXIubW9kdWxlLnRzIiwibmc6Ly9uZ3gtbWF0LXN3LXVwZGF0ZS9saWIvbXN1LWRpYWxvZy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N3VXBkYXRlfSBmcm9tICdAYW5ndWxhci9zZXJ2aWNlLXdvcmtlcic7XG5pbXBvcnQge1VwZGF0ZUF2YWlsYWJsZUV2ZW50fSBmcm9tICdAYW5ndWxhci9zZXJ2aWNlLXdvcmtlci9zcmMvbG93X2xldmVsJztcbmltcG9ydCB7ZnJvbSwgT2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2ZpbHRlciwgbWVyZ2VNYXAsIHRha2VVbnRpbH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNYXRTd1VwZGF0ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgb25EZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB1cGRhdGVzOiBTd1VwZGF0ZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51cGRhdGVzLmF2YWlsYWJsZS5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMub25EZXN0cm95JCksXG4gICAgICBmaWx0ZXIoZXZlbnQgPT4gdGhpcy5kb1Nob3coZXZlbnQpKSxcbiAgICAgIG1lcmdlTWFwKGV2ZW50ID0+IHRoaXMuc2hvd05vdGlmaWNhdGlvbihldmVudCkpXG4gICAgKS5zdWJzY3JpYmUocmVzdWx0ID0+IHRoaXMub25BY3Rpb24ocmVzdWx0KSk7XG4gIH1cblxuICBhYnN0cmFjdCBkb1Nob3coZGF0YTogVXBkYXRlQXZhaWxhYmxlRXZlbnQpOiBib29sZWFuO1xuXG4gIGFic3RyYWN0IHNob3dOb3RpZmljYXRpb24oZGF0YTogVXBkYXRlQXZhaWxhYmxlRXZlbnQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGFic3RyYWN0IG9uQWN0aW9uKHJlc3BvbnNlOiBib29sZWFuKTogdm9pZDtcblxuICBwcm90ZWN0ZWQgYWN0aXZhdGVVcGRhdGUoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIGZyb20odGhpcy51cGRhdGVzLmFjdGl2YXRlVXBkYXRlKCkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbG9hZFBhZ2UoZm9yY2U/OiBib29sZWFuKTogdm9pZCB7XG4gICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKGZvcmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMub25EZXN0cm95JC5uZXh0KCk7XG4gIH1cblxufVxuXG4iLCJpbXBvcnQge0RpYWxvZ0lucHV0fSBmcm9tICcuL21vZGVscyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0SGFzSW1hZ2VQcm9wZXJ0eShkYXRhOiBEaWFsb2dJbnB1dCk6IHZvaWQge1xyXG4gIGlmICghKFwiaW1hZ2VcIiBpbiBkYXRhKSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gJ2ltYWdlJyBwcm9wZXJ0eSBmb3VuZCBpbiBEaWFsb2dJbnB1dC5cIik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEaWFsb2dJbnB1dH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcbmltcG9ydCB7TUFUX0RJQUxPR19EQVRBfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQge2Fzc2VydEhhc0ltYWdlUHJvcGVydHl9IGZyb20gJy4uLy4uL2Vycm9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21zdS1wYWRkZWQtaW1hZ2UtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21zdS1wYWRkZWQtaW1hZ2UtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbXN1LXBhZGRlZC1pbWFnZS1kaWFsb2cuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1zdVBhZGRlZEltYWdlRGlhbG9nQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0lucHV0KSB7XG4gICAgYXNzZXJ0SGFzSW1hZ2VQcm9wZXJ0eSh0aGlzLmRhdGEpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNQVRfRElBTE9HX0RBVEF9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7YXNzZXJ0SGFzSW1hZ2VQcm9wZXJ0eX0gZnJvbSAnLi4vLi4vZXJyb3JzJztcbmltcG9ydCB7RGlhbG9nSW5wdXR9IGZyb20gJy4uLy4uL21vZGVscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21zdS1pbWFnZS1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vbXN1LWltYWdlLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21zdS1pbWFnZS1kaWFsb2cuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1zdUltYWdlRGlhbG9nQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0lucHV0KSB7XG4gICAgYXNzZXJ0SGFzSW1hZ2VQcm9wZXJ0eSh0aGlzLmRhdGEpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNQVRfRElBTE9HX0RBVEF9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xuaW1wb3J0IHtEaWFsb2dJbnB1dH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXN1LWJhc2ljLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9tc3UtYmFzaWMtZGlhbG9nLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBNc3VCYXNpY0RpYWxvZ0NvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dJbnB1dCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlLCBMT0NBTEVfSUQsIFR5cGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01BVF9ESUFMT0dfREVGQVVMVF9PUFRJT05TLCBNYXREaWFsb2csIE1hdERpYWxvZ0NvbmZpZ30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQge1N3VXBkYXRlfSBmcm9tICdAYW5ndWxhci9zZXJ2aWNlLXdvcmtlcic7XHJcbmltcG9ydCB7VXBkYXRlQXZhaWxhYmxlRXZlbnR9IGZyb20gJ0Bhbmd1bGFyL3NlcnZpY2Utd29ya2VyL3NyYy9sb3dfbGV2ZWwnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge01hdFN3VXBkYXRlfSBmcm9tICcuLi9tYXQtc3ctdXBkYXRlJztcclxuaW1wb3J0IHtEaWFsb2dJbnB1dH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE1zdURpYWxvZyBleHRlbmRzIE1hdFN3VXBkYXRlIHtcclxuXHJcbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHVwZGF0ZXM6IFN3VXBkYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBJbmplY3QoTE9DQUxFX0lEKSBwcm90ZWN0ZWQgbG9jYWxlOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKHVwZGF0ZXMpO1xyXG4gIH1cclxuXHJcbiAgYWJzdHJhY3QgZ2V0RGlhbG9nSW5wdXQoZGF0YTogVXBkYXRlQXZhaWxhYmxlRXZlbnQsIGxvY2FsZTogc3RyaW5nKTogRGlhbG9nSW5wdXQ7XHJcblxyXG4gIGFic3RyYWN0IGdldCB1c2VkQ29tcG9uZW50KCk6IFR5cGU8YW55PjtcclxuXHJcbiAgc2hvd05vdGlmaWNhdGlvbihkYXRhOiBVcGRhdGVBdmFpbGFibGVFdmVudCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgY29uc3QgcmVmID0gdGhpcy5kaWFsb2cub3Blbih0aGlzLnVzZWRDb21wb25lbnQsIHtcclxuICAgICAgZGF0YTogdGhpcy5nZXREaWFsb2dJbnB1dChkYXRhLCB0aGlzLmxvY2FsZSlcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZWYuYWZ0ZXJDbG9zZWQoKS5waXBlKFxyXG4gICAgICBtYXAoQm9vbGVhbilcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBvbkFjdGlvbihyZXNwb25zZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZhdGVVcGRhdGUoKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWxvYWRQYWdlKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtJbmplY3Rpb25Ub2tlbiwgVHlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgY29uc3QgTVNVX0RJQUxPR19DT01QT05FTlQgPSBuZXcgSW5qZWN0aW9uVG9rZW48VHlwZTxhbnk+PihcIk1TVV9ESUFMT0dfQ09NUE9ORU5UXCIpO1xyXG5leHBvcnQgY29uc3QgTVNVX0RJQUxPR19JTUFHRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KFwiTVNVX0RJQUxPR19JTUFHRVwiKTtcclxuIiwiaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGUsIExPQ0FMRV9JRCwgT3B0aW9uYWwsIFR5cGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01hdERpYWxvZ30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQge1N3VXBkYXRlfSBmcm9tICdAYW5ndWxhci9zZXJ2aWNlLXdvcmtlcic7XHJcbmltcG9ydCB7VXBkYXRlQXZhaWxhYmxlRXZlbnR9IGZyb20gJ0Bhbmd1bGFyL3NlcnZpY2Utd29ya2VyL3NyYy9sb3dfbGV2ZWwnO1xyXG5pbXBvcnQge01zdURpYWxvZ30gZnJvbSAnLi9tc3UtZGlhbG9nJztcclxuaW1wb3J0IHtEaWFsb2dJbnB1dH0gZnJvbSAnLi4vbW9kZWxzJztcclxuaW1wb3J0IHtNU1VfRElBTE9HX0NPTVBPTkVOVCwgTVNVX0RJQUxPR19JTUFHRX0gZnJvbSAnLi4vdG9rZW5zJztcclxuaW1wb3J0IHtNc3VCYXNpY0RpYWxvZ0NvbXBvbmVudH0gZnJvbSAnLi4vY29tcG9uZW50cy9tc3UtYmFzaWMtZGlhbG9nL21zdS1iYXNpYy1kaWFsb2cuY29tcG9uZW50JztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1zdURpYWxvZ0VuIGV4dGVuZHMgTXN1RGlhbG9nIHtcclxuXHJcbiAgcmVhZG9ubHkgdXNlZENvbXBvbmVudDogVHlwZTxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcih1cGRhdGVzOiBTd1VwZGF0ZSxcclxuICAgICAgICAgICAgICBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgICAgICAgICAgICBASW5qZWN0KExPQ0FMRV9JRCkgbG9jYWxlOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChNU1VfRElBTE9HX0NPTVBPTkVOVCkgX2NvbXBvbmVudDogVHlwZTxhbnk+LFxyXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTVNVX0RJQUxPR19JTUFHRSkgcHJvdGVjdGVkIGltYWdlOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKHVwZGF0ZXMsIGRpYWxvZywgbG9jYWxlKTtcclxuICAgIHRoaXMudXNlZENvbXBvbmVudCA9IF9jb21wb25lbnQgfHwgTXN1QmFzaWNEaWFsb2dDb21wb25lbnQ7XHJcbiAgfVxyXG5cclxuICBkb1Nob3coZGF0YTogVXBkYXRlQXZhaWxhYmxlRXZlbnQpOiBib29sZWFuIHtcclxuICAgIC8vIHJldHVybiBkYXRhLmF2YWlsYWJsZS5hcHBEYXRhLmNydWNpYWw7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldERpYWxvZ0lucHV0KGRhdGE6IFVwZGF0ZUF2YWlsYWJsZUV2ZW50LCBsb2NhbGU6IHN0cmluZyk6IERpYWxvZ0lucHV0IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiAnVXBkYXRlIGF2YWlsYWJsZScsXHJcbiAgICAgIGNhbmNlbEJ0bjogJ0NhbmNlbCcsXHJcbiAgICAgIHJlbG9hZEJ0bjogJ1JlbG9hZCcsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGhlcmVcXCdzIGEgbmV3IHVwZGF0ZSBhdmFpbGFibGUsIHdoaWNoIGJyaW5ncyBuZXcgZmVhdHVyZXMgYW5kIGJ1ZyBmaXhlcyFcXG4nXHJcbiAgICAgICAgKyAnU2ltcGx5IHJlZnJlc2ggdGhlIHBhZ2UgdG8gZ2V0IHRoZSBsYXRlc3QgdmVyc2lvbi4nLFxyXG4gICAgICBpbWFnZTogdGhpcy5pbWFnZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlLCBMT0NBTEVfSUR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01hdFNuYWNrQmFyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7U3dVcGRhdGV9IGZyb20gJ0Bhbmd1bGFyL3NlcnZpY2Utd29ya2VyJztcclxuaW1wb3J0IHtVcGRhdGVBdmFpbGFibGVFdmVudH0gZnJvbSAnQGFuZ3VsYXIvc2VydmljZS13b3JrZXIvc3JjL2xvd19sZXZlbCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7TWF0U3dVcGRhdGV9IGZyb20gJy4uL21hdC1zdy11cGRhdGUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTXN1U25hY2tCYXIgZXh0ZW5kcyBNYXRTd1VwZGF0ZSB7XHJcblxyXG4gIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcih1cGRhdGVzOiBTd1VwZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdGVjdGVkIHNuYWNrQmFyOiBNYXRTbmFja0JhcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgQEluamVjdChMT0NBTEVfSUQpIHByb3RlY3RlZCBsb2NhbGU6IHN0cmluZykge1xyXG4gICAgc3VwZXIodXBkYXRlcyk7XHJcbiAgfVxyXG5cclxuICBhYnN0cmFjdCBnZXRUcmFuc2xhdGlvbihkYXRhOiBVcGRhdGVBdmFpbGFibGVFdmVudCwgbG9jYWxlOiBzdHJpbmcpOiB7IGRlc2NyaXB0aW9uOiBzdHJpbmcsIHJlbG9hZEJ0bjogc3RyaW5nIH07XHJcblxyXG4gIHNob3dOb3RpZmljYXRpb24oZGF0YTogVXBkYXRlQXZhaWxhYmxlRXZlbnQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IHtkZXNjcmlwdGlvbiwgcmVsb2FkQnRufSA9IHRoaXMuZ2V0VHJhbnNsYXRpb24oZGF0YSwgdGhpcy5sb2NhbGUpO1xyXG4gICAgY29uc3QgcmVmID0gdGhpcy5zbmFja0Jhci5vcGVuKGRlc2NyaXB0aW9uLCByZWxvYWRCdG4pO1xyXG5cclxuICAgIHJldHVybiByZWYuYWZ0ZXJEaXNtaXNzZWQoKS5waXBlKFxyXG4gICAgICBtYXAoZGlzbWlzcyA9PiBkaXNtaXNzLmRpc21pc3NlZEJ5QWN0aW9uKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG9uQWN0aW9uKHJlc3BvbnNlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZVVwZGF0ZSgpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlbG9hZFBhZ2UoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZSwgTE9DQUxFX0lEfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNYXRTbmFja0Jhcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQge1N3VXBkYXRlfSBmcm9tICdAYW5ndWxhci9zZXJ2aWNlLXdvcmtlcic7XHJcbmltcG9ydCB7VXBkYXRlQXZhaWxhYmxlRXZlbnR9IGZyb20gJ0Bhbmd1bGFyL3NlcnZpY2Utd29ya2VyL3NyYy9sb3dfbGV2ZWwnO1xyXG5pbXBvcnQge01zdVNuYWNrQmFyfSBmcm9tICcuL21zdS1zbmFja2Jhcic7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNc3VTbmFja0JhckVuIGV4dGVuZHMgTXN1U25hY2tCYXIge1xyXG5cclxuICBjb25zdHJ1Y3Rvcih1cGRhdGVzOiBTd1VwZGF0ZSxcclxuICAgICAgICAgICAgICBzbmFja0JhcjogTWF0U25hY2tCYXIsXHJcbiAgICAgICAgICAgICAgQEluamVjdChMT0NBTEVfSUQpIGxvY2FsZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlcih1cGRhdGVzLCBzbmFja0JhciwgbG9jYWxlKTtcclxuICB9XHJcblxyXG4gIGRvU2hvdyhkYXRhOiBVcGRhdGVBdmFpbGFibGVFdmVudCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gcmV0dXJuIGRhdGEuYXZhaWxhYmxlLmFwcERhdGEuY3J1Y2lhbDtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0VHJhbnNsYXRpb24oZGF0YTogVXBkYXRlQXZhaWxhYmxlRXZlbnQsIGxvY2FsZTogc3RyaW5nKTogeyBkZXNjcmlwdGlvbjogc3RyaW5nLCByZWxvYWRCdG46IHN0cmluZyB9IHtcclxuICAgIHJldHVybiB7ZGVzY3JpcHRpb246IFwiVGhlcmUncyBhIG5ldyB1cGRhdGUgYXZhaWxhYmxlLCB3aGljaCBicmluZ3MgbmV3IGZlYXR1cmVzIGFuZCBidWcgZml4ZXMhIFwiICtcclxuICAgICAgICBcIlNpbXBseSByZWZyZXNoIHRoZSBwYWdlIHRvIGdldCB0aGUgbGF0ZXN0IHZlcnNpb24uXCIsIHJlbG9hZEJ0bjogJ1JFTE9BRCd9O1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TWF0U25hY2tCYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHtNYXRTd1VwZGF0ZX0gZnJvbSAnLi9tYXQtc3ctdXBkYXRlJztcclxuaW1wb3J0IHtNc3VTbmFja0JhckVufSBmcm9tICcuL2ltcGxlbWVudGF0aW9ucyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIE1hdFNuYWNrQmFyTW9kdWxlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXN1U25hY2tCYXJNb2R1bGUge1xyXG5cclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBNc3VTbmFja0Jhck1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogTWF0U3dVcGRhdGUsXHJcbiAgICAgICAgICB1c2VDbGFzczogTXN1U25hY2tCYXJFblxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgVHlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlLCBNYXRDYXJkTW9kdWxlLCBNYXREaWFsb2dNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHtNYXRTd1VwZGF0ZX0gZnJvbSAnLi9tYXQtc3ctdXBkYXRlJztcclxuaW1wb3J0IHtNc3VEaWFsb2dFbn0gZnJvbSAnLi9pbXBsZW1lbnRhdGlvbnMnO1xyXG5pbXBvcnQge01TVV9ESUFMT0dfQ09NUE9ORU5ULCBNU1VfRElBTE9HX0lNQUdFfSBmcm9tICcuL3Rva2Vucyc7XHJcbmltcG9ydCB7TXN1QmFzaWNEaWFsb2dDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9tc3UtYmFzaWMtZGlhbG9nL21zdS1iYXNpYy1kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHtNc3VJbWFnZURpYWxvZ0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL21zdS1pbWFnZS1kaWFsb2cvbXN1LWltYWdlLWRpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQge01zdVBhZGRlZEltYWdlRGlhbG9nQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbXN1LXBhZGRlZC1pbWFnZS1kaWFsb2cvbXN1LXBhZGRlZC1pbWFnZS1kaWFsb2cuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgTWF0Q2FyZE1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTXN1QmFzaWNEaWFsb2dDb21wb25lbnQsIE1zdUltYWdlRGlhbG9nQ29tcG9uZW50LCBNc3VQYWRkZWRJbWFnZURpYWxvZ0NvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbTXN1QmFzaWNEaWFsb2dDb21wb25lbnQsIE1zdUltYWdlRGlhbG9nQ29tcG9uZW50LCBNc3VQYWRkZWRJbWFnZURpYWxvZ0NvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW01zdUJhc2ljRGlhbG9nQ29tcG9uZW50LCBNc3VJbWFnZURpYWxvZ0NvbXBvbmVudCwgTXN1UGFkZGVkSW1hZ2VEaWFsb2dDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNc3VEaWFsb2dNb2R1bGUge1xyXG5cclxuICBzdGF0aWMgZm9yUm9vdCh1c2VDb21wb25lbnQ6IFR5cGU8YW55PiA9IE1zdUJhc2ljRGlhbG9nQ29tcG9uZW50LCBpbWFnZVVybD86IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE1zdURpYWxvZ01vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogTWF0U3dVcGRhdGUsXHJcbiAgICAgICAgICB1c2VDbGFzczogTXN1RGlhbG9nRW5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IE1TVV9ESUFMT0dfQ09NUE9ORU5ULFxyXG4gICAgICAgICAgdXNlVmFsdWU6IHVzZUNvbXBvbmVudFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogTVNVX0RJQUxPR19JTUFHRSxcclxuICAgICAgICAgIHVzZVZhbHVlOiBpbWFnZVVybFxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7SUFhRSxxQkFBZ0MsT0FBaUI7UUFBakIsWUFBTyxHQUFQLE9BQU8sQ0FBVTswQkFGakIsSUFBSSxPQUFPLEVBQVE7S0FHbEQ7Ozs7SUFFRCw4QkFBUTs7O0lBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxPQUFP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

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

module.exports = "<header>\n  <h1>ngx-mat-sw-update</h1>\n  <div>\n    <a href=\"https://github.com/JanMalch/ngx-mat-sw-update\">GitHub</a>&nbsp;&nbsp;<a href=\"http://npmjs.com/package/ngx-mat-sw-update\">npm</a>\n  </div>\n</header>\n<form #myForm=\"ngForm\" (ngSubmit)=\"register(myForm)\" novalidate>\n  <div>\n    <label>Notification type</label>\n    <select name=\"yourStrategy\" [ngModel]=\"initStrat\">\n      <option value=\"SnackBar\">SnackBar</option>\n      <option value=\"Dialog\">Dialog</option>\n    </select>\n  </div>\n  <div>\n    <label>Dialog Designs</label>\n    <select name=\"yourDialogComponent\" [ngModel]=\"initDesign\">\n      <option value=\"Basic\">Basic</option>\n      <option value=\"Image\">Image</option>\n      <option value=\"Padded\">Padded Image</option>\n    </select>\n  </div>\n  <div>\n    <label>Image URL for Image / Padded Image Dialogs</label>\n    <input type=\"text\" name=\"yourImageUrl\" [ngModel]=\"initImg\"/>\n  </div>\n  <button type=\"submit\">Save and Reload</button>\n</form>\n<p>\n  <small>The ServiceWorker updates are mocked via Angular's DI for this demo. They appear every time you open this\n    page. Check out the GitHub repo to learn more about how you can configure these notifications!\n  </small>\n  <br/>\n  <small>This demo doesn't run in AOT mode, so you can test out the different variations.\n  </small>\n</p>\n"

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
    Object.defineProperty(AppComponent.prototype, "initStrat", {
        get: function () {
            return localStorage.getItem('yourStrategy') || 'SnackBar';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "initDesign", {
        get: function () {
            return localStorage.getItem('yourDialogComponent') || 'Basic';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "initImg", {
        get: function () {
            return localStorage.getItem('yourImage')
                || ('https://images.unsplash.com/photo-1517694712202-14dd9538aa97' +
                    '?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a20bc6324f6ef2969d9a7cae56b8d4d1&auto=format&fit=crop&w=580&q=80');
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










// --------- this only works with JIT (not production) and is just for demo purposes ---------
var yourImageUrl = localStorage.getItem('yourImageUrl') ||
    "https://images.unsplash.com/photo-1517694712202-14…69d9a7cae56b8d4d1&auto=format&fit=crop&w=580&q=80";
var dialogOptions = {
    'Basic': ngx_mat_sw_update__WEBPACK_IMPORTED_MODULE_6__["MsuBasicDialogComponent"],
    'Image': ngx_mat_sw_update__WEBPACK_IMPORTED_MODULE_6__["MsuImageDialogComponent"],
    'Padded': ngx_mat_sw_update__WEBPACK_IMPORTED_MODULE_6__["MsuPaddedImageDialogComponent"]
};
var yourDialogComponent = dialogOptions[localStorage.getItem('yourDialogComponent') || 'Basic'];
var yourStrategy = localStorage.getItem('yourStrategy') === 'Dialog' ? ngx_mat_sw_update__WEBPACK_IMPORTED_MODULE_6__["MsuDialogEn"] : ngx_mat_sw_update__WEBPACK_IMPORTED_MODULE_6__["MsuSnackBarEn"];
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
                    useValue: { duration: 10000 }
                },
                {
                    provide: ngx_mat_sw_update__WEBPACK_IMPORTED_MODULE_6__["MatSwUpdate"],
                    useClass: yourStrategy
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [ngx_mat_sw_update__WEBPACK_IMPORTED_MODULE_6__["MatSwUpdate"]])
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