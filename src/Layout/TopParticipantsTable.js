import React from "react";
import ReactDOM from "react-dom";
import { Card, Table, Row, Col } from "reactstrap";

export default class TopParticipantsTable extends React.Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th colspan="4">TOP PARTICIPANTS</th>
          </tr>
          <tr>
            <th>-</th>
            <th>Name</th>
            <th>Score</th>
            <th>Badge</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">UP</th>
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
            <th scope="row">DOWN</th>
            <td>Mahesh</td>
            <td>899</td>
            <td>BRONZE</td>
          </tr>
          <tr>
            <th scope="row">DOWN</th>
            <td>Krish</td>
            <td>850</td>
            <td>No Badge</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
