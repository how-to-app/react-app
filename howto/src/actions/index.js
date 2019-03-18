import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const GET_TODOS_START = 'GET_TODOS_START';
export const GET_TODOS_WIN = 'GET_TODOS_WIN'
export const GET_TODOS_LOSE = 'GET_TODOS_LOSE'

export const login = whodatis => dispatch =>{
    dispatch({type: LOGIN_START});
    return axios.post('', whodatis).then(res => {
        localStorage.setItem('token', res.data.payload)
    });
};

export const getToDos = () => dispatch =>{
    dispatch({type: GET_TODOS_START});
    axios
        .get('', {
            headers: {Authorization: localStorage.getItem('token')}
        })
        .then(res=>{
            console.log(res);
            dispatch({type: GET_TODOS_WIN, payload: res.data.data})
        })
        .catch(err => {
            console.log(err.response);
            if (err.response.status === 403){
                localStorage.removeItem('token')
            }
            dispatch({type: GET_TODOS_LOSE, payload: err.response})
        });
        
};