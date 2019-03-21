import React from "react";
import { getHowTos, getOneHowTo} from "../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

export class HowToList extends React.Component {
  state = {
    deletingHowToId: null,
    editingHowToId: null,
   
  };

  componentDidMount() {
    //console.log( this.props.getHowTos());
    this.props.getHowTos();

  }

  clickHandler(event, card){
      event.preventDefault();
      this.props.getOneHowTo(card.id);
      this.props.history.push(`/howto/${card.id}`);

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
  render() {
    return (
      <div className="friend-card">
        <h1>Learn How To Do What You Wanna Do:</h1>
        <h2>Contribute to the Cause:</h2>
        <button>Add How-To</button>
        {!this.props.cards ? (
          <p>Fetching how-tos</p>
        ) : (
          this.props.cards.map((card, index) => {
            return (
              <div onClick={(event) => this.clickHandler(event, card)}>
                <h1>{card.title}</h1>
                <img src={card.image} alt="How-toImage" />
                <h4>1. {card.step1}</h4>
                {!card.step2 ? (
                    null
                ): (<h4>2. {card.step2}</h4>)}
                {!card.step3 ? (
                    null
                ): (<h4>3. {card.step3}</h4>)}
                {!card.step4 ? (
                    null
                ): (<h4>4. {card.step4}</h4>)}
                {!card.step5 ? (
                    null
                ): (<h5>5. {card.step5}</h5>)}

              </div>
            );
          })
        )}

        {/* {this.state.blank.map((card, index) =>{

            return(
                <h1>{card.title}</h1>
            )

        })} */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.howtos.cards
 
});

export default withRouter(
  connect(
    mapStateToProps,
    { getHowTos,  getOneHowTo }
  )(HowToList)
);
