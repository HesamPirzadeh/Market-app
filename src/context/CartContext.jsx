import { Children, createContext, useContext, useReducer } from "react"

const initialState = {}

const reducer=(state,action)=>{
    console.log(state,action);
}

const Context = createContext()

function CartProvider({children}) {
    const [state,dispatch]=useReducer(reducer,initialState)
  
    return <Context.Provider value={{state,dispatch}}>{children}</Context.Provider>
    
}

const useCart =()=>{
    const{state,dispatch}= useContext(Context)
    return[state,dispatch]
}

export default CartProvider
export {useCart}