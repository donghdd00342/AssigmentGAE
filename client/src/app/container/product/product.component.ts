import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {MatDialog, MatDialogRef, MatPaginator, MatSort, MatTabGroup, MatTableDataSource} from '@angular/material';
import {ApiService} from '../../share/api.service';
import {PRODUCT} from '../../constant/endpoint.constant';
import {Product} from '../../interface/product';
import {EditDeleteProductComponent} from '../edit-delete-product/edit-delete-product.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // displayedColumns = ['select', 'name', 'unitPrice', 'rate', 'quantity', 'producer'];
  displayedColumns = ['name', 'unitPrice', 'rate', 'quantity', 'producer'];
  dataSource: MatTableDataSource<Product>;
  selection: Product;

  formCreate: FormGroup;
  producers: string[];
  rates = Array.from(Array(11).keys());

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTabGroup) matTabGroup: MatTabGroup;

  constructor(private toastr: ToastrService,
              private api: ApiService,
              public dialog: MatDialog,
              @Inject(FormBuilder) private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.initDataSource();
    this.producers = ['Samsung', 'Apple', 'Google', 'Sony', 'LG', 'Panasonic', 'Tosiba', 'Facebook'];
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  setSelected(row: any) {
    this.selection = row;
    console.log(this.selection, row);
    this.openDialog(row);
  }

  openDialog(row?: any, component?: any): void {
    const dialogRef = this.dialog.open(component ? component : EditDeleteProductComponent, {
      width: '600px',
      data: row ? row : ''
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed result = ', result);
      if (result) {
        this.initDataSource();
      }
    });
  }

  initDataSource() {
    this.api.get(PRODUCT.GET_ALL).subscribe(
      res => {
        console.log(res.products);
        const listProducts = res.products.sort(function (p1: Product, p2: Product) {
          if (p1.id < p2.id) {
            return 1;
          } else if (p1.id > p2.id) {
            return -1;
          } else {
            return 0;
          }
        });
        this.dataSource = new MatTableDataSource(listProducts);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      err => {
        console.log(err);
        this.toastr.error('Something went wrong!');
      });
    this.matTabGroup.selectedIndex = 0;
  }

  createAction() {
    console.log('from create action form.value = ', this.formCreate.value);
    this.api.post(PRODUCT.CREATE_NEW, this.formCreate.value).subscribe(
      res => {
        console.log(res);
        this.toastr.success('Create new success!');
        this.initDataSource();
        this.formCreate.reset();
      }, err => {
        console.log(err);
        this.toastr.error('Something went wrong!');
      }
    );
  }

  createForm() {
    this.formCreate = this.fb.group({
      name: ['', Validators.required],
      unitPrice: ['', Validators.required],
      rate: ['', Validators.required],
      quantity: ['', Validators.required],
      producer: ['', Validators.required],
    });
  }

  quickAdd() {
    this.openDialog('', QuickAddComponent);
  }
}

@Component({
  selector: 'app-quick-add',
  template: `
    <div>
      <h3>Quick add sample data</h3>
      <div class="button-row">
        <button mat-raised-button (click)="onClick(5)">Add 5</button>
        <button mat-raised-button color="primary" (click)="onClick(10)">Add 10</button>
        <button mat-raised-button color="accent" (click)="onClick(15)">Add 15</button>
        <button mat-raised-button color="warn" (click)="onClick(20)">Add 20</button>
      </div>
    </div>
  `,
})
export class QuickAddComponent {

  constructor(public dialogRef: MatDialogRef<QuickAddComponent>,
              private toastr: ToastrService,
              private api: ApiService) {
  }

  onClick(num: number): void {
    console.log(num);
    this.api.get(PRODUCT.MOCK_SAMPLE_DATA + '?number=' + num).subscribe(
      res => {
        console.log(res);
        this.toastr.success('Quick add ' + num + ' success!');
        this.dialogRef.close(num);
      }, err => {
        console.log(err);
        this.toastr.error('Something went wrong!');
        this.dialogRef.close();
      }
    );
  }

}
