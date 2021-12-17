import React from 'react';
import BurgerIngredients from './burgerIngredients/BurgerIngredients';

const Burger = (props) => {

    const transformedIngredients = Object.keys(props.ingredients);
    const mapTransformedIngredients = transformedIngredients.map(ingKey => {
        // console.log([...Array(props.ingredients[ingKey])])
        return [...Array(props.ingredients[ingKey])].map((_, i) => {
            return <BurgerIngredients key={ingKey + i} type={ingKey} />
        })
    })

    // the below code helps us flaten all the inner array of
    // the above array into on single with all elements
    // ex: array[arr1[1, 2, 3], arr2[4, 5, 6]] becomes array[1, 2, 3, 4, 5, 6]
    let flatenedMapTransformedIngredients = mapTransformedIngredients.reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    console.log(mapTransformedIngredients)
    console.log(flatenedMapTransformedIngredients)

    if (flatenedMapTransformedIngredients.length === 0) {
        flatenedMapTransformedIngredients = <p>Add Ingredients</p>
    }

    return (
        <div className='Burger'>
            <BurgerIngredients type="bread-top" />
                { flatenedMapTransformedIngredients }
            <BurgerIngredients type="bread-bottom" />
        </div>
    )
}

export default Burger;





// <BurgerIngredients type="cheese" />
// <BurgerIngredients type="meat" />
// <BurgerIngredients type="cheese" />
// <BurgerIngredients type="meat" />
// <BurgerIngredients type="cheese" />
// <BurgerIngredients type="meat" />
// <BurgerIngredients type="cheese" />
// <BurgerIngredients type="meat" />
// <BurgerIngredients type="cheese" />
// <BurgerIngredients type="meat" />
// <BurgerIngredients type="cheese" />
// <BurgerIngredients type="meat" />
// <BurgerIngredients type="cheese" />
// <BurgerIngredients type="meat" />