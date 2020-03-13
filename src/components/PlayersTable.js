import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
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
      let playersRows = this.props.players.map((player) =>
        <tr>
          <td>
            <input type="checkbox"/>
          </td>
          <td>{player.name}</td>
          <td>{player.surname}</td>
        </tr>
      )
      return (
        <div>
          <Button variant="light"> Create new player </Button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
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
  players: PropTypes.array.isRequired
}

export default PlayersTable;
