import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { collections } from 'src/app/data/collection.data';
import { Collection } from 'src/app/interfaces/collection';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.page.html',
  styleUrls: ['./collections.page.scss'],
})
export class CollectionsPage implements OnInit {
collections:Collection[]=collections;
activeIcon: string = 'collections';
searchText: string = '';
isModalOpen = false;
isOptionModalOpen=false;
isEditModalOpen=false;
isCameraOpen = false;
isSearching: boolean = false;
sortBy: string = '';
isSelectionMode: boolean = false;
isCreateModalOpen:boolean = false;
isRenameModalOpen:boolean = false
collectionForm: FormGroup;
selectedImageUrl: string | ArrayBuffer | null = null;
@ViewChild('fileInput') fileInput!: ElementRef;
newCollectionName: string = '';
isDragAndDropEnabled: boolean = false;
constructor(private router:Router,private fb: FormBuilder,) { 
    this.collectionForm = this.fb.group({
      type: ['', Validators.required],
      
      imageUrl: [''] // Assuming you might have this field for the image URL
    });
  }

  ngOnInit() {
  }
  sendToHome(){
    this.router.navigate(['/home'])
  }
  
  setActiveIcon(iconName: string) {
    this.activeIcon = iconName;
  }

  goToFavorites() {
    this.setActiveIcon('favorites');
    this.router.navigate(['/favorites']);
  }

  goToProfile() {
    this.setActiveIcon('profile');
    this.router.navigate(['/profile']);
  }

  clearSearch() {
    this.searchText = '';
    this.isSearching = false;
  }
  presentModal() {
    this.isModalOpen = true;
    
    
  }
  presentRenameModal() {
    this.isRenameModalOpen = true; // Open the edit modal
  }
  presentOptionModal(){
    this.isOptionModalOpen=true
  }

  presentEditModal(){
    this.isEditModalOpen=true;
    this.isSelectionMode = true;
  }
  closeModal() {
    this.isModalOpen = false;
    this.isEditModalOpen=false
    this.isOptionModalOpen=false;
    this.isRenameModalOpen = false
    this.collections.forEach(collection => (collection.selected = false));
  }
  setSortOption(option: string) {
    this.sortBy = option;
    this.sortCollections(); // Call sorting method
    this.closeModal(); // Close modal after selecting the sorting option
  }

  sortCollections() {
    if (this.sortBy === 'AtoZ') {
      this.collections.sort((a, b) => a.type.localeCompare(b.type));
    } else if (this.sortBy === 'ZtoA') {
      this.collections.sort((a, b) => b.type.localeCompare(a.type));
    }
    // Add more sorting options if needed
  }
 

  moveCollection() {
    const selectedCollections = this.collections.filter(c => c.selected);
    console.log('Moving collections:', selectedCollections);
    // Implement move logic
  }

  renameCollection() {
    // Check if there's a selected collection and a new name provided
    const selectedCollections = this.collections.filter(c => c.selected);
    
    if (selectedCollections.length === 1 && this.newCollectionName.trim() !== '') {
      selectedCollections[0].type = this.newCollectionName; // Update the type of the selected collection
      console.log('Renaming collection to:', this.newCollectionName);
    } else {
      console.log('Please select one collection and provide a new name.');
    }

    // Reset the new name and exit selection mode
    this.newCollectionName = '';
    this.isSelectionMode = false;
    this.isRenameModalOpen = false
  }

  deleteCollection() {
    
    const idsToDelete = this.collections
      .filter(collection => collection.selected) 
      .map(collection => collection.id); 

    console.log('IDs of collections to delete:', idsToDelete);

    
    this.collections = this.collections.filter(c => !c.selected);

    
    this.isSelectionMode = false;
  }

  toggleSelection(event: Event, collection: Collection) {
    // Prevent navigation when the checkbox is clicked
    event.stopPropagation();
    

    // Handle selection logic
    collection.selected = !collection.selected; // Toggle selection state
    console.log(`Collection ${collection.type} selected: ${collection.selected}`);
  }

  onItemClick(collection: Collection) {
    if (!this.isSelectionMode) {
    this.router.navigate(['/col', collection.id]); // Navigates to the articles page with collection ID
    }
  }

  openCreateModal() {
    this.isCreateModalOpen = true;
  }
  closeCreateModal() {
    this.isCreateModalOpen = false;
  }
  createNewCollection() {
    if (this.collectionForm.valid) {
      const newCollection: Collection = {
        id: Date.now(), // or use a proper ID generation method
        ...this.collectionForm.value,
        selected: false,
      };
      this.collections.push(newCollection);
      this.collectionForm.reset(); // Clear the form fields
      this.selectedImageUrl = ''; // Clear the selected image URL
      this.closeCreateModal();
      console.log('New collection added:', newCollection);
    } else {
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }
  
  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  onImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImageUrl = reader.result;
        this.collectionForm.patchValue({
          imageUrl: this.selectedImageUrl,
        });
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  onCollectionClick(collection: Collection) {
    this.router.navigate(['/col', collection.id]); // Navigate to the col page with the collection ID
  }
  onDrop(event: CdkDragDrop<Collection[]>) {
    const previousIndex = this.collections.findIndex(c => c === event.item.data);
    const currentIndex = event.currentIndex;

    // Move the item in the array
    const movedCollection = this.collections[previousIndex];
    this.collections.splice(previousIndex, 1);
    this.collections.splice(currentIndex, 0, movedCollection);

    console.log('Collections after move:', this.collections);
  }
  toggleDragAndDrop() {
    this.isDragAndDropEnabled = !this.isDragAndDropEnabled;
  }
}
