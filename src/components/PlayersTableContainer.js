import { connect } from 'react-redux'
import { fetchPlayers, showEditPlayerDialog } from '../actions/PlayersActions'
import PlayersTable from './PlayersTable'

import './App.css';



const mapStateToProps = (state) => ({
  players: state.players,
  playersView: state.playersView
})

const mapDispatchToProps = dispatch => ({
  requestPlayers: () => dispatch(fetchPlayers()),
  createPlayer: () => dispatch(showEditPlayerDialog(true, "NEW"))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayersTable)
