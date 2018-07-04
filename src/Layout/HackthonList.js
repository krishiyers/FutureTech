import React from "react";
import { Button, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RegisterModal from './RegisterModal';
import {Link} from 'react-router-dom';
import FAQ from './FAQ';
import { Line, Circle } from 'rc-progress';

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
        <Link to="/singleHackathonPage"><h5>{this.props.name}</h5></Link>
        
          <div>
           {this.props.desc}
          </div>
          <div>Teams: {this.props.teamCount} | Participants:  {this.props.participantsCount}</div>
          <div><Circle percent="10" strokeWidth="1" strokeColor="#D3D3D3" /></div>
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
