import React from 'react';

import Recipe from './recipe';

export default {
  title: 'Recipe',
  component: Recipe,
};

export const MyRecipe = () => <Recipe />;

MyRecipe.story = {
  name: 'My recipe',
};
