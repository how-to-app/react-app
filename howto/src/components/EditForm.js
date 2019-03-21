import React from 'react';
import { Form, FormGroup, Input, Label, Button, Fade, Col } from "reactstrap";
import Loader from "react-loader-spinner";
class EditForm extends React.Component{
    state = {
        howto: this.props.howto
    }


handleChanges = e => {

    
 
}
editHowTo = e =>{
    this.props.editHowTo(e, this.state.howto)  
};

render(){
    return(
      <div className="edit-form">
        <Form onSubmit={this.editHowTo}>
          <FormGroup row>
            <Label for="image" sm={2} size="lg">
              Image
            </Label>
            <Col sm={2}>
              <Input
                type="image"
                name="image"
                value={this.state.howtos.img}
                onChange={this.handleChange}
                placeholder="image url"
                bsSize="lg"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="title" sm={2} size="lg">
              Title
            </Label>
            <Col sm={2}>
              <Input
                type="text"
                name="title"
                value={this.state.howtos.title}
                onChange={this.handleChange}
                placeholder="password"
                bsSize="lg"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="step1" sm={2} size="lg">
              Step 1
            </Label>
            <Col sm={2}>
              <Input
                type="text"
                name="Step 1"
                value={this.state.howtos.step1}
                onChange={this.handleChange}
                placeholder="email"
                bsSize="lg"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="step2" sm={2} size="lg">
              Step 2
            </Label>
            <Col sm={2}>
              <Input
                type="text"
                name="Step 2"
                value={this.state.howtos.step2}
                onChange={this.handleChange}
                placeholder="email"
                bsSize="lg"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="step3" sm={2} size="lg">
              Step 3
            </Label>
            <Col sm={2}>
              <Input
                type="text"
                name="Step 3"
                value={this.state.howtos.step3}
                onChange={this.handleChange}
                placeholder="email"
                bsSize="lg"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="step4" sm={2} size="lg">
              Step 4
            </Label>
            <Col sm={2}>
              <Input
                type="text"
                name="Step 4"
                value={this.state.howtos.step4}
                onChange={this.handleChange}
                placeholder="email"
                bsSize="lg"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="step5" sm={2} size="lg">
              Step 4
            </Label>
            <Col sm={2}>
              <Input
                type="text"
                name="Step 5"
                value={this.state.howtos.step5}
                onChange={this.handleChange}
                placeholder="email"
                bsSize="lg"
              />
            </Col>
          </FormGroup>
          
          <Button>
            {this.props.addingHowTo ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Add Your How-To"
            )}
          </Button>
        </Form>
      </div>
    );
  }
}



export default EditForm;