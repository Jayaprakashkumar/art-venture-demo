import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-echarts-line',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsLineComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  data_arr:{RowLabels:any, Sold:any, Unsold:any,Rate:any }[]=[
    {
      "RowLabels": 1984,
      "Sold": 2,
      "Unsold": 1,
      "Rate": "66.67"
    },
    {
      "RowLabels": 1985,
      "Sold": 5,
      "Unsold": 0,
      "Rate": "100.00"
    },
    {
      "RowLabels": 1986,
      "Sold": 7,
      "Unsold": 0,
      "Rate": "100.00"
    },
    {
      "RowLabels": 1987,
      "Sold": 5,
      "Unsold": 0,
      "Rate": "100.00"
    },
    {
      "RowLabels": 1988,
      "Sold": 7,
      "Unsold": 1,
      "Rate": "87.50"
    },
    {
      "RowLabels": 1989,
      "Sold": 15,
      "Unsold": 1,
      "Rate": "93.75"
    },
    {
      "RowLabels": 1990,
      "Sold": 11,
      "Unsold": 0,
      "Rate": "100.00"
    },
    {
      "RowLabels": 1991,
      "Sold": 7,
      "Unsold": 1,
      "Rate": "87.50"
    },
    {
      "RowLabels": 1992,
      "Sold": 7,
      "Unsold": 0,
      "Rate": "100.00"
    },
    {
      "RowLabels": 1993,
      "Sold": 8,
      "Unsold": 0,
      "Rate": "100.00"
    },
    {
      "RowLabels": 1994,
      "Sold": 7,
      "Unsold": 0,
      "Rate": "100.00"
    },
    {
      "RowLabels": 1995,
      "Sold": 5,
      "Unsold": 0,
      "Rate": "100.00"
    },
    {
      "RowLabels": 1996,
      "Sold": 3,
      "Unsold": 0,
      "Rate": "100.00"
    },
    {
      "RowLabels": 1997,
      "Sold": 10,
      "Unsold": 1,
      "Rate": "90.91"
    },
    {
      "RowLabels": 1998,
      "Sold": 7,
      "Unsold": 2,
      "Rate": "77.78"
    },
    {
      "RowLabels": 1999,
      "Sold": 5,
      "Unsold": 2,
      "Rate": "71.43"
    },
    {
      "RowLabels": 2000,
      "Sold": 6,
      "Unsold": 0,
      "Rate": "100.00"
    },
    {
      "RowLabels": 2001,
      "Sold": 10,
      "Unsold": 4,
      "Rate": "71.43"
    },
    {
      "RowLabels": 2002,
      "Sold": 13,
      "Unsold": 4,
      "Rate": "76.47"
    },
    {
      "RowLabels": 2003,
      "Sold": 14,
      "Unsold": 2,
      "Rate": "87.50"
    },
    {
      "RowLabels": 2004,
      "Sold": 11,
      "Unsold": 1,
      "Rate": "91.67"
    },
    {
      "RowLabels": 2005,
      "Sold": 27,
      "Unsold": 4,
      "Rate": "87.10"
    },
    {
      "RowLabels": 2006,
      "Sold": 20,
      "Unsold": 2,
      "Rate": "90.91"
    },
    {
      "RowLabels": 2007,
      "Sold": 23,
      "Unsold": 0,
      "Rate": "100.00"
    },
    {
      "RowLabels": 2008,
      "Sold": 10,
      "Unsold": 9,
      "Rate": "52.63"
    },
    {
      "RowLabels": 2009,
      "Sold": 17,
      "Unsold": 4,
      "Rate": "80.95"
    },
    {
      "RowLabels": 2010,
      "Sold": 12,
      "Unsold": 4,
      "Rate": "75.00"
    },
    {
      "RowLabels": 2011,
      "Sold": 20,
      "Unsold": 4,
      "Rate": "83.33"
    },
    {
      "RowLabels": 2012,
      "Sold": 18,
      "Unsold": 2,
      "Rate": "90.00"
    },
    {
      "RowLabels": 2013,
      "Sold": 21,
      "Unsold": 6,
      "Rate": "77.78"
    },
    {
      "RowLabels": 2014,
      "Sold": 25,
      "Unsold": 3,
      "Rate": "89.29"
    },
    {
      "RowLabels": 2015,
      "Sold": 25,
      "Unsold": 7,
      "Rate": "78.13"
    },
    {
      "RowLabels": 2016,
      "Sold": 27,
      "Unsold": 2,
      "Rate": "93.10"
    },
    {
      "RowLabels": 2017,
      "Sold": 40,
      "Unsold": 3,
      "Rate": "93.02"
    },
    {
      "RowLabels": 2018,
      "Sold": 42,
      "Unsold": 8,
      "Rate": "84.00"
    }
   ]
  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.danger, colors.primary, colors.info],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}',
        },
        legend: {
          left: 'left',
          data: ['Sell Through Rate'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        xAxis: [
          {
            type: 'category',
            data: this.map_data(this.data_arr,"RowLabels"),
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        grid: {
          left: '3',
          right: '4',
          bottom: '3',
          containLabel: true,
        },
        series: [
          {
            name: 'Line 1',
            type: 'line',
            data: this.map_data(this.data_arr,"Rate"),
          },
        ],
      };
    });
  }

  map_data(arr:any, key:string){
    return arr.map((val:any)=>{
      return val[key]
    })
  }
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
