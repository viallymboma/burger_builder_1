import React, { Component } from "react";
import Burger from "../../components/burger/Burger";
import Aux from "../../hoc/Aux";
import BuildControls from "../../components/burger/build_controls/BuildControls";
import Modal from "../../components/ui/modal/Modal";
import OrderSummary from "../../components/burger/order_summary/OrderSummary";

import instance from "../../axios_orders";
import axios from "axios";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    beacon: 0.7,
}

class Burgerbuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            beacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
    }

    // componentDidMount () {
    //     this.updatePurchasable ();
    // }

    updatePurchasable (ingredients) {
        // const ingredients = {
        //     ...this.state.ingredients
        // }
        console.log(ingredients)
        const sum = Object.keys(ingredients)
        const mapedSum = sum.map(igKey => {
            return ingredients[igKey]
        });
        const reduceMapedSum = mapedSum.reduce((sum, el) => {
            return sum + el;
        }, 0)

        this.setState({ purchasable: reduceMapedSum > 0 })


        console.log(sum)
        console.log(mapedSum)
        console.log(reduceMapedSum)
    }

    purchaseHandler = () => {
        this.setState( { purchasing: true } )
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        // alert("Proceed to payment");
        axios.post()
    }

    // Adding ingredient method
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchasable (updatedIngredients)
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        console.log(oldCount)
        let updatedCount;
        if (oldCount === 0) {
            updatedCount = 0;
        } else if (oldCount > 0) {
            updatedCount = oldCount - 1;
            console.log(updatedCount)

            const updatedIngredients = {
                ...this.state.ingredients
            };

            updatedIngredients[type] = updatedCount;
            const priceDeduction = INGREDIENT_PRICES[type]
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceDeduction;
            this.setState({
                totalPrice: newPrice,
                ingredients: updatedIngredients
            });
            this.updatePurchasable (updatedIngredients)
        }
    }

    render () {
        const disableInfo = {
            ...this.state.ingredients
        };

        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }

        return (
            <Aux >
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredients={ this.state.ingredients } 
                        purchaseCancel={ this.purchaseCancelHandler }
                        purchaseContinued={ this.purchaseContinueHandler }
                        price={this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredients={ this.state.ingredients } />
                <BuildControls 
                    ingredientsAdded={ this.addIngredientHandler } 
                    ingredientsRemoved={ this.removeIngredientHandler } 
                    disabled={disableInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}
                />
            </Aux>
        )
    }
}

export default Burgerbuilder;