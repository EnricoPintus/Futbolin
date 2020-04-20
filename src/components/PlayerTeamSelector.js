import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown'
import PlayersEditPlayerContainer from './PlayersEditPlayerContainer';
import {PLAYERS_TABLE_MODE_CREATE, PLAYERS_TABLE_MODE_TEAMS, PLAYERS_TABLE_MODE_SELECT} from '../reducers/index'
import PropTypes from 'prop-types'


import './App.css';

class PlayerTeamSelector extends React.Component {

    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(event) {
      this.props.selectTeamForPlayer(event.target.textContent, this.props.playerId)
    }

    render() {
      let team = 0
      let teamsNumber = this.props.teamsNumber
      var teamsDropdownItems = []
      for (team = 1; team <= teamsNumber; team++)
      {
        console.log(this.props.activeTeam)
        const isActive = this.props.activeTeam === ("Team" + team)
        if (isActive)
          teamsDropdownItems.push(
            <Dropdown.Item key={team} onClick={this.handleSelect} active>Team {team}</Dropdown.Item>
            )
        else
          teamsDropdownItems.push(
            <Dropdown.Item key={team} onClick={this.handleSelect}>Team {team}</Dropdown.Item>
          )
      }
      const dropdownTitleString = (!this.props.activeTeam || !this.props.activeTeam.length) ? 'Select team' : this.props.activeTeam
      const teamsDropdown =
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {dropdownTitleString}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={this.handleSelect}>
                Random
              </Dropdown.Item>
             {teamsDropdownItems}
          </Dropdown.Menu>
        </Dropdown>

      return (
        <div>
          {teamsDropdown}
        </div>
      );
    }
}

PlayerTeamSelector.propTypes = {
  teamsNumber: PropTypes.number.isRequired,
  playerId: PropTypes.number.isRequired,
  selectTeamForPlayer: PropTypes.func.isRequired,
  activeTeam: PropTypes.string
}

export default PlayerTeamSelector;
