import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Collection } from 'src/app/interfaces/collection';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent  implements OnInit {
  @Input() collection!: Collection;
  @Input() isSelectionMode!: boolean;
  @Output() cardClicked = new EventEmitter<Collection>();

  constructor() { }

  ngOnInit() {}
  toggleSelection(collection: Collection) {
    collection.selected = !collection.selected;
    console.log('Collection selected:', collection);
  }
  onCardClick() {
    this.cardClicked.emit(this.collection);
  }
}
