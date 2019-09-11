import axios from 'axios';
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';



const initialState = {
    isLoaded: false,
    customerDetails: {}
}
//Action Creator
export const myActionCreator = (customerDetails, status) => {
    console.log("Action");
    return {
        type: 'GET_CUSTOMER_DETAILS',
        payload: customerDetails,
        isLoaded: status,    
    }
}


//thunk
export function getListByThunk(phoneNumber) {
    console.log("thunk called")
    console.log(phoneNumber+"*")
    return function(dispatch){
        console.log("thunk return");
        return axios.get("http://localhost:4040/getCustomerById/"+phoneNumber).then(resp => dispatch(myActionCreator(resp.data,true)))  
    }
}

//Reducer
export const fetchReducer = (state = [initialState], action) => {
    console.log("reducer called");
    switch (action.type) {
        case 'GET_CUSTOMER_DETAILS':
            return Object.assign({},action);
        default:
            return state
    }
}


//Store
let restStore = createStore(fetchReducer, applyMiddleware(thunk));

export default restStore;