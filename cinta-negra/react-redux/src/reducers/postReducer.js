import {FETCH_POST, NEW_POST} from '../actions/types';

const initialState = {
    items: [],
    item:{}
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_POST:
            return{
                ...state,
                items:action.payload
            }
            break;
        case NEW_POST:
            return{
                ...state,
                item:action.payload
            }
            break;
        default:
            console.log('default');
            return state;
            // por defecto en caso de que sea codigo ques eva utilizar y da una accion que no reconoce
    }
}