import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown'
import PlayersEditPlayerContainer from './PlayersEditPlayerContainer';
import {PLAYERS_TABLE_MODE_CREATE, PLAYERS_TABLE_MODE_TEAMS, PLAYERS_TABLE_MODE_SELECT} from '../reducers/index'
import PropTypes from 'prop-types'


import './App.css';
import PlayerTeamSelector from './PlayerTeamSelector';

class PlayersTable extends React.Component {

    constructor(props) {
        super(props);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleTeamSelected = this.handleTeamSelected.bind(this);
    }

    handleCheckbox(playerId, event) {
      this.props.selectPlayerForParticipation(playerId, event.target.checked)
    }

    handleTeamSelected(team, playerId) {
      this.props.selectTeamForPlayer(team, playerId)
    }

    componentDidMount() {
      this.props.requestPlayers()
    }

    render() {
      const showAddPlayersButton = this.props.playersView.mode === PLAYERS_TABLE_MODE_CREATE

      let playersRows = this.props.players.map((player) =>
        <tr>
          {this.props.playersView.mode === PLAYERS_TABLE_MODE_SELECT &&
            <td><input type="checkbox" onClick={(event) => this.handleCheckbox(player.id,event)}/>
          </td>}
          <td>{player.name}</td>
          <td>{player.surname}</td>
          {this.props.playersView.mode === PLAYERS_TABLE_MODE_TEAMS &&
            <td><PlayerTeamSelector
                playerId={player.id}
                teamsNumber={this.props.players.length / 2}
                activeTeam={this.props.teamsForPlayers[player.id]}
                selectTeamForPlayer={this.handleTeamSelected}/> </td>
          }
        </tr>
      )
      return (
        <div>
          <PlayersEditPlayerContainer/>
          {showAddPlayersButton && <Button variant="light" onClick={this.props.createPlayer}> Create new player </Button>}
          <Table striped bordered hover>
            <thead>
              <tr>
                {this.props.playersView.mode === PLAYERS_TABLE_MODE_SELECT && <th>#</th> }
                <th>First Name</th>
                <th>Last Name</th>
                {this.props.playersView.mode === PLAYERS_TABLE_MODE_TEAMS && <th>Team</th>}
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
  selectPlayerForParticipation: PropTypes.func.isRequired,
  selectTeamForPlayer: PropTypes. func.isRequired,
  players: PropTypes.array.isRequired,
  playersView: PropTypes.object.isRequired,
  teamsForPlayers: PropTypes.object.isRequired
}

export default PlayersTable;
