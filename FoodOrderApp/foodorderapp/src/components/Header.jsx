import React, { useContext } from 'react'
import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import { CartContext } from '../store/CartContextProvider'
import UserProgressContext from '../store/UserProgressContext'

function Header() {
  const crtCtx= useContext(CartContext)
  const userProgCtx=useContext(UserProgressContext)
  const totalItemInCart=crtCtx.items.reduce((totalNum,item)=>{
    return totalNum+item.quantity
  },0)
  function handleCart(){
    userProgCtx.showCart()
  }
  return (
    <header id='main-header'>
      <div id='title'>
        <img src={logo}/>
        <h1>React Food Order App</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleCart}>Cart ({totalItemInCart})</Button>
      </nav>
    </header>
  )
}

export default Header
