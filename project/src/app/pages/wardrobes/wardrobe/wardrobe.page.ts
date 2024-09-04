import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { categories ,hoodiesSubcategories} from 'src/app/data/category.data';
import { Subcategory } from 'src/app/interfaces/subcategory';

@Component({
  selector: 'app-wardrobe',
  templateUrl: './wardrobe.page.html',
  styleUrls: ['./wardrobe.page.scss'],
})
export class WardrobePage implements OnInit {
  subcategories: Subcategory[] = [];
  categoryName: string = '';
  constructor(private route: ActivatedRoute,private router:Router) {}

  ngOnInit() {
    // Retrieve the category ID from the route parameters
    const categoryId = Number(this.route.snapshot.paramMap.get('id'));
    
    
    const category = categories.find((cat) => cat.id === categoryId);
  
    if (category) {
      // Assign the subcategories of the matched category to the subcategories array
      this.subcategories = category.subcategories || [];
      this.categoryName = category.name;
      console.log('Displaying subcategories:', this.subcategories);
    }
  }
  
  goBack(){
    this.router.navigate(['/wardrobes'])
  }
}
