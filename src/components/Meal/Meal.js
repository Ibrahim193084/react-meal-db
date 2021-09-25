import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Meal = (props) => {
    // console.log(props)
    const {strMeal,strMealThumb,strTags} = props.meal
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div>
            <div className="card mb-3 mx-5 " style={{maxWidth:'1000px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={strMealThumb} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body mt-5">
        <h5 className="card-title">{strMeal}</h5>
        <p className="card-text">{strTags}</p>
        <button onClick={()=>props.buttonHandler(props.meal)} className="btn btn-secondary">{element} Add to cart</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Meal;