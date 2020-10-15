import { Component, OnInit } from '@angular/core';


const TAB_INDEX_KEY = "TAB_INDEX_KEY"; 
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  selectedTabIndex : number = null;
  
  constructor() {

  }

  ngOnInit(): void {
    let tabIndex = localStorage.getItem(TAB_INDEX_KEY);
    this.selectedTabIndex = parseInt(tabIndex);
  }
 
  selectedTabIndexChange(index : number) {
    localStorage.setItem(TAB_INDEX_KEY, index.toString());
    this.selectedTabIndex = index;
  }
}
