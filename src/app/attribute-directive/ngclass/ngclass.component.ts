import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css'],
})
export class NgclassComponent implements OnInit {
  dkFont: boolean = true;
  dkColor: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
