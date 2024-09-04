import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/article';
import { articles } from 'src/app/data/article.data';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Person } from 'src/app/interfaces/person';
import { people } from 'src/app/data/person.data';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  article: Article | undefined;
  articles: Article[] = articles;
  sizes: string[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  selectedSize: string = 'xs';
  photo: string | undefined;
  takenPhoto: boolean = false;
  selectedColor: string = '';
  people: Person[] = people;
  isModalOpen = false;
  isSearchOpen=false;
  searchText: string = '';
  selectedPersonIds: Set<number> = new Set<number>();
  platforms = [
    { name: 'copy link', icon: '../../../assets/icon/copyLink.png' },
    { name: 'Messenger', icon: '../../../assets/icon/messenger.png' },
    { name: 'whatsApp', icon: '../../../assets/icon/whatsapp.png' },
    { name: 'Instagram', icon: '../../../assets/icon/instagram.png' },
    
    // Add more platforms here
  ];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    
  ) {
    this.photo = '';
  }

  ngOnInit() {
    const articleId = +this.route.snapshot.paramMap.get('id')!;
    this.article = articles.find((article) => article.id === articleId);
  }
  toggleFavorite(article: Article) {
    article.isFavorite = !article.isFavorite;
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  sendToHome() {
    this.router.navigate(['/home']);
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }
  transfer() {
    console.log('transfer works !');
  }
  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    });
    this.photo = image.webPath;
    this.takenPhoto = true;
  }

  send(){
    console.log("sent");
  }

  addToCollection() {
    console.log('add to collection works!');
    
  }
  presentModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.isSearchOpen=false
  }
  presentSearchModal() {
    this.isSearchOpen = true;
  }

  Send() {
    console.log('Send is here');

  }

  onPersonClick(person: any) {
    console.log('Clicked on person:', person);

  }

  clearSearch() {
    this.searchText = '';
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
