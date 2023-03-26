import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss','./header.component.normalize.scss']
})
export class HeaderComponent {
  region: any; 
  summoner: any; 
  
  constructor(private _location: Location) {}
  
  getSummoner(val: string): void{
    this.summoner = val;

  }

}


