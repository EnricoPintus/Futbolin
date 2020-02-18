import {combineReducers} from 'redux'

const tournaments = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_TOURNAMENTS':
      return action.tournaments
    default:
      return state
  }
}

const rootReducer =  combineReducers ({
    tournaments
})

export default rootReducer;
