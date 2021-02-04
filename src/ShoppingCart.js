import React from 'react';
import './ShoppingCart.css'
import FoodItem from './FoodItems'

const ShoppingCart = (props) => {
    const eachPerson = () => {
        if (props.cartItems.length === 0) {
            return (<p className = 'noItemsDiv'>No Items In cart, go to shopping</p>)
        }
        else {
            return props.cartItems.map((cartItem, index) => {
                return (
                    <FoodItem
                        itemName={cartItem.itemName}
                        Price={(cartItem.Price * cartItem.itemsValue).toFixed(2)}
                        imageOfItem={cartItem.imageOfItem}
                        itemsValue={cartItem.itemsValue}
                        key={cartItem.id}
                        onItemValueEnter={event => props.onItemValueEnter(event, cartItem.id)}
                        onNegativeClick={() => props.onNegativeClick(cartItem.id)}
                        onPositiveClick={() => props.onPositiveClick(cartItem.id)}
                        onCrossCLick={() => props.onCrossCLick(index)}
                    ></FoodItem>
                )
            })
        }
    };

    return (
        <div className='shoppingCart'>
            <p className='headerTitle'>Shopping Cart</p>
            {eachPerson()}
            <div className='finalPriceContainer'>
                <p className = "continueShopping"><span className = "continueShoppingArrow">&larr;</span>  Continue Shopping </p>
                <p className = 'finalPrice'>Subtotal: <span>&#8377; {props.totalValueOfItems.toFixed(2)}</span></p>
            </div>
        </div>
    )
}

export default ShoppingCart;