import { Component } from '@angular/core';
import { ProfitBarAnimationChartData } from '../../../@core/data/profit-bar-animation-chart';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent {

  // starRate = 2;
  // heartRate = 4;
  // radioGroupValue = 'This is value 2';

  private alive = true;

  linesData: { firstLine: number[]; secondLine: number[] };

  constructor(private profitBarAnimationChartService: ProfitBarAnimationChartData) {
    this.profitBarAnimationChartService.getChartData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((linesData) => {
        this.linesData = linesData;
      });
  }
}
