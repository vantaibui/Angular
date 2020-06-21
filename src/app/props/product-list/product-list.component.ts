import {
  Component,
  OnInit,
  Input,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor() {}
  @Input() danhSachSanPham: any[] = [];

  // Object
  thongTinSanPham: any = {};

  @ViewChildren(ProductItemComponent)
  danhSachTheProductItem: QueryList<ProductItemComponent>;

  ngOnInit(): void {}

  xemChiTietSP(sp: any): void {
    // sp vai trò là event nhân từ component Con
    // Lấy sp được click gián cho thông tin sản phẩm => render lại giao diện
    this.thongTinSanPham = sp;
  }

  setDongGia() {
    let mangTheProductItem: ProductItemComponent[] = this.danhSachTheProductItem.toArray();

    // Thực hiện thay đổi giá trị trên lần lượt thẻ productItem
    mangTheProductItem[1].sp.gia = '9000';

    // Thực hiện thay đổi giá trị trên tất cả các thẻ productItem
    this.danhSachTheProductItem.forEach(
      (theSP: ProductItemComponent, index) => {
        theSP.sp.gia = '8000';
      }
    );
  }
}
