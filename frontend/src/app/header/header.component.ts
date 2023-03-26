import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss','./header.component.normalize.scss']
})
export class HeaderComponent {
  constructor(private _location: Location) {}
  getSummoner(val: string){
    const url = `EUW1/${val}`;

    this._location.go(url)
    
    return val;
  }
}


