import { TOGGLE_AUTH } from "./action";
const initialState = {
    isLoggedIn: false,
}
export const reducer = (state = initialState, action)=>{
    switch (action.type){
case TOGGLE_AUTH :
    return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
    }
    default :{
        return state
    }
    }
}