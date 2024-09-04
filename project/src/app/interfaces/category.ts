import { Subcategory } from "./subcategory";

export interface Category {
    id: number; // Unique identifier for each category
    name: string; // Name of the category (e.g., "Hoodies")
    imageUrl: string; // URL of the image representing the category
    gender:string;
    subcategories?: Subcategory[]; // Optional subcategories if available
    selected?: boolean;
  }