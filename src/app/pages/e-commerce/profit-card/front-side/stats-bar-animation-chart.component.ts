import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { LayoutService } from '../../../../@core/utils/layout.service';

@Component({
  selector: 'ngx-stats-bar-animation-chart',
  template: `
    <div echarts
         [options]="options"
         class="echart"
         (chartInit)="onChartInit($event)">
    </div>
  `,
})
export class StatsBarAnimationChartComponent implements AfterViewInit, OnDestroy {

  private alive = true;

  @Input() linesData: { firstLine: any[]; secondLine: any[], thirdLine: any[], fourthLine: any[] } = {
    firstLine: [],
    secondLine: [],
    thirdLine: [],
    fourthLine: []
  };

  echartsIntance: any;
  options: any = {};
  xAxisData: any = [];

  constructor(private theme: NbThemeService,
    private layoutService: LayoutService) {
    this.layoutService.onChangeLayoutSize()
      .pipe(
        takeWhile(() => this.alive),
      )
      .subscribe(() => this.resizeChart());
  }

  ngAfterViewInit() {
    this.theme.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(config => {
        const profitBarAnimationEchart: any = config.variables.profitBarAnimationEchart;

        this.setChartOption(profitBarAnimationEchart);
      });
  }

  setChartOption(chartVariables) {
    this.options = {
      color: [
        chartVariables.firstAnimationBarColor,
        chartVariables.secondAnimationBarColor,
      ],
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      },
      legend: {
        data: ['Hammer Price', 'Low Estimate Price', 'High Estimate Price'],
        borderWidth: 0,
        borderRadius: 0,
        itemWidth: 15,
        itemHeight: 15,
        textStyle: {
          color: chartVariables.textColor,
        },
      },
      tooltip: {
        axisPointer: {
          type: 'shadow',
        },
        textStyle: {
          color: chartVariables.tooltipTextColor,
          fontWeight: chartVariables.tooltipFontWeight,
          fontSize: chartVariables.tooltipFontSize,
        },
        position: 'top',
        backgroundColor: chartVariables.tooltipBg,
        borderColor: chartVariables.tooltipBorderColor,
        borderWidth: chartVariables.tooltipBorderWidth,
        formatter: params => {
          console.log(params);
          return `${params.seriesName}:${this.linesData.fourthLine[params.dataIndex]}: $ ${params.value}`
        },
        extraCssText: chartVariables.tooltipExtraCss,
      },
      xAxis: [
        {
          data: this.linesData.firstLine.map((_, index) => index),
          // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          silent: false,
          axisLine: {
            show: false,
          },
          axisLabel: {
            interval: true,
          },
          axisTick: {
            show: true,
          },
        },
      ],
      yAxis: [
        {
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: true,
          },
          axisTick: {
            show: true,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: chartVariables.splitLineStyleColor,
              opacity: chartVariables.splitLineStyleOpacity,
              width: chartVariables.splitLineStyleWidth,
            },
          },
        },
      ],
      series: [
        {
          name: 'Hammer Price',
          type: 'bar',
          data: this.linesData.firstLine,
          animationDelay: idx => idx * 10,
        },
        {
          name: 'Low Estimate Price',
          type: 'line',
          data: this.linesData.secondLine,
          animationDelay: idx => idx * 10 + 100,
        },
        {
          name: 'High Estimate Price',
          type: 'line',
          data: this.linesData.thirdLine,
          animationDelay: idx => idx * 10 + 1000,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: idx => idx * 5,
    };

    console.log(this.options);
    // for (let i = 0; i < 100; i++) {
    //   this.xAxisData.push('Category ' + i);
    //   this.linesData.firstLine.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
    //   this.linesData.firstLine.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    // }
  }

  onChartInit(echarts) {
    this.echartsIntance = echarts;
  }

  resizeChart() {
    if (this.echartsIntance) {
      this.echartsIntance.resize();
    }
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
