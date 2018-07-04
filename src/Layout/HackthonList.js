import React from "react";
import { Button, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RegisterModal from './RegisterModal';

export default class HackthonList extends React.Component {
    constructor(props) {
        super(props);
       }

  render() {
    return (
      <Row className="no-margin">
        <Col className="col-1 blogImage">
          <img src="./assets/images.png" />
        </Col>
        <Col className="col-9 allHackContainer">
          <h5>{this.props.name}</h5>
          <div>
           {this.props.desc}
          </div>
          <div>Teams: {this.props.teamCount} | Participants:  {this.props.participantsCount}</div>
        </Col>
        <Col
          className="col-2 allHackContainer"
          style={{ "textAlign": "right" }}
        >
         <RegisterModal buttonLabel ="Register"></RegisterModal>
          <div className="iconstyle">
            <FontAwesomeIcon icon="heart" />
            <span style={{ "marginLeft": "5px", "marginRight": "10px" }}>
              {this.props.likes}
            </span>
            <FontAwesomeIcon icon="user" />
            <span style={{ "marginLeft": "5px" }}> 121</span>
          </div>
        </Col>
      </Row>
    );
  }
}
