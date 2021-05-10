import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-filters',
  templateUrl: './check-filters.component.html',
  styleUrls: ['./check-filters.component.scss']
})
export class CheckFiltersComponent implements OnInit {

  isToggle : boolean = false;

  constructor() { }

  ngOnInit() {
  }
  
  delete(){
    
  }

  changeToggle(){
    this.isToggle = true;
  }
  
  offToggle(){
    this.isToggle = false;
  }

}
