import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Meal from '../Meal/Meal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const MealsContainer = () => {
    const [meals,setMeals] = useState([])
    const [names,setNames] = useState([])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[])
    const buttonHandler = (meal) => {
     const newNames = [...names,meal]
     setNames(newNames)
    }
    // console.log(name)
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div>
            <Header/>
            <div className="row">
                <div className="col-md-8 mt-5" style={{borderRight: '1px solid lightgray'}}>
                    {
                meals.map(meal => <Meal key={meal.idMeal} meal={meal} buttonHandler={buttonHandler}  />)
            }
                </div>
                <div className="col-md-4 mt-5">
                <h3 className="text-center"><span className="fw-bold">{element}</span> Selected Items</h3>
               {
                   names.map(name=><Cart name={name} key={name.idMeal}/>)
               }
            
                </div>
            </div>
           
        </div>
    );
};

export default MealsContainer;