import React from "react";

import FAQList from "./FAQList";
import AskFAQ from "./AskFAQ";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";


export default class FAQ extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
    this.forloop =  this.forloop.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  forloop(){
    
    let rows = [];

    for (let i = 0; i < 4; i++) {
      rows.push(<FAQList
        name="Reactathon"
        desc="Reactathon description"
        teamCount="20"
        participantsCount={i}
        likes="1200"
      />);

    }
    return rows;
  }

  render() {
    return (
        <div className="pageContainer">
      <div>
      <div className="row header">Reactathon<hr /></div>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
          <FAQList
        
        desc="Reactathon description"
        teamCount="20"
        participantsCount="10"
        likes="1200"
      />

          </TabPane>
         
        </TabContent>
      </div>
      </div>
    );
  }
}