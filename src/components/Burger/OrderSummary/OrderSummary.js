import React,{ Component }  from 'react'
import Aux from "../../../hoc/Auxilliary";
import Button from '../../UI/Button/Button';


class OrderSummary extends Component {
    
    // const ingredientSummary = Object.keys(ingredients).map(ingKey => {
    //     return <li style={{
    //         listStyle:"none"
    //     }} key={ingKey+ingKey[0]}><span>{ingKey[0].toUpperCase() + ingKey.slice(1)}</span>:{ingredients[ingKey]}</li>
    // });

    render(){
        const ings = Object.entries(this.props.ingredients);
    // console.log(ings);
        const items = ings.map( ing => {
            return <li style={{
                listStyle:"none"
            }} key={ing[0]+ing[0].at(-1)}>
                <span>{ing[0][0].toUpperCase() + ing[0].slice(1)}</span>:{ing[1]}</li>
        });
    
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {
                    items
                }
                

                
            </ul>
            <p><strong>Total Price:${this.props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button clicked={this.props.purchaseCanceled} btnType="Danger">CANCEL</Button>
            <Button clicked={this.props.purchaseContinued}  btnType="Success">CONTINUE</Button>
            
            
        </Aux>
    )
    }
}


export default OrderSummary;