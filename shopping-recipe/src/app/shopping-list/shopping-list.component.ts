import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

    ingredients: Ingredient[] =[
        new Ingredient('Cheese',10),
        new Ingredient('Bread Crust',1),
        new Ingredient('Tomato',15),
        new Ingredient('Capsicum',9),
        new Ingredient('Oregano',30)
    ] ;
  constructor() { }

  ngOnInit(): void {
  }

}
