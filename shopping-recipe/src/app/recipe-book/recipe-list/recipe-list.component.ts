import { Component, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe-detail/recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Pizza','Italian Thin Crest with double cheese','https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1-500x375.jpg'),
    new Recipe('Pizza','Italian Thin Crest with double cheese','https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1-500x375.jpg'),
    new Recipe('Pizza','Italian Thin Crest with double cheese','https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1-500x375.jpg'),
    new Recipe('Pizza','Italian Thin Crest with double cheese','https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1-500x375.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe : Recipe){
      this.recipeWasSelected.emit(recipe);  }

}
