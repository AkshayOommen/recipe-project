import { Recipe } from './recipe-list/recipe.model';

export class RecipeService {
    recipes: Recipe[] = [
        new Recipe('A sample recipe', 'A sample description', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'),
        new Recipe('Another sample recipe', 'Another sample description', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png')
    ]

    getRecipes() {
        return this.recipes.slice();
    }
}