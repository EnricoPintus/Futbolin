import { connect } from 'react-redux'
import { fetchPlayers } from '../actions/PlayersActions'
import PlayersTable from './PlayersTable'

import './App.css';

const mapStateToProps = (state) => ({
  players: state.players
})

const mapDispatchToProps = dispatch => ({
  requestPlayers: () => dispatch(fetchPlayers())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayersTable)
