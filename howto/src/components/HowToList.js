import React from 'react';
import {getHowTos, editHowTo, addHowTo, deleteHowTo} from '../actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


export class HowToList extends React.Component{
    state={
        deletingHowToId: null,
        editingHowToId: null
    }

    componentDidMount(){
        console.log("FUUUCK")
        console.log( this.props.getHowTos());
        this.props.getHowTos();
       
       
    }

    // deleteHowTo = id =>{
    //     this.setState({deletingHowToId: id});
    //     this.props.deleteHowTo(id);
    // }

    // editHowTo = (e, howto) =>{
    //     e.preventDefault();
    //     this.props.editHowTo(howto).then(() =>{
    //         this.setState({editingHowToId: null})
    //     });
    // };
    render(){
        this.props.howtos.map(howto =>{
            console.log('99999999999999');
            console.log(howto);

        })
        return(
        <div className="friend-card">
        <h1>It Rendered</h1>
        </div>
        )
    }
}

const mapStateToProps = ({
    howtos,
}) => ({
    howtos
})

export default withRouter(
    connect(
        mapStateToProps,
        {getHowTos}
    )(HowToList)
)


