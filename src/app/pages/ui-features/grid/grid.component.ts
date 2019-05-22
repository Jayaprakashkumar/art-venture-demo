import { Component } from '@angular/core';

@Component({
  selector: 'ngx-grid',
  styleUrls: ['./grid.component.scss'],
  templateUrl: './grid.component.html',
})
export class GridComponent {

  sales_report: {title:String, value:String}[] =[
    {
      title:'Total Sale',
      value:'$5,609,277'
    },
    {
      title:'Sell-Through Rate',
      value:'91%'
    },
    {
      title:'Top Realized Price',
      value:'$600,000'
    },
    {
      title:'Price to Low Estimate Price',
      value:'1.353'
    },
    {
      title:'1 Year Sales Volume',
      value:'8'
    },
    {
      title:'Average Price per cm²',
      value:'$18.77'
    },
    {
      title:'Most supplied price range on the secondary market',
      value:'$20,000 - 40,000k'
    }
  ]
}
