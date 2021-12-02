import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  startedEditing = new Subject<number>();
  onIngredientAdded = new Subject<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 6),
    new Ingredient('Bendakaya', 10),
  ];

  getIngredient() {
    return this.ingredients.slice();
  }

  addIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
    this.onIngredientAdded.next(this.ingredients);
  }

  getIngredientOf(index: number) {
    return this.ingredients[index];
  }

  addIngredients(ings: Ingredient[]) {
    this.ingredients.push(...ings);
    this.onIngredientAdded.next(this.ingredients);
  }

  updateIngredient(index: number, ing: Ingredient) {
    this.ingredients[index] = ing;
    this.onIngredientAdded.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.onIngredientAdded.next(this.ingredients.slice());
  }
}
