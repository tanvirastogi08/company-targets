import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { TargetListService } from '../_services/targetList.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
})
export class ChartComponent implements OnInit {
  targetList: Observable<any>;

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: Array<string> = [];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: Array<any> = [];

  constructor(private _targetList: TargetListService) {
    this._targetList.getTheTargetList()
      .subscribe((response) => {
        this.targetList = response;
        this.getChartData();
      });
  }

  ngOnInit() {
  }

  public getChartData() {
    let tempArray: string[] = [];

    this.targetList.forEach((result: any) => {
      this.barChartLabels.push(result.name);
      tempArray.push(result.currentFinancialGrowth);
    })
    tempArray.push('0');
    
    let tempData = {
      data: tempArray,
      label: 'Financial Growth'
    };

    this.barChartData.push(tempData);
  }

  // events
  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }

}
