import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from 'src/app/shared/recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeRx: Recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.recipeRx = this.recipeService.getRecipe(+id);
    })

  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipeRx.ingredients)
  }

}
