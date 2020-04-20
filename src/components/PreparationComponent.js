import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CreateTeams from './CreateTeams'
import PropTypes from 'prop-types'


import './App.css';
import { confirmPlayersSelection } from '../actions/PlayersActions';
import { LIVE_VIEW_MODE_SELECT_PLAYERS, LIVE_VIEW_MODE_CREATE_TEAMS } from '../reducers';

class PreparationComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const tournament = this.props.tournament
    return (
      <Container>
        <Row> <h1>{tournament.name}</h1></Row>
        <Row>
          <Col> <CreateTeams/>  </Col>
        </Row>
        <Row>
          {this.props.mode === LIVE_VIEW_MODE_SELECT_PLAYERS &&
            <Button onClick={() => this.props.confirmPlayersSelection()}> Confirm Players Selection </Button>
          }
          {this.props.mode === LIVE_VIEW_MODE_CREATE_TEAMS &&
            <Button onClick={() =>
              this.props.generateTeams(tournament.id, this.props.selectedPlayers,this.props.teamForPlayers)}>
                Generate teams and matches
            </Button>
          }
        </Row>
      </Container>
    );
  }
}


PreparationComponent.propTypes = {
  tournament: PropTypes.object.isRequired,
  selectedPlayers: PropTypes.array.isRequired,
  teamForPlayers: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
  generateTeams: PropTypes.func.isRequired,
  confirmPlayersSelection: PropTypes.func.isRequired
}

export default PreparationComponent;
