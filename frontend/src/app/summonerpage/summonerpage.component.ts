import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-summonerpage',
  templateUrl: './summonerpage.component.html',
  styleUrls: ['./summonerpage.component.scss']
})
export class SummonerpageComponent implements OnInit{
  readonly ROOT_URL = 'http://localhost:6969/summoners/EUW1/Yusi';
  //readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  dataInfo: any;
  name: any; 
  summonerLevel: any;
  constructor() {}

  getSummoner(){
    axios.get(this.ROOT_URL)
    .then(({data}) => this.dataInfo = data)
    .then(() => {
      this.name = this.dataInfo['0'];
      this.summonerLevel = this.dataInfo['1'] ;
    })
    .catch((err) => console.log(err))
  }
  ngOnInit(){
    this.getSummoner
  }
}
