import React from 'react'
import {deleteHowTo} from '../actions'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import EditForm from './EditForm';

class HowTo extends React.Component{

    state={
        edit: false
    }

    deleteHowTo = id =>{
        console.log("Clicked me: " +  id);
        this.props.deleteHowTo(id)
    }

    editHowTo = () =>{
        this.setState({edit: true})  
    }


    render(){
        if(this.state.edit){
            console.log("fudge")
            return(
                <EditForm cardID={this.props.card.id}/>
            )
        }
    return(
        <div> 
        {console.log(this.props.card)} 
        {!this.props.card ? (
            <h5>Finding Card</h5>
        ): (
        <div>
        <h1>{this.props.card.title}</h1>,
        <img src={this.props.card.image} alt="How-toImage" />,
        <h4>{this.props.card.step1}</h4>
        <h4>{this.props.card.step2}</h4>
        <h4>{this.props.card.step3}</h4>
        <h4>{this.props.card.step4}</h4>
        <h4>{this.props.card.step5}</h4>
        <button onClick={() => this.deleteHowTo(this.props.card.id)}>Delete Your How-To</button>
        <button onClick={() => this.editHowTo()}>Edit This How-To</button>
        </div>
        )}

        </div>

        
    )

    }

    
}

const mapStateToProps = state => ({
    card: state.howto.cards
    
  });


export default withRouter(
    connect(
      mapStateToProps,
      {deleteHowTo}
    )(HowTo)
  );

