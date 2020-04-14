import {combineReducers} from 'redux'
import { RECEIVE_PLAYERS, SHOW_EDIT_PLAYER_DIALOG, SELECT_PLAYER_FOR_PARTICIPATION } from '../actions/PlayersActions'
import { SHOW_PLAY_TOURNAMENT } from '../actions/TournamentsActions'


const activeView = (state = 'Live', action) => {
  switch (action.type) {
    case 'TOGGLE_VIEW':
      return action.view
    default:
      return state
  }
}

const tournaments = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_TOURNAMENTS':
      return action.tournaments
    default:
      return state
  }
}

const players = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PLAYERS:
      return action.players
    default:
      return state
  }
}

export const PLAYERS_TABLE_MODE_CREATE = "CREATE"
export const PLAYERS_TABLE_MODE_SELECT = "SELECT"
export const PLAYERS_TABLE_MODE_TEAMS = "TEAMS"
const playersView = (state = {showEditDialog: false,
                              mode: PLAYERS_TABLE_MODE_CREATE,
                              selectedPlayers: []}, action) => {
  switch (action.type) {
    case SHOW_EDIT_PLAYER_DIALOG:
      return {
        ...state,
        showEditDialog: action.showEditDialog
      }
    case SHOW_PLAY_TOURNAMENT:
      return {
        ...state,
        mode: PLAYERS_TABLE_MODE_SELECT
      }
    case SELECT_PLAYER_FOR_PARTICIPATION:
      return {
        ...state,
        selectedPlayers: [...state.selectedPlayers, action.playerId]
      }
    default:
      return state
  }
}

const liveView = (state = {tournament: "empty"}, action) => {
  switch (action.type) {
    case SHOW_PLAY_TOURNAMENT:
      return {
        tournament: action.tournament
      }
    default:
      return state
  }
}

const uiItems = combineReducers ({
  activeView,
  playersView,
  liveView
})


const rootReducer =  combineReducers ({
    players,
    tournaments,
    uiItems
})

export default rootReducer;
