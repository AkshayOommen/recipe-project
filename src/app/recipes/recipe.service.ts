import { Recipe } from './recipe-list/recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe(
            'A sample recipe', 
            'A sample description', 
            'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png', 
            [
                new Ingredient('Bananas', 10),
                new Ingredient('Apples', 5)
            ]),
        new Recipe(
            'Another sample recipe', 
            'Another sample description', 
            'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png', 
            [
                new Ingredient('Bread', 10),
                new Ingredient('Chicken', 15)
            ])
    ]

    getRecipes() {
        return this.recipes.slice();
    }
}