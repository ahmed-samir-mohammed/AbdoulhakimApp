import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvertismentService } from 'src/app/shared/services/advertisment-service';
import { SharedService } from 'src/app/shared/services/SharedService';
import Swal from 'sweetalert2';

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
  rootPath: any;
  constructor(private router: Router, private sharedService: SharedService,
    private activeRoute: ActivatedRoute, private _service: AdvertismentService) { }

  data: object[];
  pageSize: number;
  currentPage: number;
  totalRecordsCount: number;
  pageCount: number;
  filter: any = { pageNumber: 1, pageSize: 1000, title: null };
  ngOnInit(): void {
    this.serverRootPath();
  }
  serverRootPath() {
    this._service.serverRootPath().subscribe(res => {
      if (res.isSuccess) {

        this.rootPath = res.data;
        this.getData(this.filter);
      }
      else {
        // this.alert.error(res.message);
      }
    })
  }
  getData(filter) {

    this._service.getAll(filter)
      .subscribe(res => {
        if (res.isSuccess) {

          this.data = res.data;
          this.totalRecordsCount = res.totalRecordsCount;
          this.pageCount = res.pageCount > 5 ? 5 : res.pageCount;
          this.pageSize = res.pageSize;

        } else {
          Swal.fire("حدث مشكلة", null, "error");
        }

      })
  }
}
