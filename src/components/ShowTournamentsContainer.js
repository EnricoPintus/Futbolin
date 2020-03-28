import { connect } from 'react-redux'
import ShowTournaments from './ShowTournaments'
import {fetchTournaments, showPlayTournament } from '../actions/TournamentsActions'

import './App.css';

const mapStateToProps = (state) => ({
  tournaments: state.activeView === "Live" ?  state.tournaments.filter (function(tournament) {
    return tournament.status != 1
  }) : state.tournaments,
  mode: state.activeView === "Live" ? "Show" : "Manage"
})

const mapDispatchToProps = dispatch => ({
  requestTournaments: filter => dispatch(fetchTournaments(filter)),
  playTournamentSelected: tournament => dispatch(showPlayTournament(tournament))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowTournaments)
