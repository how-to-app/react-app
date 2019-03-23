import React from "react";
import { connect } from "react-redux";
import { editHowTo } from "../actions";
//import Loader from "react-loader-spinner";
import './editForm.css';
import { Form, FormGroup, Input, Label, Button, Fade, Col } from "reactstrap";
import {history} from './History';


class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      howto: {
        image: this.props.card.image,
        title: this.props.card.title,
        step1: this.props.card.step1,
        step2: this.props.card.step2 || "",
        step3: this.props.card.step3 || "",
        step4: this.props.card.step4 || "",
        step5: this.props.card.step5 || "",
        id: this.props.cardID
      }
    };
  }
  
  handleChange = e => {
    this.setState({
      howto: {
        ...this.state.howto,
        [e.target.name]: e.target.value
      }
    });
  };

  editHowTo = e => {
    e.preventDefault();
    console.log(this.state.howto);
    this.props.editHowTo(this.state.howto).then(() => {
      history.push("/howtolist");
    });
    // this.setState({
    //   howtos: {
    //     image: "",
    //     title: "",
    //     step1: "",
    //     step2: "",
    //     step3: "",
    //     step4: "",
    //     step5: "", 
        
    //   }
    // });
  };

  render() {
    console.log(this.props);
    return (
      <div className="add-form">
      <h2>Edit Your How To-Do</h2>
        <Form onSubmit={this.editHowTo}>
          <div className='editForm'>
            <div className="editLeft">
              <FormGroup row>
                <Label for="title" sm={2} size="lg">
                  Title
                </Label>
                <Col sm={2}>
                  <textarea
                    type="text"
                    name="title"
                    value={this.state.howto.title}
                    onChange={this.handleChange}
                    placeholder="Title of Your How-To" 
                    bsSize="lg"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="step1" sm={2} size="lg">
                  Step 1
                </Label>
                <Col sm={2}>
                  <textarea
                    type="text"
                    name="step1"
                    value={this.state.howto.step1}
                    onChange={this.handleChange}
                    placeholder={this.state.howto.step1}
                    bsSize="lg"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="step2" sm={2} size="lg">
                  Step 2
                </Label>
                <Col sm={2}>
                  <textarea
                    type="text"
                    name="step2"
                    value={this.state.howto.step2}
                    onChange={this.handleChange}
                    placeholder="Step 2"
                    bsSize="lg"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="step3" sm={2} size="lg">
                  Step 3
                </Label>
                <Col sm={2}>
                  <textarea
                    type="text"
                    name="step3"
                    value={this.state.howto.step3}
                    onChange={this.handleChange}
                    placeholder="Step 3"
                    bsSize="lg"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="step4" sm={2} size="lg">
                  Step 4
                </Label>
                <Col sm={2}>
                  <textarea
                    type="text"
                    name="step4"
                    value={this.state.howto.step4}
                    onChange={this.handleChange}
                    placeholder="Step 4"
                    bsSize="lg"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="step5" sm={2} size="lg">
                  Step 5
                </Label>
                <Col sm={2}>
                  <textarea
                    type="text"
                    name="step5"
                    value={this.state.howto.step5}
                    onChange={this.handleChange}
                    placeholder="Step 5"
                    bsSize="lg"
                  />
                </Col>
              </FormGroup>
            </div>  
            <FormGroup row>
              <Label for="image" sm={2} size="lg">
                Image
              </Label>
              <Col sm={2}>
                <textarea
                  type="url"
                  name="image"
                  value={this.state.howto.image}
                  onChange={this.handleChange}
                  placeholder="image url"
                  bsSize="lg"
                />
              </Col>
            </FormGroup>
          </div>
          <Button>
           
              "Edit Your How-To"
            
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
 
});

export default connect(
  mapStateToProps,
  { editHowTo }
)(EditForm);
