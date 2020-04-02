import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CreateTeams from './CreateTeams'
import PropTypes from 'prop-types'


import './App.css';

class PreparationComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const tournament = this.props.tournament
    return (
      <Container>
        <Row> <h1>{tournament.name}</h1></Row>
        <Row>
          <Col> <CreateTeams/>  </Col>
        </Row>
        <Row>
          <Button onClick={() => this.props.generateTeams(tournament.id)}> Generate teams and matches </Button>
        </Row>
      </Container>
    );
  }
}


PreparationComponent.propTypes = {
  tournament: PropTypes.object.isRequired,
  generateTeams: PropTypes.func.isRequired
}

export default PreparationComponent;
