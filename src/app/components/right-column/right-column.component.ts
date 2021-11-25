import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-column',
  templateUrl: './right-column.component.html',
  styleUrls: ['./right-column.component.scss'],
})
export class RightColumnComponent implements OnInit {
  rightSideList: any[] = [
    {
      header: 'اعلان',
      textName: 'لصفحة ما سيلهي القارئ عن التركيز على الشك',
      img: '../../../assets/img/img_1.jpg',
    },
    { img: '../../../assets/img/img_1.jpg' },
    { img: '../../../assets/img/img_1.jpg' },
    { textName: 'لصفحة ما سيلهي القارئ عن التركيز على الشك' },
    { header: 'اعلان' },
    { header: 'اعلان' },
    { header: 'اعلان' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
