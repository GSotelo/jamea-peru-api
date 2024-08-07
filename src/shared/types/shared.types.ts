export type MenuItem<Id, Name> = {
  id: Id;
  name: Name;
};

export type Menu<T extends { type: string }, K> = {
  [Property in T as T['type']]: K[];
};

export type Recipe<Item> = {
  ingredients: string[];
} & Item;

export type FindMenu<Menu> = () => Menu;

export type FindRecipe<Id, Recipe> = (id: Id) => Promise<Recipe>;
