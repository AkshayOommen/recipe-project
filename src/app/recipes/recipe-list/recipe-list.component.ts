import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A sample recipe', 'A sample description', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'),
    new Recipe('Another sample recipe', 'Another sample description', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png')
  ]

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelectedRecipe(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
