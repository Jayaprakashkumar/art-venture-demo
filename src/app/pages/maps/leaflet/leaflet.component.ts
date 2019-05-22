import { Component } from '@angular/core';

import * as L from 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';

@Component({
  selector: 'ngx-leaflet',
  styleUrls: ['./leaflet.component.scss'],
  templateUrl: './leaflet.component.html'
  // template: `
  //   <nb-card>
  //     <nb-card-header>Leaflet Maps</nb-card-header>
  //     <nb-card-body>
  //       <div leaflet [leafletOptions]="options"></div>
  //     </nb-card-body>
  //   </nb-card>
  // `,
})
export class LeafletComponent {


  sales_report: {title:String, value:String, description:String}[] =[
    {
      title:'Total Sale',
      value:'$3,522,785',
      description: 'Better than lastweek(60%)'
    },
    {
      title:'Sell-Through Rate',
      value:'95%',
      description: 'Better than lastweek(60%)'
    },
    {
      title:'Top Realized Price',
      value:'$580,000',
      description: 'Better than lastweek(60%)'
    },
    {
      title:'Price to Low Estimate Price',
      value:'1.48',
      description: 'Better than lastweek(60%)'
    },
    {
      title:'1 Year Sales Volume',
      value:'5',
      description: 'Better than lastweek(60%)'
    },
    {
      title:'Average Price per cm²',
      value:'$17.85',
      description: 'Better than lastweek(60%)'
    },
    {
      title:'Most supplied price range on the secondary market',
      value:'$0 - 50,000k',
      description: 'Better than lastweek(60%)'
    }
  ]

  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
    ],
    zoom: 5,
    center: L.latLng({ lat: 38.991709, lng: -76.886109 }),
  };
}
