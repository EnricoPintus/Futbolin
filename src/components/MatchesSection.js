import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

import './App.css';

class MatchesSection extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    let teamsToastsList;
    teamsToastsList = this.props.matches.map((match) =>
    <Form.Group as={Row} controlId="formHorizontalEmail">
      <Form.Label column sm={4}>
        {this.props.teams[match.team1].name}
      </Form.Label>
      <Col sm={1}>
        <Form.Control type="number" placeholder="Email" />
      </Col>
      <Col sm={1}>
        <Form.Control type="number" placeholder="Email" />
      </Col>
      <Form.Label column sm={4}>
        {this.props.teams[match.team2].name}
      </Form.Label>
      <Col sm={1}>
        <Form.Control type="checkbox"/>
      </Col>
    </Form.Group>
    )
    return (
      <div>
        <h1> {this.props.title} </h1>
        <Form>
          {teamsToastsList}
        </Form>
      </div>
    );
  }
}

export default MatchesSection;
