import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
export class ShoppingListService {
    onIngredientAdded = new EventEmitter<Ingredient[]>();
    ingredients: Ingredient[] = [new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 6),
    new Ingredient('Bendakaya', 10),];


    getIngredient() {
        return this.ingredients.slice();
    }

    addIngredient(ing: Ingredient) {
        this.ingredients.push(ing);
        this.onIngredientAdded.emit(this.ingredients);
    }

    addIngredients(ings: Ingredient[]) {

        this.ingredients.push(...ings);
        this.onIngredientAdded.emit(this.ingredients)
    }
}