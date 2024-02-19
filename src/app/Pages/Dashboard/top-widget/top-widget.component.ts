
import { Component, OnInit } from '@angular/core';
import {
  faBus,
  faUser,
  faCar,
  faRoute,
  faIdCard
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-top-widget',
  templateUrl: './top-widget.component.html',
  styleUrl: './top-widget.component.scss'
})
export class TopWidgetComponent implements OnInit {
  faBus = faBus ;
  faUser =faUser;
  faRoute = faRoute;
  faCar = faCar;
  faIdCard = faIdCard;


  constructor() { }

  ngOnInit(): void {
  }

}
