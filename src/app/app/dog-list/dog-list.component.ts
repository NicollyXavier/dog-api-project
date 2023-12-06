// src/app/dog-list/dog-list.component.ts

import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css'],
})
export class DogListComponent implements OnInit {
  breeds: string[] = [];
  selectedBreed: string = '';
  images: string[] = [];

  constructor(private dogService: DogService) {}

  ngOnInit(): void {
    this.dogService.getDogBreeds()
      .subscribe(
        (data) => {
          this.breeds = Object.keys(data.message);
        },
        (error) => {
          console.error('Error fetching dog breeds:', error);
        }
      );
  }
  
  loadImages(): void {
    this.dogService.getDogImages(this.selectedBreed, 10)
      .subscribe(
        (data) => {
          this.images = data.message;
        },
        (error) => {
          console.error('Error fetching dog images:', error);
        }
      );
  }
}
