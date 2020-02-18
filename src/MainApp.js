import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

import Navigation from './Navigation'
import PreparationComponent from './PreparationComponent'
import LiveComponent from './LiveComponent'


import './App.css';

class MainApp extends React.Component {

  constructor(props) {
    super(props);
    this.state =
      {
        status: "Preparation"
      };
    this.onPreparationFinished = this.onPreparationFinished.bind(this)
    this.onTournamentsClicked = this.onTournamentsClicked.bind(this)
    this.onPlayersClicked = this.onPlayersClicked.bind(this)
    this.onLiveClicked = this.onLiveClicked.bind(this)
  }

  onPreparationFinished(player){
    this.setState({
      status: "Live"
    })
  }

  onTournamentsClicked(){
    this.setState({
      status: "ShowTournaments"
    })
  }

  onPlayersClicked(){
    this.setState({
      status: "ShowPlayers"
    })
  }

  onLiveClicked(){
    this.setState({
      status: "Preparation"
    })
  }


  render() {
    let centralComponent;
    if (this.state.status === "Preparation")
      centralComponent = <PreparationComponent onPreparationFinished={this.onPreparationFinished} />
    else if  (this.state.status === "Live")
      centralComponent = <LiveComponent/>

    return (
      <Container className="App">
        <Row className="App-header">
          Header
        </Row>
        <Row>
          <Col sm={2}>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Button className="NavigationButton" variant="outline-dark"
                      onClick={this.onTournamentsClicked}>
                      Tournaments
              </Button>
              <Button className="NavigationButton" variant="outline-dark"
                      onClick={this.onPlayersClicked}>
                      Players
              </Button>
              <Button className="NavigationButton" variant="outline-dark"
                      onClick={this.onLiveClicked}>
                      Live
              </Button>
            </Nav>
          </Col>
          <Col sm={10}>
            {centralComponent}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainApp;
