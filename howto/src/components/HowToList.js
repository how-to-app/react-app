import React from 'react';
import {getHowTos, editHowTo, addHowTo, deleteHowTo} from '../actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


export class HowToList extends React.Component{
    state={
        deletingHowToId: null,
        editingHowToId: null,
        blank: []
    }

    componentDidMount(){
        
        //console.log( this.props.getHowTos());
        this.props.getHowTos();
        this.setState({
            // ...this.state,
            blank: [this.props.howtos.cards]

        })
       
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
        
        return(
        <div className="friend-card">
        <h1>It Rendered</h1>
        {console.log('Props: ')}
        {console.log(this.props)}
        {console.log("Cards: ")}
        {console.log(this.props.howtos.cards)}
        {console.log("How Tos:")}
        {console.log(this.props.howtos)}
        {console.log(this.state.blank)}
        

        {/* {this.state.blank.map((card, index) =>{

            return(
                <h1>{card.title}</h1>
            )

        })} */}
        
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


