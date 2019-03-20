import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  firstName: string ="Intershala";
  lastName :string ="dev";
  number1:number=10;
  constructor() { }

  ngOnInit() {
  }

}
