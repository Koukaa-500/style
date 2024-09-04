import { Component,  OnInit ,AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { articles } from 'src/app/data/article.data';
import { Article } from 'src/app/interfaces/article';
import { Filesystem, Directory } from '@capacitor/filesystem';

import SwiperCore, { Swiper } from 'swiper';
@Component({
  selector: 'app-image',
  templateUrl: './image.page.html',
  styleUrls: ['./image.page.scss'],
})
export class ImagePage implements OnInit {
  searchType: string = 'similar'; // Default value for the segmented buttons
  selectedItem: string = 'tshirt'; // Default selected item for radio buttons
  isCameraOpen: boolean = false;
  articles: Article[] = articles;
  iscomplimentaryOpen = false;
  selectedPersonIds: Set<number> = new Set<number>();
  photoUrl: string | undefined;
  private fileName: string | undefined;
  @ViewChild('scrollableContent') scrollableContent!: ElementRef;
  @ViewChild('scrollableContent2') scrollableContent2!: ElementRef;
  constructor(private router: Router,) { }

  async ngOnInit() {
    try {
      // Retrieve the file name from local storage
      this.fileName = localStorage.getItem('latestImageFileName') || '';

      if (this.fileName) {
        const result = await Filesystem.getUri({
          path: `images/${this.fileName}`,
          directory: Directory.Data
        });

        this.photoUrl = result.uri; // Assign the URI to the photoUrl
      } else {
        console.warn('No file name found');
      }
    } catch (error) {
      console.error('Error fetching image', error);
    }
  }
  scrollNext(element: HTMLElement) {
    const scrollAmount = 300; // Adjust the scroll amount as needed
    element.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  }
  

  
  sendToHome() {
    this.router.navigate(['/home']);
  }

  searchItems() {
    // Implement your search logic here based on selected search type and item
    console.log('Search Type:', this.searchType);
    console.log('Selected Item:', this.selectedItem);
  }
  presentModal() {
    this.iscomplimentaryOpen = true;
  }
  closeModal() {
    this.iscomplimentaryOpen = false;
    this.isCameraOpen=false
  }
  toggleSelection(personId: number) {
    if (this.selectedPersonIds.has(personId)) {
      this.selectedPersonIds.delete(personId);
    } else {
      this.selectedPersonIds.add(personId);
    }
  }

  isSelected(personId: number): boolean {
    return this.selectedPersonIds.has(personId);
  }

  
}
