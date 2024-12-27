import React, { useContext } from 'react'
import Modal from './UI/Modal' 
import Input from './UI/Input'
import Button from './UI/Button'
import CartContext from '../store/CartContextProvider';
import UserProgressContext from '../store/UserProgressContext';
import { currencyFormater } from '../util/formatting';
function Chckout() {
    const crtCtx = useContext(CartContext);
      const userProgCtx = useContext(UserProgressContext);
      const totalPrice = crtCtx.items.reduce((totalCartPrice, item) => {
        return totalCartPrice + item.quantity * item.price * 20;
      }, 0);
      function handleClose(){
        userProgCtx.hideCheckout()
      }
  return (
    <Modal open={userProgCtx.progress==='checkout'}>
        <form>
            <h2>Checkout</h2>
            <p>Total Amount :{currencyFormater.format(totalPrice)}</p>
            <Input lable='Full Name' type='text' id='full-name'/>
            <Input lable='EMail Address' type='email' id='email'/>
            <Input lable='Street' type='text' id='street'/>
            <div className='control-row'>
            <Input lable='Postal Code' type='text' id='postal-code'/>
            <Input lable='City' type='text' id='city'/>
            </div>
<p className='modal-actions'>
    <Button textOnly type="button" onClick={handleClose}>Close</Button>
    <Button>Submit Order</Button>
</p>
        </form>
    </Modal>
  )
}

export default Chckout
