import type { SoupRecipe, SoupOverview } from '@src/app/soups/soups.service';

export const overview: SoupOverview = {
  id: 'sopa-wantan',
  name: 'Sopa Wantan',
};

export const recipe: SoupRecipe = {
  ...overview,
  ingredients: ['pollo', 'verduras', 'fideos', 'huevo'],
};
