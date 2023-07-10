import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from 'src/app/Services/Cars/cars.service';
import { Car } from './../../Models/Car.model';
declare var $: any; //  jQuery

@Component({
  selector: 'cars-cards',
  templateUrl: './cars-cards.component.html',
  styleUrls: ['./cars-cards.component.scss'],
})
export class CarsCardsComponent implements OnInit {
  @Input() userAgent: string = 'Visitor'; // I assume you don't need this 99% sure lol

  cars: Car[] = [];
  filteredCars: Car[] = [];

  // Holds filter string
  filterValue: string = '';
  @Input() filterId: number = 0;

  constructor(
    private carsService: CarsService,
    private route: ActivatedRoute
  ) {}

  DeleteCar(id: number) {
    this.carsService.DeleteCar(id).subscribe({
      next: (response) => {
        location.reload();
      },
    });
  }

  ngOnInit(): void {
    // Read the filter parameter from the URL
    this.filterValue = this.route.snapshot.paramMap.get('filter') || 'All';

    this.carsService.GetAllCars().subscribe({
      next: (cars) => {
        this.cars = cars;
        this.loadCarImages();
        this.filterCars();
        console.log(cars);
        // jQuery code to manipulate the component
        $(document).ready(() => {
          $('.cars-cards').css('background-color', 'yellow');
        });
      },
      error: (response) => console.error(response),
    });
  }

  private loadCarImages(): void {
    this.cars.forEach((car) => {
      this.carsService.GetImage(car.id).subscribe({
        next: (imageData) => (car.imageSrc = URL.createObjectURL(imageData)),
        error: (error) => console.error(error),
      });
    });
  }

  private filterCars(): void {
    if (this.filterValue !== '' && this.filterValue !== 'All') {
      this.filteredCars = this.cars.filter(
        (car) => car.category === this.filterValue
      );
    } else if (this.filterId !== 0) {
      this.filteredCars = this.cars.filter((car) => car.id === this.filterId);
    } else {
      this.filteredCars = this.cars;
    }
  }
}
