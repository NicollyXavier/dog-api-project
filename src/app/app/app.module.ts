// src/app/app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule, Routes } from '@angular/router'; // Importe o RouterModule
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DogListComponent } from './dog-list/dog-list.component';
import { DogDetailsComponent } from './dog-details/dog-details.component';
import { DogService } from './dog.service';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dogs', component: DogListComponent },
  { path: 'dog/:id', component: DogDetailsComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DogListComponent,
    DogDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    RouterModule,
  ],
  providers: [DogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
