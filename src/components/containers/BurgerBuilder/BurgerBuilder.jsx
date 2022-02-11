import React,{Component} from "react";
import Aux from "../../../hoc/Auxilliary";
import Burger from "../../Burger/Burger";
import BuildControls from "../../Burger/BuildControls/BuildControls";
import Modal from "../../UI/Modal/Modal";
import OrderSummary from "../../Burger/OrderSummary/OrderSummary";
const INGREDIENT_PRICES = {
    salad:0.5,
    bacon:0.7,
    meat:1.3,
    cheese:0.4
}
class BurgerBuilder extends Component{
    state = {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:0,
        purchaseable:false,
        purchasing:false
    }

    purchaseHandler = () => {
        this.setState({purchasing:true});
    }

    updatePurchaseState = () => {
        const ingredients = {
            ...this.state.ingredients
        }
        const sum = Object.keys(ingredients).map((ingKey) => {
            return ingredients[ingKey]
        }).reduce((acc,item) => {
            return acc + item
        },0)

        this.setState({purchaseable:sum > 0})
    }
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;

        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];

        const oldPrice = this.state.totalPrice;

        const newPrice = oldPrice + priceAddition;
        
        this.setState((prevState,props) => {
            return { ingredients:{...updatedIngredients} ,totalPrice: newPrice }
        },
        () => {
            this.updatePurchaseState();
        }
        )
        
    }

    removeIngredientHandler = (type) => {
        const priceDeduction = INGREDIENT_PRICES[type];

        const oldCount = this.state.ingredients[type];
        const oldPrice = this.state.totalPrice;

        if(oldCount <= 0 && oldPrice <= 0) return;
        const updatedCount = oldCount - 1;
        const updatedIngredients = {...this.state.ingredients};

        const newPrice = oldPrice - priceDeduction;

        updatedIngredients[type] = updatedCount;

        this.setState((prevState,props) => {
            return { ingredients:{...updatedIngredients} ,totalPrice: newPrice }
        },
            () => {
                this.updatePurchaseState();
            }
        )
        
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing:false});
    }
    purchaseContinueHandler = () => {
        alert("Here is your Burger");
    }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(const key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0 ;
        }
        return (
        <Aux>
            <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                <OrderSummary 
                price={this.state.totalPrice.toFixed(2)}
                purchaseCanceled={this.purchaseCancelHandler} 
                purchaseContinued={this.purchaseContinueHandler} 
                ingredients={this.state.ingredients}/>
            </Modal>
            
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls ingredientAdded = {this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler} 
            disabled={disabledInfo} 
            price={this.state.totalPrice.toFixed(2)}
            purchaseable={this.state.purchaseable}
            ordered = {this.purchaseHandler}
            />


        </Aux>
        );
    }
}



export default BurgerBuilder;