import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
