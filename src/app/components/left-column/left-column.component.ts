import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/shared/services/category-service';
import { MediaDetailService } from 'src/app/shared/services/media-detail-service';
import { PublicService } from 'src/app/shared/services/public.service';
import Swal from 'sweetalert2';

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
    private activeRoute: ActivatedRoute, private _serviceMedia: MediaDetailService, private _publicService: PublicService, private _service: CategoryService) {}

    data: object[];
    pageSize: number;
    currentPage: number;
    totalRecordsCount: number;
    pageCount: number;
    filter: any = { pageNumber: 1, pageSize: 1000, name: null };
  ngOnInit(): void {
   // localStorage.clear();
    this.getData(this.filter);
  }
  getData(filter) {

    this._service.getAllChoose(filter)
      .subscribe(res => {
        if (res.isSuccess) {

          this.data = res.data;
          this.totalRecordsCount = res.totalRecordsCount;
          this.pageCount = res.pageCount>5?5: res.pageCount;
          this.pageSize = res.pageSize;

        } else {
          Swal.fire("حدث مشكلة", null, "error");
        }
      
      })
  }
  route(category){
  
    if(category.isParent){
      this.router.navigateByUrl("/?name="+ category.name+"&parentId="+category.categoryId)
    //  this.router.navigate([], { relativeTo: this.activeRoute, queryParams: { name: category.name,parentId:category.categoryId }, replaceUrl: true })
 
    }
    else{
      this.router.navigateByUrl("/?name="+ category.name+"&categoryId="+category.categoryId)
    //  this.router.navigate([], { relativeTo: this.activeRoute, queryParams: { name: category.name,categoryId:category.categoryId }, replaceUrl: true })

    }
   
   
     // this.router.navigateByUrl('/home?id=' + id)
  }
}
