import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {
  public doughnutChartLabels: string[] = [ 
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others' 
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: [ 
          // 350, 450, 100, 150 
        ],
        backgroundColor: [
          '#0075ED',
          '#00BAF7',
          '#00E0DB',
          '#00F7AD',
          '#00ED63'
        ],
      },
      
    ],
    
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor(
    private graficasService: GraficasService
  ) { }

  ngOnInit(): void {
    // this.graficasService.getUsuariosRedesSociales()
    //   .subscribe( data =>
    //     {
    //       const labels = Object.keys( data );
    //       const values = Object.values( data );
    //       this.doughnutChartLabels = labels;
    //       this.doughnutChartData = {
    //         labels: this.doughnutChartLabels,
    //         datasets: [
    //           { 
    //             data: values,
    //             backgroundColor: [
    //               '#0075ED',
    //               '#00BAF7',
    //               '#00E0DB',
    //               '#00F7AD',
    //               '#00ED63'
    //             ],
    //           },
              
    //         ]   
    //       }
    //     }
    //   )

    this.graficasService.getUsuarioRedesSocialesDonaData()
      .subscribe( ({ labels, values }) => {
        this.doughnutChartData = {
          labels: labels,
          datasets: [
            { 
              data: values,
              backgroundColor: [
                '#0075ED',
                '#00BAF7',
                '#00E0DB',
                '#00F7AD',
                '#00ED63'
              ],
            },
            
          ]   
        }
      })

  }

}
