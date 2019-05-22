import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';

@Component({
  selector: 'ngx-typography',
  styleUrls: ['./typography.component.scss'],
  templateUrl: './typography.component.html',
})
export class TypographyComponent {


  sales_report: {title:String, value:String, description:String}[] =[
    {
      title:'Total Sale',
      value:'$6,628,818',
      description: 'Better than lastweek(60%)'
    },
    {
      title:'Sell-Through Rate',
      value:'88%',
      description: 'Better than lastweek(60%)'
    },
    {
      title:'Top Realized Price',
      value:'$580,000',
      description: 'Better than lastweek(60%)'
    },
    {
      title:'Price to Low Estimate Price',
      value:'1.09',
      description: 'Better than lastweek(60%)'
    },
    {
      title:'1 Year Sales Volume',
      value:'151',
      description: 'Better than lastweek(60%)'
    },
    {
      title:'Average Price per cm²',
      value:'$0.48',
      description: 'Better than lastweek(60%)'
    },
    {
      title:'Most supplied price range on the secondary market',
      value:'$0 - 10,000k',
      description: 'Better than lastweek(60%)'
    }
  ]









  // breakpoint: NbMediaBreakpoint;
  // breakpoints: any;
  // themeSubscription: any;

  // constructor(private themeService: NbThemeService,
  //             private breakpointService: NbMediaBreakpointsService) {

  //   this.breakpoints = this.breakpointService.getBreakpointsMap();
  //   this.themeSubscription = this.themeService.onMediaQueryChange()
  //     .subscribe(([oldValue, newValue]) => {
  //       this.breakpoint = newValue;
  //     });
  // }

  // ngOnDestroy() {
  //   this.themeSubscription.unsubscribe();
  // }
}
