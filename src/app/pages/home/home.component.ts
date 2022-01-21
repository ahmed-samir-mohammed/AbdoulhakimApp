import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaDetailService } from 'src/app/shared/services/media-detail-service';
import { SharedService } from 'src/app/shared/services/SharedService';
import Swal from 'sweetalert2';

import '../../../assets/js/audio-playr.js';


declare var Plyr: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectionsettings: object;
  pageSize: number;
  currentPage: number;
  totalRecordsCount: number;
  pageCount: number;
  data: any;
  filter: any = { pageNumber: 1, pageSize: 15, title: null, categoryId: null };
  rootPath: any;
  categoryId: any;
  querySting: any;
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
        // this.form.reset();
      })
  }
}
