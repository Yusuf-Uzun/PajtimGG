import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private _location: Location) {}
  getSummoner(val: string) : string{
    //TODO
    console.warn(val);
    this.searchSummoner(val);
    return val;
  }

  searchSummoner(val: string){
    let region = '';
    document.getElementById('na')?.addEventListener("click", function(){
      region += 'NA'
    });
    document.getElementById('euw')?.addEventListener("click", function(){
      region += 'EUW1'
    });
    const url = `${region}/${val}`;
    this._location.go(url);
    region = '';
  }
}