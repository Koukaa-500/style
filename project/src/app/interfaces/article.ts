export interface Article {
  id: number;
  imageUrl: string;
  brand: string;
  description: string;
  price: number;
  isFavorite?: boolean;
  category: string;
  sizes: string[];   // Array to hold multiple sizes
  gender: string;
  colors: string[];
}
