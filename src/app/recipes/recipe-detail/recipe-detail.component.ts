import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from "../recipe";
import {ShoppingListService} from "../../shopping-list";

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipe: Recipe;

  constructor(private shoppingListService:ShoppingListService) {
  }

  ngOnInit() {
  }

  onAddToShoppingList():void{
    this.shoppingListService.addItems(this.selectedRecipe.ingredients);
  }
}
