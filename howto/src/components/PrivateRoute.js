import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute = ({component: Component, errorCode, ...rest}) => {
    return (
        <Route
            {...rest}
            render={() =>{
                if (localStorage.getItem('token') && errorCode !== 403){
                    return <Component />;
                } else {
                    console.log('Redirecting ting ting ting ting...');
                    return <Redirect to = "login" />
                }
            }}
        />
    );
};

const mapStateToProps = state =>({
    errorCode: state.errorCode
});

export default withRouter(
    connect(
        mapStateToProps, {}
    )(PrivateRoute)
);