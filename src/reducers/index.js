import {combineReducers} from 'redux'
import { RECEIVE_PLAYERS, SHOW_EDIT_PLAYER_DIALOG, SELECT_PLAYER_FOR_PARTICIPATION, CONFIRM_PLAYERS_SELECTION, SELECT_TEAM_FOR_PLAYER } from '../actions/PlayersActions'
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
                              mode: PLAYERS_TABLE_MODE_CREATE}, action) => {
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
    case CONFIRM_PLAYERS_SELECTION:
      return {
        ...state,
        mode: PLAYERS_TABLE_MODE_TEAMS
      }
    default:
      return state
  }
}
export const LIVE_VIEW_MODE_SELECT_PLAYERS = "SELECT_PLAYERS"
export const LIVE_VIEW_MODE_CREATE_TEAMS = "CREATE_TEAMS"
const liveView = (state = {tournament: "empty",
                          preparationPhase: {
                            selectedPlayers: [],
                            teamsForPlayers: {}
                          },
                          mode: LIVE_VIEW_MODE_SELECT_PLAYERS
                          }, action) => {
  switch (action.type) {
    case SHOW_PLAY_TOURNAMENT:
      return {
        ...state,
        tournament: action.tournament
      }
    case SELECT_PLAYER_FOR_PARTICIPATION:
      return {
        ...state,
        mode: LIVE_VIEW_MODE_SELECT_PLAYERS,
        preparationPhase: {
          ...state.preparationPhase,
          selectedPlayers: [...state.preparationPhase.selectedPlayers, action.playerId]
        }
      }
    case CONFIRM_PLAYERS_SELECTION:
      return {
        ...state,
        mode: LIVE_VIEW_MODE_CREATE_TEAMS
      }
    case SELECT_TEAM_FOR_PLAYER:
      var newTeamPlayer = {}
      if (!(action.team in state.preparationPhase.teamsForPlayers))
        newTeamPlayer[action.team] = [action.player]
      else
        newTeamPlayer[action.team] = [...state.preparationPhase.teamsForPlayers[action.team], action.player]
      return {
        ...state,
        preparationPhase: {
          ...state.preparationPhase,
          teamsForPlayers: Object.assign({},
            state.preparationPhase.teamsForPlayers,
            newTeamPlayer)
        }
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
