import {combineReducers} from 'redux'


const activeView = (state = 'Live', action) => {
  switch (action.type) {
    case 'TOGGLE_VIEW':
      return action.view
      break;
    default:
      return 'Live'
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

const rootReducer =  combineReducers ({
    activeView,
    tournaments
})

export default rootReducer;
