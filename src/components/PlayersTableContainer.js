import { connect } from 'react-redux'
import { fetchPlayers, showEditPlayerDialog, selectPlayerForParticipation, selectTeamForPlayer } from '../actions/PlayersActions'
import {PLAYERS_TABLE_MODE_TEAMS} from '../reducers/index'
import PlayersTable from './PlayersTable'

import './App.css';



const mapStateToProps = (state) => ({
  players: getPlayers(state.players, state.uiItems.playersView.mode, state.uiItems.liveView.preparationPhase.selectedPlayers),
  teamsForPlayers: state.uiItems.liveView.preparationPhase.teamsForPlayers,
  playersView: state.uiItems.playersView
})

const mapDispatchToProps = dispatch => ({
  requestPlayers: () => dispatch(fetchPlayers()),
  createPlayer: () => dispatch(showEditPlayerDialog(true, "NEW")),
  selectPlayerForParticipation: (playerId, select) => dispatch(selectPlayerForParticipation(playerId, select)),
  selectTeamForPlayer: (team, playerId) => dispatch(selectTeamForPlayer(team, playerId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayersTable)

function getPlayers(playersData, mode, selectedPlayers)
{
  if (mode != PLAYERS_TABLE_MODE_TEAMS)
    return playersData
  else
    return playersData.filter(function(playerData) {
      return selectedPlayers.includes(playerData.id)
    })
}
