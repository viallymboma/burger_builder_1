import React from 'react';
import BuildControl from './build_control/BuildControl';
import { controls } from '../../../utilities/Utilities';

const BuildControls = (props) => {
    return (
        <div className='BuildControls'>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong> </p>
            {
                controls.map(ctrl => (
                    <BuildControl 
                        label={ctrl.label} 
                        key={ ctrl.label} 
                        added={() => props.ingredientsAdded(ctrl.type)}
                        removed={() => props.ingredientsRemoved(ctrl.type)} 
                        disabled={props.disabled[ctrl.type]}
                    />
                ))
            }

            <button 
                className='OrderButton' 
                disabled={!props.purchasable}
                onClick={props.ordered}
            >
                    ORDER NOW
            </button>
        </div>
    )
}

export default BuildControls
