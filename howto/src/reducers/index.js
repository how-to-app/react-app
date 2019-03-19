import {
    LOGIN_START,
    GET_HOWTOS_START,
    GET_HOWTOS_WIN,
    GET_HOWTOS_LOSE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from '../actions';

const initialState ={
    error: '',
    errorCode: '',
    gettingHowTos: false,
    howtos: [],
    loggingIn: false,
    registering: false
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

        case REGISTER_START:{
            return{
                ...state,
                error:"",
                registering: true
            }
        }
        case REGISTER_SUCCESS:{
            return{
                ...state,
                error: '',
                registering: false,  
            }
        }
        case REGISTER_FAILURE:{
            return{
                ...state,
                error: 'FAILED'
                  
            }
        }
        default: 
            return state;
    }
}

export default reducer;