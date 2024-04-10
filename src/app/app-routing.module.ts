import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoupensComponent } from './coupens/coupens.component';
import { PagesComponent } from './pages/pages.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { MediaComponent } from './media/media.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamsdetailComponent } from './teamsdetail/teamsdetail.component';

const routes: Routes = [
  {
    path: '', redirectTo :  'dashboard', pathMatch: 'full'
  },
  
  {
    path: 'dashboard', component : DashboardComponent
  },
  {
    path: 'teams', component : TeamsComponent
  },
  {
    path: 'coupens', component : CoupensComponent
  },
  {
    path: 'pages', component : PagesComponent
  },
  {
    path: 'settings', component : SettingsComponent
  },
  {
    path: 'statistics', component : StatisticsComponent
  },
  {
    path: 'media', component : MediaComponent
  },
  {
    path: 'teamdetail', component: TeamsdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
