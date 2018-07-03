import React from "react";

import { Container, Row, Col } from "reactstrap";

export default class StatusWidget extends React.Component {
  render() {
    return (
      <div style={{ display: "-webkit-box" }}>
        <div className="col-4 widget ">
          <h3>10</h3>Hackathons
        </div>
        <div className="col-4 widget ">
          <h3>10</h3>Teams
        </div>
        <div className="col-4 widget ">
          <h3>10</h3>Participants
        </div>{" "}
      </div>
    );
  }
}
