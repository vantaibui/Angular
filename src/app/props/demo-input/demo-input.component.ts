import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-demo-input',
  templateUrl: './demo-input.component.html',
  styleUrls: ['./demo-input.component.css'],
})
export class DemoInputComponent implements OnInit {
  constructor() {}
  // export value
  value: Date;
  text: string;
  public dsSanPham: any[] = [
    { ma: 1, tenSP: 'Xperia m4 aqua', gia: 1000 },
    { ma: 2, tenSP: 'Xperia xz 1', gia: 5000 },
    { ma: 3, tenSP: 'Xperia xz', gia: 1000 },
  ];

  // DOM đến thẻ là component <app-product-list></app-product-list>
  @ViewChild('tagProductList')
  tagProductList: ProductListComponent;

  ngOnInit(): void {}
  // Thêm sản phẩm
  themSanPham(maSP: string, tenSP: string, gia: string) {
    // this.dsSanPham.push(ma, tenSP, gia);
    console.log(maSP, tenSP, gia);
    // DOM đến thẻ <app-product-list> => thay đổi thuộc tính danhSachSanPham => component <app-product-list>: sẽ tự động render lại
    this.tagProductList.danhSachSanPham.push({ maSP, tenSP, gia });
  }
}
