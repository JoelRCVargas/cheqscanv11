import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  
  toggle : boolean= false;
  disabled : boolean = true;

  constructor() { }

  ngOnInit() {
  }


  openToggle($event : any){
    this.toggle = true;
    this.disabled = false;
  }

  closeToggle(){
    this.toggle = false;
  }
}
