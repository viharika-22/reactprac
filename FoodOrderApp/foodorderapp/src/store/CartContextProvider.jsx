import { createContext, useReducer } from "react";


export const CartContext = createContext({
    items:[],
    addItem:(item)=>{},
    removeItem: (id)=>{}
})

export function CartReducer(state,action){
    if(action.type === "ADD_ITEM"){
        // never mutate state like this bcuz push will create new array
        // state.items.push(action.item)
        const existingCartItemIndex=state.items.findIndex((item)=>item.id === action.item.id)
        const updatedItems=[...state.items]
        if(existingCartItemIndex>-1){
            const existingItem = state.items[existingCartItemIndex]
            const updatedItem = {
                ...existingItem,
                quantity:existingItem.quantity+1
                }
            updatedItems[existingCartItemIndex]=updatedItem
        }else{
            updatedItems.push({...action.item,quantity:1})
        }

        return {...state,items:updatedItems}
    }
    if(action.type === "REMOVE_ITEM"){
        const existingCartItemIndex=state.items.findIndex((item)=>item.id === action.id)
        const existingItem = state.items[existingCartItemIndex]
        const updatedItems=[...state.items]
        if(existingItem.quantity==1){
            updatedItems.splice(existingCartItemIndex,1)
        }else{
            const updatedItem={
                ...existingItem,
                quantity:existingItem.quantity-1
            }
            updatedItems[existingCartItemIndex]=updatedItem
        }
        return {...state,items:updatedItems}
    }

    return state
}

export function CartContextProvider({children}){
    const [cart, dispatchCartActions]=useReducer(CartReducer,{items:[]})

    function addItem(item){
        dispatchCartActions({type:'ADD_ITEM',item})
    }
    function removeItem(id){
        dispatchCartActions({type:'REMOVE_ITEM',id})
    }

    const cartContext={
        items:cart.items,
        addItem,
        removeItem
    }
console.log(cartContext)
    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}

export default CartContext