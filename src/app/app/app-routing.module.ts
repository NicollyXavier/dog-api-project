// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DogListComponent } from './dog-list/dog-list.component';
import { DogDetailsComponent } from './dog-details/dog-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dogs', component: DogListComponent },
  { path: 'dog/:id', component: DogDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
