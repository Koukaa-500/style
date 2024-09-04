import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/interfaces/article';
import { articles } from 'src/app/data/article.data';
import { ModalController } from '@ionic/angular';
import { Filesystem, Directory, FilesystemEncoding, Encoding } from '@capacitor/filesystem';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user: any = {
    name: "Hela Turki",
    profilePic: "assets/img/profile-picture.png",
    email: "hela@gamil.com",
    phone: "12345678",
    date_nai: "22/01/2002",
    genre: "female"
  }

  activeButton: string = 'topSearches';
  activeIcon: string = 'home';
  articles: Article[] = articles;
  searchText: string = '';
  filteredArticles: Article[] = [];
  isModalOpen = false;
  isCameraOpen = false;
  selectedBrand: string = 'ALL';
  selectedSize:string = 'ALL';
  selectedGender:string = 'ALL';
  genders:any=['ALL', 'Men', 'Women']
  sizes:any=['ALL', 'XS', 'S', 'M', 'L', 'XL', '2XL','3XL']
  selectedPriceRange: { lower: number; upper: number } = { lower: 0, upper: 200 };
  photo: string | null | undefined = '';
  takenPhoto: boolean = false;
  isSearching: boolean = false;
  showHistory: boolean = false;
  searchHistory: string[] = [];
  photoUrl: string | undefined;
  private fileName: string | undefined;
  selectedPrice: number = 0;
  constructor(private router:Router,private modalController: ModalController) {
  }
  ngOnInit() {
    this.activeButton;
    this.filteredArticles = this.articles;  // Show all articles by default
  }
  setActiveIcon(iconName: string) {
    this.activeButton = iconName;
  }

  pinFormatter(value: number) {
    return `${value}%`;
  }
  
  setActive(button: string) {
    this.activeButton = button;
    this.filteredArticles = this.articles.filter(article => article.category === button);
  }
  onSearchInput() {
    this.isSearching = this.searchText.length > 0;
  }
  addSearchToHistory() {
    if (this.searchText && !this.searchHistory.includes(this.searchText)) {
      this.searchHistory.unshift(this.searchText);
      if (this.searchHistory.length > 5) {
        this.searchHistory.pop(); // Limit history to last 5 searches
      }
    }
  }
  selectSearch(search: string) {
    this.searchText = search;
    this.isSearching = false;
    // Handle search logic with the selected item from history
  }
  
  sentToProfile(){
    this.router.navigate(['/profile'])
    console.log("hey");
    
  }
  goToFavorites(){
    this.router.navigate(['/addtofavorite'])
  }
  clearSearch() {
    this.searchText = '';
    this.isSearching = false;
  }
  

  filterByBrand(brand: string) {
    this.selectedBrand = brand;
    this.filterArticles();
  }
  
  filterByGender(gender: string) {
    this.selectedGender = gender;
    this.filterArticles();
  }
  
  filterBySize(size: string) {
    this.selectedSize = size;
    this.filterArticles();
  }
  
  filterByCategory(category: string) {
    this.activeButton = category;
    this.filterArticles();
  }
  
  

  filterArticles() {
    console.log('Filtering articles with:', {
      selectedBrand: this.selectedBrand,
      activeButton: this.activeButton,
      selectedSize: this.selectedSize,
      selectedGender: this.selectedGender,
      selectedPriceRange: this.selectedPriceRange
    });
    this.filteredArticles = this.articles.filter(article => {
      
      
      return (this.selectedBrand === 'ALL' || article.brand === this.selectedBrand) &&
             (this.activeButton === 'all' || article.category === this.activeButton) &&
             (this.selectedSize === 'ALL' || article.sizes.includes(this.selectedSize)) &&
             (this.selectedGender === 'ALL' || article.gender === this.selectedGender)&&
             (article.price >= this.selectedPriceRange.lower );
    });
  }
  
filterRnage(){
  const { lower, upper } = this.selectedPriceRange;
  console.log('Filtering articles with:', {
    selectedPriceRange: this.selectedPriceRange
  });
  this.filteredArticles = this.articles.filter(article => {
    return (article.price >= this.selectedPrice );
  });
}
  

  clearFilter() {
    this.setActiveIcon('home');
    this.activeButton = 'all'; 
    this.selectedBrand = 'ALL';
    this.selectedSize = 'ALL';
    this.selectedGender = 'ALL';
    // this.selectedPriceRange = [0, 200];
    this.filterArticles(); // Update the filtered articles
  }
  
  presentModal() {
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
    this.isCameraOpen=false
  }
  presentCameraModal(){
    this.isCameraOpen=true;
  }
  // private convertBlobToBase64(blob: Blob): Promise<string> {
  //   return new Promise<string>((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       resolve(reader.result as string);
  //     };
  //     reader.onerror = reject;
  //     reader.readAsDataURL(blob);
  //   });
  // }
  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri, 
      });

      this.photo = image.webPath; 
      const modal = await this.modalController.getTop();
      await modal?.dismiss();
      
      // Navigate to the image page with the photo URL
      this.router.navigate(['/image', { photo: this.photo }]);

    } catch (error) {
      console.error('Error taking picture', error);
    }
  }
  

sendToCollection(){
  this.setActiveIcon('collections');
  this.router.navigate(['/collections']);
}
  
  async goToProfile(){
    const modal = await this.modalController.getTop();
    this.router.navigate(['/profile']);
    await modal?.dismiss();
    this.setActiveIcon('profile');

  }

  async goToContactUs(){
    const modal = await this.modalController.getTop();
    this.router.navigate(['/contact-us']);
    await modal?.dismiss();

  }

  async goToAboutUs(){
    const modal = await this.modalController.getTop();
    this.router.navigate(['/about-us']);
    await modal?.dismiss();

  }
  navigateToDetails(articleId: number) {
    this.router.navigate(['/details', articleId]);
  }

  async logoutcancel(){
    const firstModal = await this.modalController.getTop();
      if (firstModal) {
        await firstModal.dismiss();
        console.log('logout cancel');
      }

  }

  async logoutconfirm(){
    const firstModal = await this.modalController.getTop();
      if (firstModal) {
        await firstModal.dismiss();
        console.log('logout confirm');
        this.router.navigate(['/login'])
      }

  }

  async openmodalhome(){
    const Modal = await this.modalController.getTop();
      if (Modal) {
        await Modal.dismiss();
      }

      const homemodal = document.getElementById('first-modal-home') as any;
      if (homemodal) {
        homemodal.present();
      }
  }

  async logout(){
    const firstModal = await this.modalController.getTop();
      if (firstModal) {
        await firstModal.dismiss();
      }

      const logoutmodal = document.getElementById('logout') as any;
      if (logoutmodal) {
        logoutmodal.present();
      }
  }
  
  sendToWardrobe(){
    this.router.navigate(['/wardrobes'])
  }
}
