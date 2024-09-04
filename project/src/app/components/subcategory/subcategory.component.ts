import { Component, Input, OnInit } from '@angular/core';
import { Subcategory } from 'src/app/interfaces/subcategory';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss'],
})
export class SubcategoryComponent  implements OnInit {
  @Input() subcategory!: Subcategory;
  @Input() hoodiesSubcategories!:Subcategory
  constructor() { }

  ngOnInit() {}

}
