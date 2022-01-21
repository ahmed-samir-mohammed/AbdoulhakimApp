import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/shared/services/category-service';
import { MediaDetailService } from 'src/app/shared/services/media-detail-service';
import { SharedService } from 'src/app/shared/services/SharedService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  SideMenuist: any[] = [
    {
      name: 'الرئيسية',
      routerLink: '',
    },
    {
      name: 'الخطب المنبرية',
      routerLink: '/page',
    },
    {
      name: 'العقيدة والمنهج',
      routerLink: '/aa',
    },
    {
      name: 'الفقة',
      routerLink: '/aa',
    },
    {
      name: 'الحديث',
      routerLink: '/aa',
    },
    {
      name: 'التفسير',
      routerLink: '/aa',
    },
    {
      name: 'الفتاوي',
      routerLink: '/aa',
    },
    {
      name: 'سلاسل رمضانية',
      routerLink: '/aa',
    },
    {
      name: 'المكتبة',
      routerLink: '/aa',
    },
  ];

  constructor(private router: Router,private sharedService: SharedService,
    private activeRoute: ActivatedRoute, private _service: CategoryService) {}

    data: object[];
    pageSize: number;
    currentPage: number;
    totalRecordsCount: number;
    pageCount: number;
    filter: any = { pageNumber: 1, pageSize: 1000, name: null };
  ngOnInit(): void {
    this.getData(this.filter);
  }
  getData(filter) {

    this._service.getAll(filter)
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
    
    this.sharedService.updateComp1Val(category.categoryId);
    this.router.navigate([], { relativeTo: this.activeRoute, queryParams: { name: category.name }, replaceUrl: true })
   // this.router.navigateByUrl('/home?id=' + id)
  }
}
