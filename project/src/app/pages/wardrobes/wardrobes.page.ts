import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { categories } from 'src/app/data/category.data';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-wardrobes',
  templateUrl: './wardrobes.page.html',
  styleUrls: ['./wardrobes.page.scss'],
})
export class WardrobesPage implements OnInit {

  activeIcon: string = 'Wardrobe';
  searchText: string = '';
  isModalOpen = false;
  isOptionModalOpen = false;
  isEditModalOpen = false;
  isSearching: boolean = false;
  sortBy: string = '';
  isSelectionMode: boolean = false;
  isCreateModalOpen: boolean = false;
  isRenameModalOpen: boolean = false;
  newCollectionName: string = '';
  isDragAndDropEnabled: boolean = false;
  categories: Category[] = []; // Array to hold your categories data
  selectedGender: string = 'women';
 
  categoryForm: FormGroup;
  constructor(private router: Router,private fb:FormBuilder,private cdr: ChangeDetectorRef) {
    this.categoryForm = this.fb.group({
      name:['',Validators.required],
      imageUrl: [''],
      gender: ['women', Validators.required],
    })
  }
  selectedImageUrl: string | ArrayBuffer | null = null;
  @ViewChild('fileInput') fileInput!: ElementRef;
  ngOnInit() {
    this.categories = categories;
  }

  sendToHome() {
    this.router.navigate(['/home']);
  }

  presentModal() {
    this.isModalOpen = true;
  }

  presentRenameModal() {
    this.isRenameModalOpen = true; // Open the edit modal
  }

  presentOptionModal() {
    this.isOptionModalOpen = true;
  }

  presentEditModal() {
    this.isEditModalOpen = true;
    this.isSelectionMode = true;
  }
  openCreateModal() {
    this.isCreateModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
    this.isEditModalOpen = false;
    this.isOptionModalOpen = false;
    this.isRenameModalOpen = false;
    this.categories.forEach((category) => (category.selected = false));
  }

  clearSearch() {
    this.searchText = '';
    this.isSearching = false;
  }

  setSortOption(option: string) {
    this.sortBy = option;
    this.sortCategories(); // Call sorting method
    this.closeModal(); // Close modal after selecting the sorting option
    console.log('Sort option set to:', this.sortBy);
  }

  sortCategories() {
    if (this.sortBy === 'AtoZ') {
      this.categories = [...this.categories.sort((a, b) => a.name.localeCompare(b.name))];
    } else if (this.sortBy === 'ZtoA') {
      this.categories = [...this.categories.sort((a, b) => b.name.localeCompare(a.name))];
    }
  
    console.log('Categories sorted:', this.categories);
  }

  toggleDragAndDrop() {
    this.isDragAndDropEnabled = !this.isDragAndDropEnabled;
  }

  renameCategory() {
    // Check if there's a selected category and a new name provided
    const selectedCategories = this.categories.filter((c) => c.selected);

    if (selectedCategories.length === 1 && this.newCollectionName.trim() !== '') {
      selectedCategories[0].name = this.newCollectionName; // Update the name of the selected category
      console.log('Renaming category to:', this.newCollectionName);
    } else {
      console.log('Please select one category and provide a new name.');
    }

    // Reset the new name and exit selection mode
    this.newCollectionName = '';
    this.isSelectionMode = false;
    this.isRenameModalOpen = false;
  }

  deleteCategory() {
    const idsToDelete = this.categories
      .filter((category) => category.selected)
      .map((category) => category.id);

    console.log('IDs of categories to delete:', idsToDelete);

    this.categories = this.categories.filter((c) => !c.selected);

    this.isSelectionMode = false;
  }

  toggleSelection(event: Event): void {
    // Prevent the click event from propagating to parent elements
    if (event && typeof event.stopPropagation === 'function') {
      event.stopPropagation();
    }
    // No need to toggle `category.selected` here since `ngModelChange` already handles it
    console.log('Selection toggled.');
  }
  

  onCategoryClick(category: Category) {
    if (!this.isSelectionMode) {
      this.router.navigate(['/wardrobe', category.id]); // Navigate to the wardrobe page with the category ID
    }
  }
 
  handleCardClick(category: Category) {
    console.log('Category clicked:', category);
    // Add your logic for handling category click, such as navigation or displaying subcategories
  }
  moveCategory() {
    const selectedCategories = this.categories.filter((c) => c.selected);
    console.log('Moving categories:', selectedCategories);
    // Implement move logic
  }
onItemClick(event:Event , category:Category){
  
    // Prevent navigation when the checkbox is clicked
    event.stopPropagation();
    
  
}

  get filteredCategories(): Category[] {
  // Filtering by selectedGender if it's set
  let filtered = this.selectedGender
    ? this.categories.filter(
        (category) =>
          category.gender.toLowerCase() === this.selectedGender.toLowerCase()
      )
    : this.categories;

  // Further filtering by searchText if it's set
  if (this.searchText) {
    filtered = filtered.filter((category) =>
      category.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  return filtered;
}

onDrop(event: CdkDragDrop<Category[]>) {
  const previousIndex = this.categories.findIndex(
    (c) => c === event.item.data
  );
  const currentIndex = event.currentIndex;

  // Remove the item from its previous position
  const movedCategory = this.categories[previousIndex];
  this.categories.splice(previousIndex, 1);
  this.categories.splice(currentIndex, 0, movedCategory);

  // Log the result for debugging
  console.log('Categories after move:', this.categories);
}
  

  onImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImageUrl = reader.result;
        this.categoryForm.patchValue({
          imageUrl: this.selectedImageUrl,
        });
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }
 
  closeCreateModal() {
    this.isCreateModalOpen = false;
  }

  createNewCategory() {
    if (this.categoryForm.valid) {
      const newCategory: Category = {
        id: Date.now(), // or use a proper ID generation method
       
        ...this.categoryForm.value,
        selected: false,
      };
  
      // Add the new category to the list
      this.categories.push(newCategory);
  
      // Reset form fields and close the modal
      this.categoryForm.reset(); 
      this.selectedImageUrl = '';
      this.closeCreateModal();
  
      // Trigger change detection to update the view immediately
      this.cdr.detectChanges(); 
  
      console.log('New collection added:', newCategory);
    } else {
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }
  
}
