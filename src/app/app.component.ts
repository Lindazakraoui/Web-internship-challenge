import { Component } from '@angular/core';
import { CountriesData } from 'countries-map';
import{ TimeZoneService } from './time-zone.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SPA';
  constructor(private api: TimeZoneService){
    this.api.getData().subscribe(data=>{
      console.warn(data);
    })
  }
  public mapData: CountriesData = {
    'ML': { 'value': 0 },
    'BF': { 'value': 0 },
    'CI': { 'value': 0 },
    'CM': { 'value': 60 },
    'GQ': { 'value': 60 },
    'LS': { 'value': 120 },
  }
  }
  

