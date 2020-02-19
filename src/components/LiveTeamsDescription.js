import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Toast from 'react-bootstrap/Toast'


import './App.css';

class LiveTeamsDescription extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    let teamsToastsList;
    let teamsIds = Object.keys(this.props.teams);
    teamsToastsList = teamsIds.map((teamId) =>
      <Toast>
        <Toast.Header>
          <strong>{this.props.teams[teamId].name}</strong>
        </Toast.Header>
        <Toast.Body>{this.props.teams[teamId].player1} - {this.props.teams[teamId].player2}</Toast.Body>
      </Toast>
    )
    return (
      <div>
        {teamsToastsList}
      </div>
    );
  }
}

export default LiveTeamsDescription;
