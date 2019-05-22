import { Component } from '@angular/core';

@Component({
  selector: 'ngx-gmaps',
  styleUrls: ['./gmaps.component.scss'],
  templateUrl: './gmap.component.html'
  // template: `
  //   <nb-card>
  //     <nb-card-header>Google Maps</nb-card-header>
  //     <nb-card-body>
  //       <agm-map [latitude]="lat" [longitude]="lng">
  //         <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
  //       </agm-map>
  //     </nb-card-body>
  //   </nb-card>
  // `,
})
export class GmapsComponent {

  // lat = 51.678418;
  // lng = 7.809007;



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
}
