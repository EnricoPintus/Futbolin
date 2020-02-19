import React from 'react';
import Alert from 'react-bootstrap/Alert'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import './App.css';

class AddedPlayers extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {
    const players = this.props.players
    const playersButtonsList = players.map((player) =>
      <div className="SinglePlayerBox">
        <Alert className="PlayerAlert" variant="light" /*onClose={() => setShow(false)}*/>
          {player}
        </Alert>
        <DropdownButton title="Random team">
          <Dropdown.Item href="#/action-1">Team A</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Team B</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Team C</Dropdown.Item>
        </DropdownButton>
        <Button> Delete </Button>
      </div>
    )
    return (
      <div id="AddedPlayers">
        {playersButtonsList}
      </div>
    );
  }

}

export default AddedPlayers;
