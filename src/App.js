import React, {useState} from 'react';
import './App.css';
import ShoppingCart from './ShoppingCart';
import PaymentDetails from './PaymentDetails';

function App() {
  const [myCartItems, setCartItems] = useState({
    cartItems: [
      { itemName: "Pizza", Price: 10.00, imageOfItem: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg', itemsValue :1, id: "pizza" },
      { itemName: "French Fries", Price: 8.50, imageOfItem: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?cs=srgb&dl=pexels-dzenina-lukac-1583884.jpg&fm=jpg',itemsValue:1, id: "fries" },
      { itemName: "Brownie", Price: 15.00, imageOfItem: 'https://thestayathomechef.com/wp-content/uploads/2017/06/Most-Amazing-Brownies-SQUARE-2-e1497041925349.jpg',itemsValue:1, id: "brownie" }
    ]
  });

  const onItemValueCheck = (value, id) =>{
    const enteredIndex = myCartItems.cartItems.findIndex(p => p.id === id);
    const itemValue = {...myCartItems.cartItems[enteredIndex]};
    if(value >= 0 || value === ''){
      itemValue.itemsValue = value;
      const cartItems = [...myCartItems.cartItems];
      cartItems[enteredIndex] = itemValue;
      setCartItems({cartItems : cartItems});

    }
    else{
      alert("Please enter a value greater then 0 and only Numbers are allowed");
      itemValue.itemsValue = 0;
      const cartItems = [...myCartItems.cartItems];
      cartItems[enteredIndex] = itemValue;
      setCartItems({cartItems : cartItems});
    }
  }

  const onItemValueEnter = (event, id) =>{
    let value = event.target.value;
    onItemValueCheck(value, id);
  }

  const onNegativeClick = (id) => {
    const enteredIndex = myCartItems.cartItems.findIndex(p => p.id === id);
    const itemValue = {...myCartItems.cartItems[enteredIndex]};
    let value = itemValue.itemsValue - 1;
    onItemValueCheck(value, id);
  }

  const onPositiveClick = (id) => {
    const enteredIndex = myCartItems.cartItems.findIndex(p => p.id === id);
    const itemValue = {...myCartItems.cartItems[enteredIndex]};
    let value = itemValue.itemsValue + 1;
    onItemValueCheck(value, id);
  }

  const onCrossCLick = (index) => {
    let cartItems = [...myCartItems.cartItems];
    cartItems.splice(index, 1);
    setCartItems({ cartItems: cartItems });
  }

  let totalValueOfItems = 0;
  for (let i = 0; i< myCartItems.cartItems.length; i++){
    totalValueOfItems = totalValueOfItems +(myCartItems.cartItems[i].itemsValue * myCartItems.cartItems[i].Price);
  }


  return (
    <div className="App">
      <div className="ShoppingContainer">
        <ShoppingCart 
        cartItems = {myCartItems.cartItems} 
        onItemValueEnter = {onItemValueEnter}
        onNegativeClick = {onNegativeClick}
        onPositiveClick = {onPositiveClick}
        onCrossCLick = {onCrossCLick}
        totalValueOfItems = {totalValueOfItems}
        />
      </div>
      <div className = 'PaymentDetailsCaontainer'>
        <PaymentDetails></PaymentDetails>
      </div>
    </div>
  );
}

export default App;
