import type { CategoryInfo, MenuItem } from '../types/menu';

export const categories: CategoryInfo[] = [
  { key: 'starters', title: 'Закуски' },
  { key: 'mains', title: 'Основні страви' },
  { key: 'sides', title: 'Додатки' },
  { key: 'desserts', title: 'Десерти' },
];

export const menuItems: MenuItem[] = [
  { id: 'bruschetta', name: 'Брускети', price: 85, category: 'starters' },
  { id: 'kapreze', name: 'Капрезе', price: 95, category: 'starters' },
  { id: 'falafel', name: 'Фалафель', price: 110, category: 'starters' },
  { id: 'olives', name: 'Мариновані оливки', price: 75, category: 'starters' },
  { id: 'cheese', name: 'Сирна тарілка', price: 125, category: 'starters' },
  { id: 'salad', name: 'Салат', price: 105, category: 'starters' },
  { id: 'steak', name: 'стейк', price: 145, category: 'mains' },
  { id: 'salmon', name: 'Лосось', price: 245, category: 'mains' },
  { id: 'burger', name: 'Бургер', price: 165, category: 'mains' },
  { id: 'kebab', name: 'Кебаб', price: 195, category: 'mains' },
  { id: 'fries', name: 'Картопля фрі', price: 65, category: 'sides' },
  { id: 'rice', name: 'Рис', price: 55, category: 'sides' },
  { id: 'croutons', name: 'Грінки', price: 45, category: 'sides' },
  { id: 'pita', name: 'Піта', price: 35, category: 'sides' },
  { id: 'pilaf', name: 'Рисовий плов', price: 85, category: 'sides' },
  { id: 'pahlava', name: 'Пахлава', price: 65, category: 'desserts' },
  { id: 'tart', name: 'Тарт', price: 75, category: 'desserts' },
  { id: 'tiramisu', name: 'Тірамісу', price: 110, category: 'desserts' },
  { id: 'panna-cotta', name: 'Панакота', price: 95, category: 'desserts' },
];
