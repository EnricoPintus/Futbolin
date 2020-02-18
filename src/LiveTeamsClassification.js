import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

import './App.css';

class LiveTeamsClassification extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    let rowsList;
    let teamsIds = Object.keys(this.props.summaryByTeam);
    rowsList = teamsIds.map((teamId) =>
        <tr>
          <td>{this.props.teams[teamId].name}</td>
          <td>{this.props.summaryByTeam[teamId].wins}</td>
        </tr>
    )
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Team</th>
            <th>Wins</th>
          </tr>
        </thead>
        <tbody>
          {rowsList}
        </tbody>
      </Table>
    );
  }
}

export default LiveTeamsClassification;
