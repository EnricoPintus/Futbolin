import { connect } from 'react-redux'
import { generateTeams } from '../actions/TournamentsActions'
import PreparationComponent from './PreparationComponent'

import './App.css';
import { confirmPlayersSelection } from '../actions/PlayersActions';

const mapStateToProps = (state) => ({
  tournament: state.uiItems.liveView.tournament,
  mode: state.uiItems.liveView.mode
})

const mapDispatchToProps = dispatch => ({
  generateTeams: tournamentId => dispatch(generateTeams(tournamentId)),
  confirmPlayersSelection: () => dispatch(confirmPlayersSelection())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreparationComponent)
