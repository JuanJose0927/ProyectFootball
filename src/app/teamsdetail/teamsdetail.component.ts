import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipmentsService } from '../service/equipments.service';
import { LatestmatchsService } from '../service/latestmatchs.service';


@Component({
  selector: 'app-teamsdetail',
  templateUrl: './teamsdetail.component.html',
  styleUrls: ['./teamsdetail.component.scss']
})
export class TeamsdetailComponent implements OnInit {
  listequipments: any[] = [];
  teamId: string = '';

  latestMatches: any[] = [];
  constructor(private route: ActivatedRoute, private equipMents: EquipmentsService, private matches: LatestmatchsService) {

  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      this.teamId = id
    });

    if (this.teamId != undefined)
      this.getEquipments()
      this.getLatestMatches();
  }

  getEquipments() {
    let apiUrl = `https://www.thesportsdb.com/api/v1/json/3/lookupequipment.php?id=${this.teamId}`;
    console.log(apiUrl)

    this.equipMents.callEquipments(apiUrl).subscribe(
      data => {
        this.listequipments = data.equipment;
        console.log('equipo', this.listequipments);
      },
    );
  }

  getLatestMatches() {
    let apiUrl = `https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=${this.teamId}`;
    this.matches.callLatestMatches(apiUrl).subscribe(
      data => {
        this.latestMatches = data.results;
        console.log('matches', this.latestMatches);
      }
    )
  }
}
