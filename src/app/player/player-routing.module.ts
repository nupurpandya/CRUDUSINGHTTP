import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerFormComponent } from './player-form/player-form.component';
import { PlayerListComponent } from './player-list/player-list.component';

const routes: Routes = [
  {path:"", redirectTo:"player-list",pathMatch:"full"},
{path:"player-list",component:PlayerListComponent},
{path:"player-form/:id",component:PlayerFormComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
