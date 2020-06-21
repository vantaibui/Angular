import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() sp: any = {};
  // Nhận  hàm
  @Output() eventXemChiTiet = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  xemChiTietSP(): void{
    //Dùng eventXemChiTiet để trả giá trị về component Cha ( nơi chứa giao diện modal )
    // emit(value): value là giá trị trả ra cho component cha ứng với $event
    this.eventXemChiTiet.emit(this.sp);
  }
}
