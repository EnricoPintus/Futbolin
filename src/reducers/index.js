import {combineReducers} from 'redux'
import { RECEIVE_PLAYERS, SHOW_EDIT_PLAYER_DIALOG } from '../actions/PlayersActions'


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

const editPlayersView = (state = {show: false}, action) => {
  switch (action.type) {
    case SHOW_EDIT_PLAYER_DIALOG:
      return {
        show: action.show,
        mode: action.mode
      }
    default:
      return state
  }
}

const rootReducer =  combineReducers ({
    activeView,
    tournaments,
    players,
    editPlayersView
})

export default rootReducer;
