import { Component, OnInit } from '@angular/core';
import { LeaguesService } from '../service/leagues.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Lleagues: any[] = [];

  ngOnInit(): void {
    this.getLeagues();
  }
  constructor(private leageS: LeaguesService) { }

  getLeagues() {
    this.leageS.callLeagues().subscribe(data => {
      this.Lleagues = data.leagues;
      console.log('leagues', this.Lleagues)
    })
  }
}
