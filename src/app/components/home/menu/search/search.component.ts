import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'menu-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  isShow: boolean;
  isShow1: boolean;

  constructor() {
    this.isShow = false;
    this.isShow1 = false;
   }

   showMenu() {
      this.isShow = true;
   }
   showMenu1() {
    this.isShow1 = true;
 }

   hiddenShow() {
    setTimeout(() => {
      if (!this.isShow1) {
        this.isShow = false;
      }
    }, 0);
   }

   hiddenShow1() {
    setTimeout(() => {
      this.isShow = false;
      this.isShow1 = false;
    }, 0);
   }

}
