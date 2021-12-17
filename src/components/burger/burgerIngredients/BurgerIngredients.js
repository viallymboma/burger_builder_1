import React from 'react';

import propTypes from 'prop-types';

const BurgerIngredients = (props) => {

    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className='BreadBottom'></div>
            break;
        case ('bread-top'):
            ingredient = <div className='BreadTop'></div>
            break;
        case ('meat'):
            ingredient = <div className='Meat'></div>
            break;

        case ('cheese'):
            ingredient = <div className='Cheese'></div>
            break;

        case ('salad'):
            ingredient = <div className='Salad'></div>
            break;
        case ('beacon'):
            ingredient = <div className='Beacon'></div>
            break;

        case ('seeds1'):
            ingredient = <div className='Seeds1'></div>
            break;
        case ('seeds2'):
            ingredient = <div className='Seeds2'></div>
            break;
    
        default:
            ingredient = null;
    }

    return ingredient;
}

BurgerIngredients.prototype = {
    type: propTypes.string.isRequired
}

export default BurgerIngredients;