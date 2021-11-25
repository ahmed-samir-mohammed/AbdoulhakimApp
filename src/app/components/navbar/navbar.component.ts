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

  constructor() {}

  ngOnInit(): void {}
}
