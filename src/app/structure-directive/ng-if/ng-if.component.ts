import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css'],
})
export class NgIfComponent implements OnInit {
  status: boolean = false;
statusLogin: boolean = true;
  constructor() {}

  ngOnInit(): void {}
  show() {
    this.status = true;
  }
  hidden() {
    this.status = false;
  }
  dangXuat(){
    this.statusLogin = false;
  }
  dangNhap(){
    this.statusLogin = true;
  }
}
