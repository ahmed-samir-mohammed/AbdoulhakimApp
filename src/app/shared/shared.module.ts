import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MediaDetailService } from './services/media-detail-service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule ,HttpClientModule
  ],schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  exports:[MediaDetailService]
})
export class SharedModule { }
