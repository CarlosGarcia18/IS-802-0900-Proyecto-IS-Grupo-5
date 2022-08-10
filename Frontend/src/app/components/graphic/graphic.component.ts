import { Component, OnInit, Input } from '@angular/core';
import {
  Chart,
  LinearScale,
  BarElement,
  BarController,
  LineController,
  DoughnutController,
  PieController,
  ArcElement,
  RadialLinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
} from 'chart.js';

Chart.register(
  BarElement,
  LinearScale,
  BarController,
  LineController,
  DoughnutController,
  PieController,
  ArcElement,
  RadialLinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
);

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css'],
})
export class GraphicComponent implements OnInit {
  constructor() {}

  @Input() type: 'bar' | 'doughnut' | 'line' | 'pie'  = 'line';
  @Input() labels: string[] = [];
  @Input() data: number[] = [];
  @Input() label: string = '';
  @Input() width: string = '400px';
  @Input() showLabelsX: boolean = false;
  @Input() showLabelsY: boolean = true;

  colorBar: string[] = ['rgba(126, 225, 252, 0.7)', 'rgba(183,184,230, 0.7)'];
  borderColorLine: string = 'rgb(183,184,230)';
  pointBackgroundColor: string = 'rgb(190,190,255)';
  colorDoughnut: string[] = [
    'rgb(56,55,244)',
    'rgb(87,149,203)',
    'rgb(93,179,39)',
    'rgb(200,243,21)',
    'rgb(255,237,0)',
    'rgb(255,165,6)',
    'rgb(254,102,1)',
    'rgb(253,52,1)',
    'rgb(210,0,2)',
    'rgb(135,0,32)',
    'rgb(102,1,104)',
    'rgb(51,1,155)',
  ];

  ngOnInit(): void {
    const myChart = new Chart('myChart', {
      type: this.type,
      data: {
        labels: this.labels,
        datasets: [
          {
            label: this.label,
            data: this.data,
            tension: 0.3,
            backgroundColor:
              this.type == 'bar'
                ? this.colorBar
                : this.type == 'doughnut' || this.type == 'pie'
                ? this.colorDoughnut
                : this.type == 'line'
                ? 'rgba(100,100,200,.2)'
                : '',
            borderColor:
              this.type == 'line'
                ? this.borderColorLine
                : this.type == 'doughnut' || this.type == 'pie'
                ? 'rgba(0,0,0,0)'
                : '',
            pointBackgroundColor:
              this.type == 'line' ? this.pointBackgroundColor : '',
            hoverOffset: 4,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              display: this.showLabelsY,
            },
            grid: {
              drawBorder:
                this.type == 'doughnut' || this.type == 'pie' ? false : true,
              drawTicks:
                this.type == 'doughnut' || this.type == 'pie' ? false : true,
              drawOnChartArea:
                this.type == 'doughnut' || this.type == 'pie' ? false : true,
            },
          },
          x: {
            ticks: {
              display: this.showLabelsX,
            },
            grid: {
              drawBorder:
                this.type == 'doughnut' || this.type == 'pie' ? false : true,
              drawTicks:
                this.type == 'doughnut' || this.type == 'pie' ? false : true,
              drawOnChartArea: false
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }
}
