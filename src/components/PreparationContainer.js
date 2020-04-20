import { connect } from 'react-redux'
import { generateTeams } from '../actions/TournamentsActions'
import PreparationComponent from './PreparationComponent'

import './App.css';
import { confirmPlayersSelection } from '../actions/PlayersActions';

const mapStateToProps = (state) => ({
  tournament: state.uiItems.liveView.tournament,
  selectedPlayers: state.uiItems.liveView.preparationPhase.selectedPlayers,
  teamForPlayers: state.uiItems.liveView.preparationPhase.teamForPlayers,
  mode: state.uiItems.liveView.mode
})

const mapDispatchToProps = dispatch => ({
  generateTeams: (tournamentId, selectedPlayers, teamForPlayers) =>
                  dispatch(generateTeams(tournamentId, selectedPlayers, teamForPlayers)),

  confirmPlayersSelection: () => dispatch(confirmPlayersSelection())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreparationComponent)
