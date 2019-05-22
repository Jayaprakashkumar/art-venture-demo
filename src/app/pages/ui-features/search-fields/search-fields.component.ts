import { Component } from '@angular/core';

@Component({
    selector: 'ngx-search-fields',
    styleUrls: ['./search-field.component.scss'],
    templateUrl: 'search-fields.component.html',
})
export class SearchComponent {



    sales_report: {title:String, value:String, description:String}[] =[
        {
          title:'Total Sale',
          value:'$638,319',
          description: 'Better than lastweek(60%)'
        },
        {
          title:'Sell-Through Rate',
          value:'68%',
          description: 'Better than lastweek(60%)'
        },
        {
          title:'Top Realized Price',
          value:'$150,000',
          description: 'Better than lastweek(60%)'
        },
        {
          title:'Price to Low Estimate Price',
          value:'0.82',
          description: 'Better than lastweek(60%)'
        },
        {
          title:'1 Year Sales Volume',
          value:'3',
          description: 'Better than lastweek(60%)'
        },
        {
          title:'Most supplied price range on the secondary market',
          value:'$0 - 5,000k',
          description: 'Better than lastweek(60%)'
        }
      ]
}
