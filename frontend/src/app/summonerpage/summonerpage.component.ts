import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-summonerpage',
  templateUrl: './summonerpage.component.html',
  styleUrls: ['./summonerpage.component.scss']
})
export class SummonerpageComponent{
  summonerName: any;
  constructor(){
    this.summonerName = HeaderComponent.name;
  }
}
