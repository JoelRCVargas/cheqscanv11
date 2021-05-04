import { Component, OnInit } from '@angular/core';
import { NgPopupsService } from 'ng-popups';


@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {

  isToggle : boolean = false;

  constructor(private ngPopups: NgPopupsService) { }

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
