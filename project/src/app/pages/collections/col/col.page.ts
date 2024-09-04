import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Collection } from 'src/app/interfaces/collection';
import { Article } from 'src/app/interfaces/article';
import { collections } from 'src/app/data/collection.data'; // Ensure the collections data is imported

@Component({
  selector: 'app-col-page',
  templateUrl: './col.page.html',
  styleUrls: ['./col.page.scss'],
})
export class ColPage implements OnInit {
  collection!: Collection; // Selected collection based on ID
  articles: Article[] = []; // Articles of the clicked collection
  isSelectionMode: boolean = false; // Selection mode flag
  activeIcon: string = 'collections'; // Active icon state
  collectionName: string = '';
  constructor(private route: ActivatedRoute,private router:Router) {}

  ngOnInit() {
    // Retrieve the collection ID from the route parameters
    const collectionId = Number(this.route.snapshot.paramMap.get('id'));
    
    // Find the collection that matches the retrieved ID
    this.collection = collections.find((c) => c.id === collectionId)!;

    if (this.collection) {
      // Assign the articles of the matched collection to the articles array
      this.articles = this.collection.articles;
      this.collectionName = this.collection.type;
      console.log('Displaying articles:', this.articles);
    }
  }

  onCollectionClick(collection: Collection) {
    // Directly assign articles when a collection is clicked, if necessary
    this.articles = collection.articles || [];
  }

  

  setActiveIcon(icon: string) {
    // Set the active icon, e.g., for navigation
    this.activeIcon = icon;
  }

  goToFavorites() {
    this.setActiveIcon('favorites');
    this.router.navigate(['/favorites']);
  }

  goToProfile() {
    this.setActiveIcon('profile');
    this.router.navigate(['/profile']);
  }
  sendToHome(){
    this.setActiveIcon('home');
    this.router.navigate(['/home']);
  }
  goToCollection(){
    this.setActiveIcon('collections');
    this.router.navigate(['/collections']);
  }
}
