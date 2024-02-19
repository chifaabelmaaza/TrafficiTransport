import { Component,OnInit, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexYAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: any | ApexAxisChartSeries;
  chart: any | ApexChart;
  dataLabels: any |ApexDataLabels;
  plotOptions:any | ApexPlotOptions;
  title: any | ApexTitleSubtitle;
  xaxis: any | ApexXAxis;
  yaxis:any | ApexYAxis | ApexYAxis[];
};
@Component({
  selector: 'app-travels-per-month',
  templateUrl: './travels-per-month.component.html',
  styleUrl: './travels-per-month.component.scss'
})
export class TravelsPerMonthComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "basic",
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }
      ],
      chart: {
        type: "bar",
        height: 400,
        
      },
      plotOptions: {
        bar: {
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: "Travels Per Month"
      },
      xaxis: {
        title: {
          text: "Number of Travels"
        },
        categories: [
          "Jan 2024",
          "Feb 2024",
          "Mar 2024",
          "Apr 2024",
          "Mai 2024",
          "Jun 2024",
          "Jul 2024",
          "Aug 2024",
          "Sep 2023",
          "Oct 2023",
          "Nov 2023",
          "Dec 2023"
        ]
      },
      yaxis: [
        {
          title: {
            text: "Month"
          }
        },
      ]
    };
  }

  ngOnInit(): void {
  }

}