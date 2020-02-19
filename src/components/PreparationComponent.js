import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Navigation from './Navigation'
import CreateTeams from './CreateTeams'


import './App.css';

class PreparationComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  handleGenerate = (event) => {
    event.preventDefault()
    this.props.onPreparationFinished()
  }


  render() {
    return (
      <Container>
        <Row>
          <Col> <CreateTeams/>  </Col>
        </Row>
        <Row>
          <Button onClick={this.handleGenerate}> Generate teams and matches </Button>
        </Row>
      </Container>
    );
  }
}

export default PreparationComponent;
