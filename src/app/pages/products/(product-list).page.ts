import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  template: ` <h2>Products List</h2> `,
})
export default class ProductsListComponent {}