import { Component } from '@angular/core';
import { HttpClient, } from '@angular/common/http';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {

  valorInput: string = '';
  resultadoBusqueda: any;

  constructor() { }

  buscarJugador() { }

  obtenerJugador() {
    let apiUrl =  `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${this.valorInput}`

  }
}