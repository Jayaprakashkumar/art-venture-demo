import { Observable } from 'rxjs';

export abstract class ProfitBarAnimationChartData {
  abstract getChartData(): Observable<{ firstLine: any[]; secondLine: any[]; thirdLine: any[]; fourthLine: any[]; }>;
}
