import React from "react";

export default class StatusWidget extends React.Component {
  render() {
    return (
      <div>
        <div className="col-12 widget ">
          <h3>10</h3>
          <div>Hackathons</div>
        </div>
        <div className="col-12 widget ">
          <h3>10</h3>
          <div>Teams</div>
        </div>
        <div className="col-12 widget ">
          <h3>10</h3>
          <div>Participants</div>
        </div>
      </div>
    );
  }
}
