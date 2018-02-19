import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatDialog, MatDialogModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatRadioModule,
  MatSelectModule, MatSliderModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule
} from '@angular/material';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {ProductComponent, QuickAddComponent} from '../container/product/product.component';
import {ApiService} from './api.service';
import {HttpClientModule} from '@angular/common/http';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {EditDeleteProductComponent} from '../container/edit-delete-product/edit-delete-product.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    LoadingBarHttpClientModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    CommonModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatRadioModule,
    MatSelectModule,
    MatDialogModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  exports: [
    // Module
    LoadingBarHttpClientModule,
    HttpClientModule,
    ToastrModule,
    CommonModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatCardModule,
    // Component
    ProductComponent,
    EditDeleteProductComponent
  ],
  declarations: [
    ProductComponent,
    EditDeleteProductComponent,
    QuickAddComponent
  ],
  providers: [
    ToastrService,
    ApiService,
    MatDialog
  ],
  entryComponents: [
    EditDeleteProductComponent,
    QuickAddComponent
  ]
})
export class ShareModule {
}
