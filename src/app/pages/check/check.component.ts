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
    // Confirm
    this.ngPopups.confirm('¿Estás seguro que quieres borrar?', {
      theme: 'material',
      okButtonText: 'continuar',
      cancelButtonText: 'regresar',
      color: 'white',
      title: 'NOTIFICACIÓN'
    });
  }

  changeToggle(){
    this.isToggle = true;
  }
  
  offToggle(){
    this.isToggle = false;
  }
}
