import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  title = "Angular"
  name: string = "Angular 9"
  constructor() { }

  ngOnInit(): void {
  }
  tinhTong(){
  console.log(10);
}
}
