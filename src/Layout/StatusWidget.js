import React from "react";

export default class StatusWidget extends React.Component {
  render() {
    return (
      <div>
        <div className="col-12 widget ">
          <h1>10</h1>
          <div>Hackathons</div>
        </div>
        <div className="col-12 widget ">
          <h1>10</h1>
          <div>Teams</div>
        </div>
        <div className="col-12 widget ">
          <h1>10</h1>
          <div>Participants</div>
        </div>
      </div>
    );
  }
}
