import { Component, OnInit } from '@angular/core';

// Importar os componentes necessários do 'ng-apexcharts'
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexXAxis, ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Configurações do gráfico
  public chartOptions: any;

  ngOnInit() {
    // Configurações do gráfico
    this.chartOptions = {
      series: [
        {
          name: 'Série 1',
          data: [44, 55, 41, 17, 15, 8],
          color: "#ffc007"
        }
      ],
      chart: {
        type: 'bar',
        height: 350,
        foreColor: "black"
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      }
    };
  }
}



//
