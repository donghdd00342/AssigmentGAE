webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading-bar color=\"#DC4C46\"></ngx-loading-bar>\n<div class=\"container m-top\">\n  <app-product></app-product>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_share_module__ = __webpack_require__("../../../../../src/app/share/share.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__share_share_module__["a" /* ShareModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/constant/endpoint.constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BASE_API_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PRODUCT; });
var BASE_API_URL = 'https://assigmentgae.appspot.com/api/v1';
var PRODUCT = {
    GET_ONE: BASE_API_URL + "/products",
    GET_ALL: BASE_API_URL + "/products",
    CREATE_NEW: BASE_API_URL + "/products",
    UPDATE: BASE_API_URL + "/products",
    DELETE: BASE_API_URL + "/products",
    MOCK_SAMPLE_DATA: BASE_API_URL + "/mock"
};


/***/ }),

/***/ "../../../../../src/app/container/edit-delete-product/edit-delete-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".edit-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-top: 15px;\n}\n\n.edit-container > * {\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/container/edit-delete-product/edit-delete-product.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n  <mat-tab label=\"Edit\">\n    <div class=\"tab-content\">\n      <form [formGroup]=\"form\">\n        <div class=\"edit-container\">\n          <mat-form-field>\n            <input matInput placeholder=\"Name\" formControlName=\"name\" type=\"text\">\n          </mat-form-field>\n\n          <mat-form-field>\n            <input matInput placeholder=\"Unit Price\" formControlName=\"unitPrice\" type=\"number\">\n          </mat-form-field>\n\n          <mat-form-field>\n            <input matInput placeholder=\"Quantity\" formControlName=\"quantity\" type=\"number\">\n          </mat-form-field>\n\n          <mat-form-field>\n            <mat-select placeholder=\"Rate\" formControlName=\"rate\">\n              <mat-option *ngFor=\"let rate of rates\" [value]=\"rate\">{{rate}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n\n          <mat-form-field>\n            <mat-select placeholder=\"Producer\" formControlName=\"producer\">\n              <mat-option *ngFor=\"let producer of producers\" [value]=\"producer\">{{producer}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n\n          <div class=\"pad10\">\n            <button mat-raised-button color=\"primary\" (click)=\"updateAction()\" [disabled]=\"!form.valid\">Update</button>\n            <button mat-raised-button (click)=\"resetAction()\">Reset</button>\n            <button mat-raised-button (click)=\"closeDialog()\">Cancel</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </mat-tab>\n\n  <mat-tab label=\"Delete\">\n    <div class=\"tab-content\">\n      <h2 class=\"pad10\">Are you sure?</h2>\n      <div class=\"pad10\">\n        <button mat-raised-button color=\"warn\" (click)=\"configDelete()\">Yes</button>\n        <button mat-raised-button (click)=\"closeDialog()\">No</button>\n      </div>\n    </div>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "../../../../../src/app/container/edit-delete-product/edit-delete-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDeleteProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_api_service__ = __webpack_require__("../../../../../src/app/share/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constant_endpoint_constant__ = __webpack_require__("../../../../../src/app/constant/endpoint.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var EditDeleteProductComponent = /** @class */ (function () {
    function EditDeleteProductComponent(dialogRef, data, toastr, api, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.toastr = toastr;
        this.api = api;
        this.fb = fb;
        this.rates = Array.from(Array(11).keys());
        this.createForm();
    }
    EditDeleteProductComponent.prototype.ngOnInit = function () {
        console.log('data inject token = ', this.data);
        this.producers = ['Samsung', 'Apple', 'Google', 'Sony', 'LG', 'Panasonic', 'Tosiba', 'Facebook'];
    };
    EditDeleteProductComponent.prototype.configDelete = function () {
        var _this = this;
        console.log('from confirm delete: id = ', this.data.id);
        this.api.delete(__WEBPACK_IMPORTED_MODULE_4__constant_endpoint_constant__["a" /* PRODUCT */].DELETE, this.data.id).subscribe(function (res) {
            console.log('from confirm delete: res = ', res);
            _this.toastr.success('Delete successfull!');
            _this.closeDialog(res);
        }, function (err) {
            console.log('from confirm delete: err = ', err);
            var errPhase = 'Something went wrong!';
            if (err.error) {
                err.error.replace(/<h1>(.*?)<\/h1>/g, function (match, er) {
                    console.log(er);
                    errPhase = er;
                });
            }
            _this.toastr.error(errPhase);
            _this.closeDialog();
        });
    };
    EditDeleteProductComponent.prototype.closeDialog = function (result) {
        this.dialogRef.close(result);
    };
    EditDeleteProductComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            id: [this.data.id, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* Validators */].required],
            name: [this.data.name, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* Validators */].required],
            unitPrice: [this.data.unitPrice, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* Validators */].required],
            rate: [this.data.rate, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* Validators */].required],
            quantity: [this.data.quantity, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* Validators */].required],
            producer: [this.data.producer, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* Validators */].required],
            status: [this.data.status, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* Validators */].pattern('[01]')]
        });
    };
    EditDeleteProductComponent.prototype.updateAction = function () {
        var _this = this;
        console.log('From update action this.form.value = ', this.form.value);
        this.api.put(__WEBPACK_IMPORTED_MODULE_4__constant_endpoint_constant__["a" /* PRODUCT */].UPDATE, this.form.value).subscribe(function (res) {
            console.log(res);
            _this.toastr.success('Update successfull!');
            _this.closeDialog(res);
        }, function (err) {
            console.log('from updateAction: err = ', err);
            var errPhase = 'Something went wrong!';
            if (err.error) {
                err.error.replace(/<h1>(.*?)<\/h1>/g, function (match, er) {
                    console.log(er);
                    errPhase = er;
                });
            }
            _this.toastr.error(errPhase);
            _this.closeDialog();
        });
    };
    EditDeleteProductComponent.prototype.resetAction = function () {
        this.createForm();
    };
    EditDeleteProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-edit-delete-product',
            template: __webpack_require__("../../../../../src/app/container/edit-delete-product/edit-delete-product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/container/edit-delete-product/edit-delete-product.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormBuilder */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__share_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormBuilder */]])
    ], EditDeleteProductComponent);
    return EditDeleteProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/container/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tab-content {\n  padding: 10px;\n}\n\n.table-tab-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px;\n}\n\n.table-tab-header {\n  min-height: 64px;\n  padding: 8px 0 0;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/container/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group #myTab>\n  <mat-tab label=\"Products List\">\n    <div class=\"tab-content\">\n      <div class=\"table-tab-header\">\n        <mat-form-field>\n          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n        </mat-form-field>\n      </div>\n\n      <div class=\"table-tab-container mat-elevation-z8\">\n\n        <mat-table [dataSource]=\"dataSource\" matSort>\n          <!--<ng-container matColumnDef=\"select\">-->\n            <!--<mat-header-cell *matHeaderCellDef>Select</mat-header-cell>-->\n            <!--<mat-cell *matCellDef=\"let row\">-->\n              <!--<mat-radio-button [checked]=\"selection === row\"></mat-radio-button>-->\n            <!--</mat-cell>-->\n          <!--</ng-container>-->\n\n          <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"unitPrice\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Unit Price </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.unitPrice}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"rate\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Rate </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.rate}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"quantity\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Quantity </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.quantity}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"producer\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Producer </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.producer}} </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"setSelected(row)\" style=\"cursor: pointer\">\n          </mat-row>\n        </mat-table>\n\n        <mat-paginator [pageSizeOptions]=\"[5, 10, 25]\"></mat-paginator>\n      </div>\n    </div>\n  </mat-tab>\n\n  <mat-tab label=\"Add new\">\n    <div class=\"m-all-15 pad-all-15 mat-elevation-z8\">\n      <form [formGroup]=\"formCreate\">\n        <div class=\"edit-container\">\n          <mat-form-field>\n            <input matInput placeholder=\"Name\" formControlName=\"name\" type=\"text\">\n          </mat-form-field>\n\n          <mat-form-field>\n            <input matInput placeholder=\"Unit Price\" formControlName=\"unitPrice\" type=\"number\">\n          </mat-form-field>\n\n          <mat-form-field>\n            <input matInput placeholder=\"Quantity\" formControlName=\"quantity\" type=\"number\">\n          </mat-form-field>\n\n          <mat-form-field>\n            <mat-select placeholder=\"Rate\" formControlName=\"rate\">\n              <mat-option *ngFor=\"let rate of rates\" [value]=\"rate\">{{rate}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n\n          <mat-form-field>\n            <mat-select placeholder=\"Producer\" formControlName=\"producer\">\n              <mat-option *ngFor=\"let producer of producers\" [value]=\"producer\">{{producer}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n\n          <div class=\"pad10\">\n            <button mat-raised-button color=\"primary\" (click)=\"createAction()\" [disabled]=\"!formCreate.valid\">Add now</button>\n            <button mat-raised-button (click)=\"formCreate.reset()\">Reset</button>\n            <button mat-raised-button (click)=\"quickAdd()\">Quick Add</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "../../../../../src/app/container/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuickAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_api_service__ = __webpack_require__("../../../../../src/app/share/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constant_endpoint_constant__ = __webpack_require__("../../../../../src/app/constant/endpoint.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_delete_product_edit_delete_product_component__ = __webpack_require__("../../../../../src/app/container/edit-delete-product/edit-delete-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var ProductComponent = /** @class */ (function () {
    function ProductComponent(toastr, api, dialog, fb) {
        this.toastr = toastr;
        this.api = api;
        this.dialog = dialog;
        this.fb = fb;
        // displayedColumns = ['select', 'name', 'unitPrice', 'rate', 'quantity', 'producer'];
        this.displayedColumns = ['name', 'unitPrice', 'rate', 'quantity', 'producer'];
        this.rates = Array.from(Array(11).keys());
        this.createForm();
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.initDataSource();
        this.producers = ['Samsung', 'Apple', 'Google', 'Sony', 'LG', 'Panasonic', 'Tosiba', 'Facebook'];
    };
    ProductComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    ProductComponent.prototype.setSelected = function (row) {
        this.selection = row;
        console.log(this.selection, row);
        this.openDialog(row);
    };
    ProductComponent.prototype.openDialog = function (row, component) {
        var _this = this;
        var dialogRef = this.dialog.open(component ? component : __WEBPACK_IMPORTED_MODULE_5__edit_delete_product_edit_delete_product_component__["a" /* EditDeleteProductComponent */], {
            width: '600px',
            data: row ? row : ''
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed result = ', result);
            if (result) {
                _this.initDataSource();
            }
        });
    };
    ProductComponent.prototype.initDataSource = function () {
        var _this = this;
        this.api.get(__WEBPACK_IMPORTED_MODULE_4__constant_endpoint_constant__["a" /* PRODUCT */].GET_ALL).subscribe(function (res) {
            console.log(res.products);
            var listProducts = res.products.sort(function (p1, p2) {
                if (p1.id < p2.id) {
                    return 1;
                }
                else if (p1.id > p2.id) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatTableDataSource */](listProducts);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (err) {
            console.log(err);
            _this.toastr.error('Something went wrong!');
        });
        this.matTabGroup.selectedIndex = 0;
    };
    ProductComponent.prototype.createAction = function () {
        var _this = this;
        console.log('from create action form.value = ', this.formCreate.value);
        this.api.post(__WEBPACK_IMPORTED_MODULE_4__constant_endpoint_constant__["a" /* PRODUCT */].CREATE_NEW, this.formCreate.value).subscribe(function (res) {
            console.log(res);
            _this.toastr.success('Create new success!');
            _this.initDataSource();
            _this.formCreate.reset();
        }, function (err) {
            console.log(err);
            _this.toastr.error('Something went wrong!');
        });
    };
    ProductComponent.prototype.createForm = function () {
        this.formCreate = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* Validators */].required],
            unitPrice: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* Validators */].required],
            rate: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* Validators */].required],
            quantity: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* Validators */].required],
            producer: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* Validators */].required],
        });
    };
    ProductComponent.prototype.quickAdd = function () {
        this.openDialog('', QuickAddComponent);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatPaginator */])
    ], ProductComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatSort */])
    ], ProductComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatTabGroup */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatTabGroup */])
    ], ProductComponent.prototype, "matTabGroup", void 0);
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__("../../../../../src/app/container/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/container/product/product.component.css")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormBuilder */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__share_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormBuilder */]])
    ], ProductComponent);
    return ProductComponent;
}());

var QuickAddComponent = /** @class */ (function () {
    function QuickAddComponent(dialogRef, toastr, api) {
        this.dialogRef = dialogRef;
        this.toastr = toastr;
        this.api = api;
    }
    QuickAddComponent.prototype.onClick = function (num) {
        var _this = this;
        console.log(num);
        this.api.get(__WEBPACK_IMPORTED_MODULE_4__constant_endpoint_constant__["a" /* PRODUCT */].MOCK_SAMPLE_DATA + '?number=' + num).subscribe(function (res) {
            console.log(res);
            _this.toastr.success('Quick add ' + num + ' success!');
            _this.dialogRef.close(num);
        }, function (err) {
            console.log(err);
            _this.toastr.error('Something went wrong!');
            _this.dialogRef.close();
        });
    };
    QuickAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-quick-add',
            template: "\n    <div>\n      <h3>Quick add sample data</h3>\n      <div class=\"button-row\">\n        <button mat-raised-button (click)=\"onClick(5)\">Add 5</button>\n        <button mat-raised-button color=\"primary\" (click)=\"onClick(10)\">Add 10</button>\n        <button mat-raised-button color=\"accent\" (click)=\"onClick(15)\">Add 15</button>\n        <button mat-raised-button color=\"warn\" (click)=\"onClick(20)\">Add 20</button>\n      </div>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__share_api_service__["a" /* ApiService */]])
    ], QuickAddComponent);
    return QuickAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/share/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(httpClient) {
        this.httpClient = httpClient;
        this.options = {
            headers: null,
            params: null
        };
    }
    ApiService.prototype.headerWithToken = function (token) {
        if (token) {
            this.options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            });
        }
    };
    ApiService.prototype.headerWithParams = function (params) {
        if (params) {
            this.options.params = params;
        }
    };
    ApiService.prototype.get = function (url, params, token) {
        this.headerWithToken(token);
        this.headerWithParams(params);
        return this.httpClient.get(url, this.options);
    };
    ApiService.prototype.getOne = function (url, id, token) {
        console.log('id = ', id);
        var urlBuild = url + "/" + id;
        this.headerWithToken(token);
        return this.httpClient.get(urlBuild, this.options);
    };
    ApiService.prototype.put = function (url, body, token) {
        this.headerWithToken(token);
        return this.httpClient.put(url, body, this.options);
    };
    ApiService.prototype.post = function (url, body, token) {
        this.headerWithToken(token);
        return this.httpClient.post(url, body, this.options);
    };
    ApiService.prototype.delete = function (url, id, token) {
        console.log('id = ', id);
        var urlBuild = url + "/" + id;
        this.headerWithToken(token);
        return this.httpClient.delete(urlBuild, this.options);
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/app/share/share.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__container_product_product_component__ = __webpack_require__("../../../../../src/app/container/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_service__ = __webpack_require__("../../../../../src/app/share/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_loading_bar_http_client__ = __webpack_require__("../../../../@ngx-loading-bar/http-client/@ngx-loading-bar/http-client.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__container_edit_delete_product_edit_delete_product_component__ = __webpack_require__("../../../../../src/app/container/edit-delete-product/edit-delete-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ShareModule = /** @class */ (function () {
    function ShareModule() {
    }
    ShareModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__ngx_loading_bar_http_client__["a" /* LoadingBarHttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatCardModule */]
            ],
            exports: [
                // Module
                __WEBPACK_IMPORTED_MODULE_8__ngx_loading_bar_http_client__["a" /* LoadingBarHttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["a" /* ToastrModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatCardModule */],
                // Component
                __WEBPACK_IMPORTED_MODULE_5__container_product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_9__container_edit_delete_product_edit_delete_product_component__["a" /* EditDeleteProductComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__container_product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_9__container_edit_delete_product_edit_delete_product_component__["a" /* EditDeleteProductComponent */],
                __WEBPACK_IMPORTED_MODULE_5__container_product_product_component__["b" /* QuickAddComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */],
                __WEBPACK_IMPORTED_MODULE_6__api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDialog */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__container_edit_delete_product_edit_delete_product_component__["a" /* EditDeleteProductComponent */],
                __WEBPACK_IMPORTED_MODULE_5__container_product_product_component__["b" /* QuickAddComponent */]
            ]
        })
    ], ShareModule);
    return ShareModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
    console.log = function (a, b, c, d, e, f, g, h, i, j, k, l) {
        return false;
    };
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map