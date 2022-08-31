import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/shared/services/category-service';
import { MediaDetailService } from 'src/app/shared/services/media-detail-service';
import { PublicService } from 'src/app/shared/services/public.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  dataContact: any;
  rootPath: any;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private _serviceMedia: MediaDetailService,
    private _publicService: PublicService,
    private _service: CategoryService
  ) {}

  data: object[];
  pageSize: number;
  currentPage: number;
  totalRecordsCount: number;
  pageCount: number;
  filter: any = { pageNumber: 1, pageSize: 1000, name: null };
  ngOnInit(): void {
    this.getAllContact(this.filter);
    this.rootPath = environment.url + '/wwwroot/Contact/';
  }

  getAllContact(filter) {
    this._serviceMedia.getAllContact(filter).subscribe((res) => {
      if (res.isSuccess) {
        this.dataContact = res.data;
      } else {
        Swal.fire('حدث مشكلة', null, 'error');
      }
      // this.form.reset();
    });
  }
}
