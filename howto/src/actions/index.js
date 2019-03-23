import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const GET_HOWTOS_START = 'GET_TODOS_START';
export const GET_HOWTOS_WIN = 'GET_TODOS_WIN';
export const GET_HOWTOS_LOSE = 'GET_TODOS_LOSE';

export const login = whodatis => dispatch =>{
    dispatch({type: LOGIN_START});
    return axios.post('https://limitless-fjord-83997.herokuapp.com/api/login', whodatis).then(res => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('username', res.data.username);
    });
};

export const GET_AHOWTO_START = 'GET_AHOWTO_START';
export const GET_AHOWTO_SUCCESS = 'GET_AHOWTO_SUCCESS';
export const GET_AHOWTO_FAILURE = 'GET_AHOWTO_FAILURE';

export const getOneHowTo = (id) => dispatch =>{
  dispatch({type: GET_AHOWTO_START});
  axios
      .get(`https://limitless-fjord-83997.herokuapp.com/api/cards/${id}`)
            
      .then(res=>{
        console.log('Then: ')
          console.log(res);
          dispatch({type: GET_AHOWTO_SUCCESS, payload: res.data})
      })
      .catch(err => {
          console.log(err.response);
          // if (err.response.status === 403){
          //     localStorage.removeItem('token')
          // }
          dispatch({type: GET_AHOWTO_FAILURE, payload: err.response})
      });
      
};

export const getHowTos = () => dispatch =>{
    dispatch({type: GET_HOWTOS_START});
    axios
        .get('https://limitless-fjord-83997.herokuapp.com/api/cards')
            //headers: {Authorization: localStorage.getItem('token')}
           
        .then(res=>{
          console.log('Then: ')
            console.log(res);
            dispatch({type: GET_HOWTOS_WIN, payload: res.data})
        })
        .catch(err => {
            console.log(err.response);
            // if (err.response.status === 403){
            //     localStorage.removeItem('token')
            // }
            dispatch({type: GET_HOWTOS_LOSE, payload: err.response})
        });
        
};

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';


export const register = creds => dispatch =>{
    dispatch({type: REGISTER_START});
    return axios.post('https://limitless-fjord-83997.herokuapp.com/api/register', creds)
    .then (res=>{
        console.log(res);
        dispatch({type: REGISTER_SUCCESS})
    })
    .catch(err => {
        dispatch({type: REGISTER_FAILURE})
    })
};

export const ADD_HOWTO_START = 'ADD_HOWTO_START';
export const ADD_HOWTO_SUCCESS = 'ADD_HOWTO_SUCCESS';
export const ADD_HOWTO_FAILURE = 'ADD_HOWTO_FAILURE';
export const USER_UNAUTHORIZED = 'USER_UNAUTHORIZED';

export const addHowTo = howto => dispatch => {
    dispatch({ type: ADD_HOWTO_START });
    return axios
      .post('https://limitless-fjord-83997.herokuapp.com/api/cards', howto) 
      .then(res => {
        dispatch({ type: ADD_HOWTO_SUCCESS, payload: res.data });
      })
      .catch(err => {
        if (err.response.status === 403) {
          dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
        } else {
          dispatch({ type: ADD_HOWTO_FAILURE, payload: err.response });
        }
      });
  };

export const DELETE_HOWTO_START = 'DELETE_HOWTO_START';
export const DELETE_HOWTO_SUCCESS = 'DELETE_HOWTO_SUCCESS';
export const DELETE_HOWTO_FAILURE = 'DELETE_HOWTO_FAILURE';


export const deleteHowTo = howto => dispatch => { 
    dispatch({ type: DELETE_HOWTO_START });
    
    return axios
    
    .delete(`https://limitless-fjord-83997.herokuapp.com/api/cards/${howto}`)
    
    .then(res => {
      dispatch({ type: DELETE_HOWTO_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.res);
      dispatch({ type: DELETE_HOWTO_FAILURE, payload: err.response });
      
    });
  };


export const EDIT_HOWTO_START = 'EDIT_HOWTO_START';
export const EDIT_HOWTO_SUCCESS = 'EDIT_HOWTO_SUCCESS';
export const EDIT_HOWTO_FAILURE = 'EDIT_HOWTO_FAILURE';

export const editHowTo = howto => dispatch => {
  dispatch({ type: EDIT_HOWTO_START });
  console.log(`HowTO: ${howto}`)
  return axios
    
    .put(`https://limitless-fjord-83997.herokuapp.com/api/cards/${howto.cardID}`, howto)
    
    .then(res => {
      dispatch({ type: EDIT_HOWTO_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.response.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: EDIT_HOWTO_FAILURE, payload: err.response });
      }
    });
};
    
