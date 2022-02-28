import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/shared/services/category-service';
import { MediaDetailService } from 'src/app/shared/services/media-detail-service';
import { SharedService } from 'src/app/shared/services/SharedService';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  SideMenuist: any[] = [ ];
  date: string;
  date1: string;
  pageSize: number;
  currentPage: number;
  totalRecordsCount: number;
  pageCount: number;
  data: any;
  filter: any = { pageNumber: 1, pageSize: 10, title: null, categoryId: null };
  rootPath: string;
  constructor(private router: Router, private sharedService: SharedService,
    private activeRoute: ActivatedRoute,private _service: CategoryService,private _serviceMedia: MediaDetailService) {}

  ngOnInit(): void {
    debugger
    this.rootPath=environment.apiUrl +"/wwwroot/Media/"
    this._service.getAllBar(this.filter)
    .subscribe(res => {
      if (res.isSuccess) {
debugger
        this.data = res.data;
        this.totalRecordsCount = res.totalRecordsCount;
        this.pageCount = res.pageCount > 5 ? 5 : res.pageCount;
        this.pageSize = res.pageSize;

      } else {
        Swal.fire("حدث مشكلة", null, "error");
      }
      // this.form.reset();
    })
    this.date=  new Intl.DateTimeFormat('ar-EG-u-ca-islamic', {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(Date.now());

  this.date1=  new Intl.DateTimeFormat('ar-EG', {day: 'numeric', month: 'long',year : 'numeric'}).format(Date.now());
  }
  route(searchName){
    debugger
    if((searchName!=undefined&&searchName!=""))
    {
      this.router.navigateByUrl("/home?searchName="+ searchName)
    }
    else{
      this.router.navigateByUrl("/home")
    }
    return false
  }
  routeBar(category){
    // const category = this.gridObj.getRowInfo(event.target).rowData as any;
     if(category.isParent){
     
      
     //  this.router.navigate([], { relativeTo: this.activeRoute, queryParams: { name: category.name,parentId:category.categoryId } })
     this.router.navigateByUrl("/?name="+ category.name+"&parentId="+category.categoryId)
 
     }
     else
     {
       this.router.navigateByUrl("/?name="+ category.name+"&categoryId="+category.categoryId)
     }
     this._serviceMedia.addVisitCount(category)
     .subscribe(res => {
       if (res.isSuccess) {
 
         // this.data = res.data;
         // this.totalRecordsCount = res.totalRecordsCount;
         // this.pageCount = res.pageCount > 5 ? 5 : res.pageCount;
         // this.pageSize = res.pageSize;
 
       } else {
         Swal.fire("حدث مشكلة", null, "error");
       }
       // this.form.reset();
     })
    
      // this.router.navigateByUrl('/home?id=' + id)
   }
}
