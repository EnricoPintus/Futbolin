import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

import NavigationContainer from './NavigationContainer'
import PreparationComponent from './PreparationComponent'
import LiveComponent from './LiveComponent'
import ShowTournaments from './ShowTournaments'


import './App.css';

class MainApp extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let centralComponent;
    if (this.props.view === "Preparation")
      centralComponent = <PreparationComponent onPreparationFinished={()=>this.props.toggleView("Live")}/>
    else if  (this.props.view === "Live")
      centralComponent = <LiveComponent/>
    else if  (this.props.view === "Tournaments")
      centralComponent = <ShowTournaments tournaments={this.props.tournaments}/>

    return (
      <Container className="App">
        <Row className="App-header">
          Header
        </Row>
        <Row>
          <Col sm={2}>
            <NavigationContainer />
          </Col>
          <Col sm={10}>
            {centralComponent}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainApp
