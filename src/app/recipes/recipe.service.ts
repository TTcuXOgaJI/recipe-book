import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Hamburger', 'Juiciest Hamburgers Ever', 'http://images.media-allrecipes.com/userphotos/720x405/613791.jpg',[
      new Ingredient('Beef Meet',200),
      new Ingredient('Hamburger bread',1),
      new Ingredient('Hasa',1),
      new Ingredient('Onion',1),
      new Ingredient('Tomato',1)]),
    new Recipe('Greek Salad', 'Tasty Salad', 'http://images.media-allrecipes.com/userphotos/250x250/961959.jpg',[
      new Ingredient('Tomato',1),
      new Ingredient('Cucumber',1),
      new Ingredient('Onion',1),
      new Ingredient('Cheese',150),
      new Ingredient('Hasa',3)])
  ];
  constructor() { }

  gerRecipes(){
    return this.recipes;
  }
}
