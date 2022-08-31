import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FilterService,
  GridComponent,
  PagerComponent,
  PageService,
  SortService,
  ToolbarService,
} from '@syncfusion/ej2-angular-grids';
import { MediaDetailService } from 'src/app/shared/services/media-detail-service';
import { SharedService } from 'src/app/shared/services/SharedService';
import Swal from 'sweetalert2';
import { L10n, setCulture } from '@syncfusion/ej2-base';
import '../../../assets/js/audio-playr.js';
import { Locales } from 'src/app/shared/helper/constants';
import { environment } from 'src/environments/environment';
setCulture('ar-AE');
L10n.load(Locales.getLocaleObjects());
declare var Plyr: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [PageService, SortService, FilterService, ToolbarService],
})
export class HomeComponent implements OnInit {
  selectionsettings: object;
  pageSize: number;
  currentPage: number;
  totalRecordsCount: number;
  pageCount: number;
  data: any;
  filter: any = { pageNumber: 1, pageSize: 15, title: null, categoryId: null };
  filterList: any = { pageNumber: 1, pageSize: 15, name: null };
  rootPath: any;
  categoryId: any;
  querySting: any;
  isParent = true;
  customAttributes: object;
  @ViewChild('grid') gridObj: GridComponent;
  @ViewChild('pager') pager: PagerComponent;
  change: any;
  dataContact: any;
  constructor(
    private router: Router,
    private sharedService: SharedService,
    private activeRoute: ActivatedRoute,
    private _service: MediaDetailService
  ) {}

  ngOnInit(): void {
    // this.filter.categoryId = this.activeRoute.snapshot.queryParams['id']
    this.activeRoute.queryParams.subscribe((parm) => {
      this.querySting = parm['name'];
      let searchName = parm['searchName'];
      if (this.querySting) {
        this.filter.name = null;
        this.serverRootPath();
      } else if (searchName != undefined) {
        this.isParent = true;
        this.filter.name = searchName;
        this.filter.categoryId = null;
        this.querySting = 'نتائج البحث';
        this.rootPath = environment.apiUrl + '/wwwroot/Media/';
        this.getAllByCategoryId(this.filter);
      } else if (this.querySting == undefined && searchName == undefined) {
        this.serverRootPath();
      }
    });

    const player = new Plyr('#player');
    //  player.off();
  }
  @ViewChild('videoPlayer') videoplayer: any;
  public startedPlay: boolean = false;
  public show: boolean = false;
  // pauseVideo(videoplayer) {
  //  // videoplayer.nativeElement.play();
  //   // this.startedPlay = true;
  //   // if(this.startedPlay == true)
  //   // {
  //   setTimeout(() => {
  //     videoplayer.nativeElement.pause();
  //     if (videoplayer.nativeElement.paused) {
  //       this.show = !this.show;
  //     }
  //   }, 5000);
  //   // }
  // }

  closebutton(videoplayer) {
    this.show = !this.show;
    videoplayer.nativeElement.play();
  }
  serverRootPath() {
    this._service.serverRootPath().subscribe((res) => {
      if (res.isSuccess) {
        this.rootPath = res.data;
        let parentId = this.activeRoute.snapshot.queryParams['parentId'];

        if (parentId != undefined) {
          this.isParent = true;
          this.filter.categoryId = parentId;
          this.getAllByCategoryId(this.filter);
        } else {
          this.isParent = false;
          let categoryId = this.activeRoute.snapshot.queryParams['categoryId'];
          this.filter.categoryId = categoryId;
          this.getData(this.filter);
        }
      } else {
        // this.error(res.message);
      }
    });
  }

  getData(filter) {
    this._service.getAll(filter).subscribe((res) => {
      if (res.isSuccess) {
        this.data = res.data;

        this.totalRecordsCount = res.totalRecordsCount;
        this.pageCount = res.pageCount > 5 ? 5 : res.pageCount;
        this.pageSize = res.pageSize;
      } else {
        Swal.fire('حدث مشكلة', null, 'error');
      }
      // this.form.reset();
    });
  }
  getAllByCategoryId(filter) {
    this._service.getAllByCategoryId(filter).subscribe((res) => {
      if (res.isSuccess) {
        this.data = res.data;
        if (res.data.length > 0 && res.data[0].mediaDetailId != undefined) {
          this.rootPath = environment.url + '/wwwroot/Media/';
          this.isParent = false;
        }
        this.totalRecordsCount = res.totalRecordsCount;
        this.pageCount = res.pageCount > 5 ? 5 : res.pageCount;
        this.pageSize = res.pageSize;
      } else {
        Swal.fire('حدث مشكلة', null, 'error');
      }
      // this.form.reset();
    });
  }
  changePage(event) {
    if (this.change) {
      if (event.currentPage) {
        this.filter.pageNumber = event.currentPage;
        this.getData(this.filter);
        return;
      }
    }
    this.change = event.pointerType;
  }
  changeListPage(event) {
    if (this.change) {
      if (event.currentPage) {
        this.filter.pageNumber = event.currentPage;
        this.getAllByCategoryId(this.filter);
        return;
      }
    }
    this.change = event.pointerType;
  }
  route(category) {
    // const category = this.gridObj.getRowInfo(event.target).rowData as any;
    if (category.isParent) {
      //  this.router.navigate([], { relativeTo: this.activeRoute, queryParams: { name: category.name,parentId:category.categoryId } })
      this.router.navigateByUrl(
        '/?name=' + category.name + '&parentId=' + category.categoryId
      );
    } else {
      this.router.navigateByUrl(
        '/?name=' + category.name + '&categoryId=' + category.categoryId
      );
    }
    this._service.addVisitCount(category).subscribe((res) => {
      if (res.isSuccess) {
        // this.data = res.data;
        // this.totalRecordsCount = res.totalRecordsCount;
        // this.pageCount = res.pageCount > 5 ? 5 : res.pageCount;
        // this.pageSize = res.pageSize;
      } else {
        Swal.fire('حدث مشكلة', null, 'error');
      }
      // this.form.reset();
    });

    // this.router.navigateByUrl('/home?id=' + id)
  }
  getAllContact(filter) {
    this._service.getAllContact(filter).subscribe((res) => {
      if (res.isSuccess) {
        this.dataContact = res.data;
      } else {
        Swal.fire('حدث مشكلة', null, 'error');
      }
      // this.form.reset();
    });
  }
}
