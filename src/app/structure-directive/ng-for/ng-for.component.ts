import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  danhSachNhanVien: any = [
    {ten: "Nguyen", tuoi: 18},
    {ten: "Khoa", tuoi: 19},
    {ten: "Duy", tuoi: 20},
    {ten: "Dung", tuoi: 21},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
