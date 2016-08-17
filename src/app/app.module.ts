import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ApplicationRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header.component';
import {RecipesComponent} from './recipes';
import {RecipeListComponent, RecipeItemComponent} from './recipes/recipe-list';
import {RecipeDetailComponent} from './recipes/recipe-detail';
import {ShoppingListComponent, ShoppingListAddComponent, ShoppingListService} from './shopping-list';
import {DropdownDirective} from './dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
  ],
  providers: [ShoppingListService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
