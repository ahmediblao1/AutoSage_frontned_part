import { Component } from '@angular/core';
declare var $: any; //  jQuery

@Component({
  selector: 'cars-title',
  templateUrl: './cars-title.component.html',
  styleUrls: ['./cars-title.component.scss']
})
export class CarsTitleComponent {
  constructor() {}

  // jQuery code to manipulate the title component
  ngAfterViewInit() {
    $(document).ready(() => {
      $('.cars-title').css('color', 'red');
    });
  }
}
