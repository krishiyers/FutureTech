import React from "react";

import FAQList from "./FAQList";
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
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Answered
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Answered
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              Ask
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
          {this.forloop()}
{/*            
            <HackthonList
              name="Reactathon"
              desc="Reactathon description"
              teamCount="20"
              participantsCount="1000"
              likes="1200"
            /> */}
          </TabPane>
          <TabPane tabId="2">
          {this.forloop()}
          </TabPane>
          <TabPane tabId="3">
      
          </TabPane>
        </TabContent>
      </div>
    );
  }
}