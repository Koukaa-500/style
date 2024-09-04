import { Article } from '../interfaces/article';

export const articles: Article[] = [
  {
    id: 1,
    imageUrl: '../../../assets/icon/article.png',
    brand: 'BERSHKA',
    description: 'Printed hoodie',
    price: 89,
    isFavorite: false,
    category: 'topSearches',
    sizes: ['S', 'M', 'L'],     // Multiple sizes
    gender: 'Men',
    colors:['#CE2193','red']               // Gender specification
  },
  {
    id: 2,
    imageUrl: '../../../assets/icon/article.png',
    brand: 'ZARA',
    description: 'Slim fit jeans',
    price: 120,
    isFavorite: false,
    category: 'topSearches',
    sizes: ['M', 'L', 'XL'],     // Add sizes if applicable
    gender: 'Women',
    colors:['#CE2193','red']                   // Specify gender if applicable
  },
  {
    id: 3,
    imageUrl: '../../../assets/icon/article.png',
    brand: 'H&M',
    description: 'Casual t-shirt',
    price: 49,
    isFavorite: false,
    category: 'trending',
    sizes: ['S', 'M'],           // Add sizes if applicable
    gender: 'Men', 
    colors:['#CE2193','red']           
  },
  {
    id: 4,
    imageUrl: '../../../assets/icon/article.png',
    brand: 'H&M',
    description: 'Casual t-shirt',
    price: 80,
    isFavorite: false,
    category: 'trending',
    sizes: ['S', 'M', 'L'],     // Add sizes if applicable
    gender: 'Men',
    colors:['#CE2193','red']                 // Specify gender if applicable
  },
  {
    id: 5,
    imageUrl: '../../../assets/icon/article.png',
    brand: 'NIKE',
    description: 'Running shoes',
    price: 200,
    isFavorite: false,
    category: 'sale',
    sizes: ['M', 'L', 'XL'],    // Add sizes if applicable
    gender: 'Men' ,
    colors:['#CE2193','red']                   // Specify gender if applicable
  },
  {
    id: 6,
    imageUrl: '../../../assets/icon/article.png',
    brand: 'ADIDAS',
    description: 'Sports jacket',
    price: 160,
    isFavorite: false,
    category: 'sale',
    sizes: ['S', 'M', 'L'],    // Add sizes if applicable
    gender: 'Men' ,
    colors:['#CE2193','red']               // Specify gender if applicable
  },
  {
    id: 7,
    imageUrl: '../../../assets/icon/article.png',
    brand: 'ZARA',
    description: 'Sports jacket',
    price: 160,
    isFavorite: false,
    category: 'sale',
    sizes: ['S', 'M', 'L'],    // Add sizes if applicable
    gender: 'Men',
    colors:['#CE2193','red']                // Specify gender if applicable
  }
];
