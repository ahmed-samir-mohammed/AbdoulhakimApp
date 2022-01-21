import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
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
  date: string;
  date1: string;
  constructor() {}

  ngOnInit(): void {
    this.date=  new Intl.DateTimeFormat('ar-EG-u-ca-islamic', {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(Date.now());

  this.date1=  new Intl.DateTimeFormat('ar-EG', {day: 'numeric', month: 'long',year : 'numeric'}).format(Date.now());
  }
}
