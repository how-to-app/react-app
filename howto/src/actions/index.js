import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const GET_HOWTOS_START = 'GET_TODOS_START';
export const GET_HOWTOS_WIN = 'GET_TODOS_WIN';
export const GET_HOWTOS_LOSE = 'GET_TODOS_LOSE';

export const login = whodatis => dispatch =>{
    dispatch({type: LOGIN_START});
    return axios.post('localhost:3700/api/login', whodatis).then(res => {
        localStorage.setItem('token', res.data.payload)
    });
};


export const getHowTos = () => dispatch =>{
    dispatch({type: GET_HOWTOS_START});
    axios
        .get('', {
            headers: {Authorization: localStorage.getItem('token')}
        })
        .then(res=>{
            console.log(res);
            dispatch({type: GET_HOWTOS_WIN, payload: res.data.data})
        })
        .catch(err => {
            console.log(err.response);
            if (err.response.status === 403){
                localStorage.removeItem('token')
            }
            dispatch({type: GET_HOWTOS_LOSE, payload: err.response})
        });
        
};

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';


export const register = creds => dispatch =>{
    dispatch({type: REGISTER_START});
    return axios.post('localhost:3700/api/login', creds)
    .then (res=>{
        console.log(res);
        dispatch({type: REGISTER_SUCCESS})
    })
    .catch(err => {
        dispatch({type: REGISTER_FAILURE})
    })
    };

    
