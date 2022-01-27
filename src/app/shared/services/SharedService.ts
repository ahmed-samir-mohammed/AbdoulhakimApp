import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
export class SharedService {

  comp1Val: string;
  parentVal: string;
  _comp1ValueBS = new BehaviorSubject<string>('');
  _parent1ValueBS = new BehaviorSubject<string>('');
 
  constructor() {
    this.comp1Val;
    this._comp1ValueBS.next(this.comp1Val);
    this.parentVal;
    this._parent1ValueBS.next(this.parentVal);
  }

  updateComp1Val(val) {
      
    this.comp1Val = val;
    this._comp1ValueBS.next(this.comp1Val);
  }
  updatePArentVal(val) {
      
    this.parentVal = val;
    this._parent1ValueBS.next(this.parentVal);
  }


}