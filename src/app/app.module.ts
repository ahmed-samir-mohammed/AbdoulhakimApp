import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { RightColumnComponent } from './components/right-column/right-column.component';
import { LeftColumnComponent } from './components/left-column/left-column.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { AnotherPageComponent } from './pages/another-page/another-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MediaDetailService } from './shared/services/media-detail-service';
import { HttpClientModule } from '@angular/common/http';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LayoutComponent,
    RightColumnComponent,
    LeftColumnComponent,
    SideMenuComponent,
    HomeComponent,
    AnotherPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule,HttpClientModule,  GridModule],
  providers: [MediaDetailService,PageService,
    SortService,
    FilterService,
    GroupService],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
      NO_ERRORS_SCHEMA
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
