import {
    LOGIN_START,
    GET_HOWTOS_START,
    GET_HOWTOS_WIN,
    GET_HOWTOS_LOSE
} from '../actions';

const initialState ={
    error: '',
    errorCode: '',
    gettingHowTos: false,
    howtos: [],
    loggingIn: false
}

const reducer = (state= initialState, action) =>{
    switch (action.type){
        case LOGIN_START:{
            return{
                ...state,
                loggingIn: true
            }
        }
        case GET_HOWTOS_START:{
            return{
                ...state,
                error: '',
                gettingHowTos: true
            }
        }
        case GET_HOWTOS_WIN:{
            console.log(action.payload);
            return{
                ...state,
                error: '',
                gettingHowTos: false,
                howtos: action.payload
            }
        }

        case GET_HOWTOS_LOSE:{
            return{
                ...state,
                errorCode: action.payload.status
            }
        }
        default: 
            return state;
    }
}

export default reducer;