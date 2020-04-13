import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput',{static : false}) nameElementRef : ElementRef;
  @ViewChild('amountInput',{static : false}) amountElementRef : ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  addItem()
  {
      const newingredient = new Ingredient(this.nameElementRef.nativeElement.value, this.amountElementRef.nativeElement.value);
      this.ingredientAdded.emit(newingredient);
     }
}
