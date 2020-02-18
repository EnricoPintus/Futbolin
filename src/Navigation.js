import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import './App.css';

function Navigation() {
  return (
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
  );
}

export default Navigation;
