import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ToastrService} from 'ngx-toastr';
import {ApiService} from '../../share/api.service';
import {PRODUCT} from '../../constant/endpoint.constant';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-delete-product',
  templateUrl: './edit-delete-product.component.html',
  styleUrls: ['./edit-delete-product.component.css']
})
export class EditDeleteProductComponent implements OnInit {
  form: FormGroup;
  producers: string[];
  rates = Array.from(Array(11).keys());

  constructor(public dialogRef: MatDialogRef<EditDeleteProductComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private toastr: ToastrService,
              private api: ApiService,
              @Inject(FormBuilder) private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    console.log('data inject token = ', this.data);
    this.producers = ['Samsung', 'Apple', 'Google', 'Sony', 'LG', 'Panasonic', 'Tosiba', 'Facebook'];
  }

  configDelete() {
    console.log('from confirm delete: id = ', this.data.id);
    this.api.delete(PRODUCT.DELETE, this.data.id).subscribe(
      res => {
        console.log('from confirm delete: res = ', res);
        this.toastr.success('Delete successfull!');
        this.closeDialog(res);
      }, err => {
        console.log('from confirm delete: err = ', err);
        let errPhase = 'Something went wrong!';
        if (err.error) {
          err.error.replace(/<h1>(.*?)<\/h1>/g, function (match, er) {
            console.log(er);
            errPhase = er;
          });
        }
        this.toastr.error(errPhase);
        this.closeDialog();
      }
    );
  }

  closeDialog(result?: any) {
    this.dialogRef.close(result);
  }

  createForm() {
    this.form = this.fb.group({
      id: [this.data.id, Validators.required],
      name: [this.data.name, Validators.required],
      unitPrice: [this.data.unitPrice, Validators.required],
      rate: [this.data.rate, Validators.required],
      quantity: [this.data.quantity, Validators.required],
      producer: [this.data.producer, Validators.required],
      status: [this.data.status, Validators.pattern('[01]')]
    });
  }
  updateAction() {
    console.log('From update action this.form.value = ', this.form.value);
    this.api.put(PRODUCT.UPDATE, this.form.value).subscribe(
      res => {
        console.log(res);
        this.toastr.success('Update successfull!');
        this.closeDialog(res);
      }, err => {
        console.log('from updateAction: err = ', err);
        let errPhase = 'Something went wrong!';
        if (err.error) {
          err.error.replace(/<h1>(.*?)<\/h1>/g, function (match, er) {
            console.log(er);
            errPhase = er;
          });
        }
        this.toastr.error(errPhase);
        this.closeDialog();
      }
    );
  }
  resetAction() {
    this.createForm();
  }
}
