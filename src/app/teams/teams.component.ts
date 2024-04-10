import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../service/teams.service';
import { CountriesService } from '../service/countries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  selectedCountry: string = '';
  Lteams: any[] = [];
  Lcountries: any[] = [];

  constructor(private router: Router, private teamsS: TeamsService, private countryS: CountriesService) { }

  ngOnInit(): void {
    this.getTeams();
    this.getCuntries();
  }

  getTeams() {
    let apiUrl = `https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?s=Soccer&c=${this.selectedCountry}`;
    this.teamsS.callTeams(apiUrl).subscribe(data => {
      this.Lteams = data.teams;
      console.log("teams", this.Lteams);
    });
  }

  getCuntries() {
    this.countryS.callCountries().subscribe(data => {
      this.Lcountries = data.countries;
      console.log("countries", this.Lcountries);
    })
  }

  onCountrySelect(event: any) {
    const selectedCountry = event.target?.value;
    if (selectedCountry) {
      this.selectedCountry = selectedCountry;
      this.getTeams();
    }
  }
  showTeamDetails(id: string): void {
    this.router.navigate(['teamdetail', id], { queryParams: { id: id } });
  }
}
