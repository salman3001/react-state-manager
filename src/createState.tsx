import { createContext, useReducer } from "react"

export default function createState<I, A>(initialState: I, redcuerFunction: (state: I, action: A) => I) {

    const [state, dispatch] = useReducer(redcuerFunction, initialState)
    const stateContext = initialState
    const dispatchContext = (action:A)=>{}

    return [
        contextCreator,
        state,
        dispatch
    ]
}

const cart = createState({ name: "sallu" }, (state, action) => {
    return state
})


const [cartContext,cartState,cartDispatch] = cart

function createStore(contextArr,stateArr,dispatchArr){
 const store =createContext()
}