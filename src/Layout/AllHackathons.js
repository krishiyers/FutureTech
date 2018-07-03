import React from "react";
import { Button, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class AllHackathons extends React.Component {
  render() {
    return (
      <div className="navbar-shadow allHackbar">
        <Row>
          <Col className="col-1 no-padding">
            {" "}
            <img src="./assets/hack3.jpg" />
          </Col>
          <Col className="col-9 allHackContainer">
            <h5>Hackathon Name</h5>
            <div>
              hackathon
              descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription
            </div>
            <div >Teams # Participants #</div>
          </Col>
          <Col className="col-2 allHackContainer" style={{ "text-align": "right" }} >
            <Button color="secondary">Join Us</Button>
            <div className="iconstyle">
              <FontAwesomeIcon icon="heart" />
              <span style={{"margin-left":"5px","margin-right":"10px"}}>1321</span>
              <FontAwesomeIcon icon="user-plus" />
              <span  style={{"margin-left":"5px"}}> 121</span>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
