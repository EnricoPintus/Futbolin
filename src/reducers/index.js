import {combineReducers} from 'redux'
import { RECEIVE_PLAYERS, SHOW_EDIT_PLAYER_DIALOG } from '../actions/PlayersActions'
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

const playersView = (state = {show: false, activeView: ""}, action) => {
  switch (action.type) {
    case SHOW_EDIT_PLAYER_DIALOG:
      return {
        ...state,
        show: action.show
      }
    case SHOW_PLAY_TOURNAMENT:
      return {
        ...state,
        activeView: "Preparation"
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

const rootReducer =  combineReducers ({
    activeView,
    tournaments,
    players,
    playersView,
    liveView
})

export default rootReducer;
