import React from 'react';
import './FoodItems.css'

const FoodItem = (props) =>{
    return(
        <div className = "FoodItem">
            <img className= 'foodImage' src={props.imageOfItem} alt={props.itemName}/>
            <p className = 'foodItemName'>{props.itemName}</p>
            <button onClick = {props.onNegativeClick} className = "buttonInc buttonIncLeft">-</button>
            <input className = 'inputNumber'type= 'text' onChange= {props.onItemValueEnter} value = {props.itemsValue}></input>
            <button onClick = {props.onPositiveClick} className = "buttonInc">+</button>
            <p className = 'priceOfItem'>&#8377; {props.Price}</p>
            <button className = "buttonInc buttonCross material-icons " onClick = {props.onCrossCLick}>delete</button>
        </div>
    )
}

export default FoodItem;