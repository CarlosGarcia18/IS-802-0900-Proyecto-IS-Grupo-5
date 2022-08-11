import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../../SERVICES/charts.service';
import { categories } from '../../../assets/interfaces';
type chartType = 'bar' | 'doughnut' | 'line' | 'pie';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  constructor(private ChartsService: ChartsService) {}

  labels: string[] = [];
  data: number[] = [];
  selectedTypeChartCategories: chartType = 'bar';
  topCategories={
    label:"",
    value:0
  }
  downCategories={
    label:"",
    value:0
  }

  selectChart = {
    select: 0,
  };

  categories: categories[] = [];

  ngOnInit(): void {
    this.ChartsService.getProductCategories().subscribe((res: any) => {
      this.categories = res;
    });
    this.getDataCategories('1');
  }

  getDataCategories(id: string) {
    this.ChartsService.getDataCategory(this.selectChart.select).subscribe(
      (res: any) => {
        if (res.status == '200') {
          this.infoData(res.labels[0],res.labels[res.labels.length-1],res.data[0],res.data[res.data.length-1])
          this.ChartsService.setData({
            data: res.data,
            labels: res.labels,
            id: id,
            y:
              this.selectedTypeChartCategories == 'bar' ||
              this.selectedTypeChartCategories == 'line'
                ? true
                : false,
          });
        } else {
          console.log(res.msg);
        }
      }
    );
  }

  changeChart(id: string, typeC: chartType) {
    this.selectedTypeChartCategories = typeC;
    this.ChartsService.getDataCategory(this.selectChart.select).subscribe(
      (res: any) => {
        if (res.status == '200') {
          this.infoData(res.labels[0],res.labels[res.labels.length-1],res.data[0],res.data[res.data.length-1])
          this.ChartsService.setData({
            data: res.data,
            labels: res.labels,
            id: id,
            y:
              this.selectedTypeChartCategories == 'bar' ||
              this.selectedTypeChartCategories == 'line'
                ? true
                : false,
          });
        } else {
          console.log(res.msg);
        }
      }
    );
  }

  infoData(labelTop:string,labelDown:string,valueTop:number,valueDown:number){
    this.topCategories.label = labelTop
    this.topCategories.value = valueTop
    this.downCategories.label = labelDown
    this.downCategories.value = valueDown
  }
}
