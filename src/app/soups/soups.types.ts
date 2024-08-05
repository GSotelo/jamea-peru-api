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

export type SoupMenu = {
  soups: SoupOverview[];
};

export type SoupRecipe = {
  ingredients: string[];
} & SoupOverview;
