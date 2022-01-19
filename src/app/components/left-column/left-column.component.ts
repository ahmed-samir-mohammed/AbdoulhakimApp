import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaDetailService } from 'src/app/shared/services/media-detail-service';
import { PublicService } from 'src/app/shared/services/public.service';

@Component({
  selector: 'app-left-column',
  templateUrl: './left-column.component.html',
  styleUrls: ['./left-column.component.scss'],
})
export class LeftColumnComponent implements OnInit {
  leftSideList: any[] = [
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

  constructor(private router: Router,
    private activeRoute: ActivatedRoute, private _service: MediaDetailService, private _publicService: PublicService) {}

  ngOnInit(): void {}
}
