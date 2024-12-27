import React from 'react'
import { currencyFormater } from '../util/formatting'

function CartItem({name,quantity,price,onDecrese, onIncrease}) {
    console.log(name,quantity,price,onDecrese, onIncrease)
  return (
    <li className='cart-item'>
      <p>
        {name} -{quantity} X {currencyFormater.format(price *20)}
      </p>
      <p className='cart-item-actions'>
        <button onClick={onDecrese}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  )
}

export default CartItem
