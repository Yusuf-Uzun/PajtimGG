import { Component } from '@angular/core';
import { Location } from '@angular/common';
import axios from 'axios';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','./header.component.normalize.css']
})
export class HeaderComponent {
  readonly ROOT_URL = 'http://localhost:6969/summoners/EUW1/Yusi';
  //readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  dataInfo: any;
  name: any; 
  summonerLevel: any;
  
  constructor() {}
  
  getSummoner(){
    return axios.get(this.ROOT_URL)
    .then(({data}) => this.dataInfo = data)
    .then(() => {
      this.name = this.dataInfo['0'];
      this.summonerLevel = this.dataInfo['1'] ;
    })
    .catch((err) => console.log(err))
  }
}