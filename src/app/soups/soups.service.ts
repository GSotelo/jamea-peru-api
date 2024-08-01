import { Injectable } from '@nestjs/common';
import fata from '@src/app/recipes/sopa-wantan/recipe.json';

export type SoupId =
  | 'sopa-wantan'
  | 'chilcano-de-pescado'
  | 'menestron-de-carne'
  | 'caldo-de-gallina';

export type SoupName =
  | 'Sopa Wantan'
  | 'Chilcano de Pescado'
  | 'Menestrón de Carne'
  | 'Caldo de Gallina';

export type SoupOverview = {
  id: SoupId;
  name: SoupName;
};

export type SoupRecipe = {
  ingredients: string[];
} & SoupOverview;

export type FindSoup = (id: string) => Promise<SoupRecipe>;

export type FindSoups = () => { soups: SoupOverview[] };

@Injectable()
export class SoupsService {
  findAll: FindSoups = () => {
    const soups: SoupOverview[] = [
      { id: 'sopa-wantan', name: 'Sopa Wantan' },
      { id: 'chilcano-de-pescado', name: 'Chilcano de Pescado' },
      { id: 'menestron-de-carne', name: 'Menestrón de Carne' },
      { id: 'caldo-de-gallina', name: 'Caldo de Gallina' },
    ];
    return { soups };
  };

  findById: FindSoup = async (id: SoupId) => {
    const bazz = await import(`../recipes/sopa-wantan/recipe.json`);
    console.log(bazz);
    console.log(fata);

    const recipe = await import(`./recipes/${id}`);
    console.log('recipe');
    console.log(recipe);
    return recipe;
  };
}
