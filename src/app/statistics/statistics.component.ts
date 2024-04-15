import { Component } from '@angular/core';
import { PlayersService } from '../service/players.service';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {

  valorInput: string = '';
  playersInfo: any[] = [];

  constructor(private playe: PlayersService) { }

  obtenerJugador() {
    let apiUrl = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${this.valorInput}`
    this.playe.callPlayer(apiUrl).subscribe(data => {
      this.playersInfo = data.player;
    })
  }
}