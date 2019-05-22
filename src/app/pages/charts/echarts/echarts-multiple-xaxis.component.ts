import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-echarts-multiple-xaxis',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsMultipleXaxisComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

chart_data:{Year:any, artistPerChange:any, marketPerChange: any}[]=[
    {
      "Year": 2007,
      "artistPerChange": "",
      "marketPerChange": ""
    },
    {
      "Year": 2008,
      "artistPerChange": "-17.21",
      "marketPerChange": "-5.92"
    },
    {
      "Year": 2009,
      "artistPerChange": "3.68",
      "marketPerChange": "-36.29"
    },
    {
      "Year": 2010,
      "artistPerChange": "35.66",
      "marketPerChange": "44.30"
    },
    {
      "Year": 2011,
      "artistPerChange": "-37.21",
      "marketPerChange": "13.33"
    },
    {
      "Year": 2012,
      "artistPerChange": "56.20",
      "marketPerChange": "-12.23"
    },
    {
      "Year": 2013,
      "artistPerChange": "-6.98",
      "marketPerChange": "11.64"
    },
    {
      "Year": 2014,
      "artistPerChange": "25.41",
      "marketPerChange": "7.74"
    },
    {
      "Year": 2015,
      "artistPerChange": "-13.18",
      "marketPerChange": "-6.45"
    },
    {
      "Year": 2016,
      "artistPerChange": "-1.40",
      "marketPerChange": "-10.82"
    },
    {
      "Year": 2017,
      "artistPerChange": "-14.00",
      "marketPerChange": "11.95"
    },
    {
      "Year": 2018,
      "artistPerChange": "92.56",
      "marketPerChange": "2.04"
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
        color: [colors.success, colors.info],
        tooltip: {
          trigger: 'none',
          axisPointer: {
            type: 'cross',
          },
        },
        legend: {
          data: ['Artist % Change', 'Market % Change'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        grid: {
          top: 70,
          bottom: 50,
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors.info,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
            axisPointer: {
              label: {
                formatter: params => {
                  console.log(params);
                  return (
                    'Precipitation  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                  );
                },
              },
            },
            data: this.map_data(this.chart_data, "Year"),
          },
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors.success,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
            axisPointer: {
              label: {
                formatter: params => {
                  return (
                     params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                  );
                },
              },
            },
            data: this.map_data(this.chart_data, "Year")
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
        series: [
          {
            name: 'Artist % Change',
            type: 'line',
            xAxisIndex: 1,
            smooth: true,
            data: this.map_data(this.chart_data, "artistPerChange"),
          },
          {
            name: 'Market % Change',
            type: 'line',
            smooth: true,
            data: this.map_data(this.chart_data, "marketPerChange"),
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
