import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  marginLeft = 0;
  disabled : boolean = true;
  toggle : boolean= false;

  constructor() { }

  ngOnInit() {
  }

  nextBottom(){
    this.marginLeft += 100;
  }

  prevBottom(){
    this.marginLeft -= 100;
  }

  openToggle($event : any){
    this.toggle = true;
    this.disabled = false;
  }

  closeToggle(){
    this.toggle = false;
  }
}
