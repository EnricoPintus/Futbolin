import { connect } from 'react-redux'
import { fetchPlayers, showEditPlayerDialog } from '../actions/PlayersActions'
import LiveComponent from './LiveComponent';

import './App.css';

const mapStateToProps = (state) => ({
  tournaments: state.tournaments.filter (function(tournament) {
    return tournament.status != 1
  }),
  liveView: state.liveView
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  null
)(LiveComponent)
