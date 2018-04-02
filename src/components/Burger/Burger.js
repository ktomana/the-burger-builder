import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  console.log(props);
  const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])]
        .map((_, i) => {
          return <BurgerIngredient key={igKey + i} type={igKey} />
        });
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);

  const transformedIngredientsValidated = transformedIngredients.length === 0 ?
    <p>Please start adding ingredients!</p> :
    transformedIngredients;

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredientsValidated}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
