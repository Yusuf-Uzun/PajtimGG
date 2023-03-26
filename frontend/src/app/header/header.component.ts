import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private _location: Location) {}
  getSummoner(val: string){
    console.warn(val);

    const url = `EUW1/${val}`;

    console.warn(url);

    this._location.go(url)
    return val;
  }
}


