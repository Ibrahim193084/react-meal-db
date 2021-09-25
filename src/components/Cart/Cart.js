import React from 'react';

const Cart = (props) => {
    const names = props.name
    

    return (
        <div>
          <ul>
          <li>{names.strMeal}</li>
          </ul>
        </div>
    );
};

export default Cart;