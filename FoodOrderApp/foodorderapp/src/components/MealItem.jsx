import React, { useContext } from 'react'
import { currencyFormater } from '../util/formatting'
import Button from './UI/Button'
import { CartContext } from '../store/CartContextProvider'
function MealItem({meal}) {
  const cartDatails=useContext(CartContext)
  function handleAdd(){
    cartDatails.addItem(meal)
  }
  return (
    <li className='meal-item'>
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.description}/>
        <div>
            <h3>{meal.name}</h3>
            <p className='meal-item-description'>{meal.description}</p>
            <p className='meal-item-price'>{currencyFormater.format(meal.price *20)}</p>
        </div>
        <p className='meal-item-actions'>
            <Button onClick={handleAdd}>Add to Cart</Button>
        </p>
      </article>
    </li>
  )
}

export default MealItem
