import { Injectable } from '@angular/core';
import * as alertyfy from 'alertifyjs';


@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor() { }

 

  toastSuccess(message: string) {
    alertyfy.success(message);
  }

  toastWarning(message: string) {
    alertyfy.warning(message);
  }

  toastError(message: string) {
    alertyfy.error(message);
  }

  toastInfo(message: string) {
    alertyfy.info(message);
  }
}
