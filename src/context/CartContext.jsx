import { Children, createContext, useReducer } from "react"

const initialState = {}

const reducer=()=>{}

const context = createContext()

function CartProvider({children}) {
    const [state,disPatch]=useReducer(reducer,initialState)
  
    return <context.Provider value={state}>{children}</context.Provider>
    
}

export default CartProvider