import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterService, GridComponent, PagerComponent, PageService, SortService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { MediaDetailService } from 'src/app/shared/services/media-detail-service';
import { SharedService } from 'src/app/shared/services/SharedService';
import Swal from 'sweetalert2';

import '../../../assets/js/audio-playr.js';


declare var Plyr: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [PageService, SortService, FilterService, ToolbarService]
})
export class HomeComponent implements OnInit {
  selectionsettings: object;
  pageSize: number;
  currentPage: number;
  totalRecordsCount: number;
  pageCount: number;
  data: any;
  filter: any = { pageNumber: 1, pageSize: 200, title: null, categoryId: null };
  rootPath: any;
  categoryId: any;
  querySting: any;
  isParent: string;
  customAttributes: object;
  @ViewChild('grid') gridObj: GridComponent;
  @ViewChild("pager") pager: PagerComponent;
  change: any;
  constructor(private router: Router, private sharedService: SharedService,
    private activeRoute: ActivatedRoute, private _service: MediaDetailService) { }

  ngOnInit(): void {

   // this.filter.categoryId = this.activeRoute.snapshot.queryParams['id']
    this.activeRoute.queryParams.subscribe(parm => {
      
      this.querySting = parm['name'];
      if ( this.querySting) {
        this.filter.categoryId = this.sharedService.comp1Val;
       
        this.serverRootPath();
      }
      else{
        this.filter.categoryId=localStorage.getItem("categoryId");
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
    this._service.serverRootPath().subscribe(res => {
      if (res.isSuccess) {

        this.rootPath = res.data;
        this.isParent=localStorage.getItem("isParent");
        if(this.sharedService.parentVal!=undefined||this.isParent!=undefined){
          if(this.sharedService.parentVal!=undefined){
            this.filter.categoryId = this.sharedService.parentVal;
          }
          else{
            this.filter.categoryId=localStorage.getItem("categoryId");
          }
         
          this.getAllByCategoryId(this.filter);
        }
        else{
          this.getData(this.filter);
        }
      
      
      }
      else {
        // this.error(res.message);
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
        // this.form.reset();
      })
  }
  getAllByCategoryId(filter) {
    
  
    this._service.getAllByCategoryId(filter)
      .subscribe(res => {
        if (res.isSuccess) {

          this.data = res.data;
          this.totalRecordsCount = res.totalRecordsCount;
          this.pageCount = res.pageCount > 5 ? 5 : res.pageCount;
          this.pageSize = res.pageSize;

        } else {
          Swal.fire("حدث مشكلة", null, "error");
        }
        // this.form.reset();
      })
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
}
