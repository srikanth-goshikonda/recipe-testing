import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode: boolean = false;
  editedIndex: number;
  editedItem: Ingredient;
  @ViewChild('form', { static: false }) form: NgForm;
  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing.subscribe((index) => {
      this.editMode = true;
      this.editedIndex = index;
      this.editedItem = this.slService.getIngredientOf(index);
      this.form.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount,
      });
    });
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    const ing = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.editedIndex, ing);
    } else {
      this.slService.addIngredient(ing);
    }
    form.reset();
    this.editMode = false;
  }
  onClear() {
    this.form.reset();
    this.editMode = false;
  }

  onDelete() {
    if (confirm('Are you sure want to delete this item')) {
      this.slService.deleteIngredient(this.editedIndex);
      this.onClear();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
