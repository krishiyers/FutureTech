import React from 'react';

import { Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class CreateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Create an event!</ModalHeader>
          <ModalBody>
          <Form>
          <FormGroup>
          <Label for="teamName">Event name</Label>
          <Input type="text" name="teamName" id="teamName" placeholder="Reactathon..." />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Event Organisers: Org</Label>
          <Input type="textarea" name="text" id="exampleText" placeholder="VES, Global..." />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select max no of members per team</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="startDate">Start Date</Label>
          <Input type="date" name="email" id="startDate"  />
          <Label for="endDate">End Date</Label>
          <Input type="date" name="email" id="endDate" />
        </FormGroup>    
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="john@example.com" />
        </FormGroup>
        <FormGroup>
          <Label for="contactNumber">Mobile number</Label>
          <Input type="text" name="contactNumber" id="contactNumber" placeholder="+91-9999999999" />
        </FormGroup>      
      </Form>          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CreateModal;