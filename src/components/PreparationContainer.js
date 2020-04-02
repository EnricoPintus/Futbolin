import { connect } from 'react-redux'
import { generateTeams } from '../actions/TournamentsActions'
import PreparationComponent from './PreparationComponent'

import './App.css';

const mapStateToProps = (state) => ({
  tournament: state.liveView.tournament
})

const mapDispatchToProps = dispatch => ({
  generateTeams: tournamentId => dispatch(generateTeams(tournamentId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreparationComponent)
