import {combineReducers} from 'redux'
import { RECEIVE_PLAYERS } from '../actions/PlayersActions'


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

const rootReducer =  combineReducers ({
    activeView,
    tournaments,
    players
})

export default rootReducer;
