import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import NavigationContainer from './NavigationContainer'
import ShowTournamentsContainer from './ShowTournamentsContainer';
import PlayersTableContainer from './PlayersTableContainer'
import PreparationComponent from './PreparationComponent'
import LiveComponent from './LiveComponent'


import './App.css';

class MainApp extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let centralComponent;
    if (this.props.view === "Preparation")
      centralComponent = <PreparationComponent/>
    else if  (this.props.view === "Live")
      centralComponent = <LiveComponent/>
    else if  (this.props.view === "Tournaments")
      centralComponent = <ShowTournamentsContainer/>
    else if  (this.props.view === "Players")
      centralComponent = <PlayersTableContainer/>

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
