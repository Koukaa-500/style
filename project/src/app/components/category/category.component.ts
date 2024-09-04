import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/interfaces/category'; // Adjust the path as needed

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  @Input() category!: Category;
  @Input() isSelectionMode: boolean = false;
  @Output() cardClicked = new EventEmitter<Category>();

  constructor() {}

  ngOnInit() {}

  toggleSelection(category: Category) {
    category.selected = !category.selected;
    console.log('Category selected:', category);
  }

  onCardClick() {
    this.cardClicked.emit(this.category);
  }
}
