import React from "react";
import { Card, Table, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class TopParticipantsTable extends React.Component {
  render() {
    return (
      <Table className="widget">
        <thead>
          <tr>
            <th colspan="4">TOP PARTICIPANTS</th>
          </tr>
          <tr>
            <th style={{ color: "yellow"}}>-</th>
            <th>Name</th>
            <th>Score</th>
            <th>Badge</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"> <FontAwesomeIcon style={{ color: "green"}} icon="arrow-up" /> </th>
            <td>Balaji</td>
            <td>1000</td>
            <td>Gold ICON</td>
          </tr>
          <tr>
            <th scope="row">-</th>
            <td>Inhiyha</td>
            <td>900</td>
            <td>SILVER</td>
          </tr>
          <tr>
            <th scope="row"><FontAwesomeIcon style={{ color: "red"}} icon="arrow-down" /></th>
            <td>Mahesh</td>
            <td>899</td>
            <td>BRONZE</td>
          </tr>
          <tr>
            <th scope="row"><FontAwesomeIcon style={{ color: "red"}} icon="arrow-down" /></th>
            <td>Krish</td>
            <td>850</td>
            <td>No Badge</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
