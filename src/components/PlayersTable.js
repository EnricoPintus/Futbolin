import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown'
import PlayersEditPlayerContainer from './PlayersEditPlayerContainer';
import PropTypes from 'prop-types'


import './App.css';

class PlayersTable extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
      this.props.requestPlayers()
    }

    render() {
      const teamsDropdown =
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Random</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>


      let playersRows = this.props.players.map((player) =>
        <tr>
          <td><input type="checkbox"/> </td>
          <td>{player.name}</td>
          <td>{player.surname}</td>
          {this.props.playersView.activeView === "Preparation" && <td>{teamsDropdown}</td>}
        </tr>
      )
      return (
        <div>
          <PlayersEditPlayerContainer/>
          <Button variant="light" onClick={this.props.createPlayer}> Create new player </Button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                {this.props.playersView.activeView === "Preparation" && <th>Team</th>}
              </tr>
            </thead>
            <tbody>
              {playersRows}
            </tbody>
          </Table>
        </div>
      );
    }
}

PlayersTable.propTypes = {
  requestPlayers: PropTypes.func.isRequired,
  createPlayer: PropTypes.func.isRequired,
  players: PropTypes.array.isRequired,
  playersView: PropTypes.object.isRequired
}

export default PlayersTable;
