import React from "react";
import Toolbar from "./Toolbar";
import CarouselPage from "./CarouselPage";
import TopParticipantsTable from "./TopParticipantsTable";
import AllHackathons from "./AllHackathons";
import Solutions from "./Solutions";

import StatusWidget from "./StatusWidget";
import { Row, Col } from "reactstrap";
import HomePage from './HomePage';
import {Route} from 'react-router-dom';


export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col className="navbar-shadow">
            <Toolbar />
          </Col>
        </Row>
        <Route exact path="/" component={HomePage}/>
      <Route path="/solutions" component={Solutions}/>

        {/* Change Font
        Apply class
        Reduce Carousel size
        Add Cards on top to show numbers
        Recitify font awesome icons */}
      </div>
    );
  }
}
