import fetch from 'cross-fetch'

export const REQUEST_PLAYERS = 'REQUEST_PLAYERS'
export function requestPlayers(filter) {
  return {
    type: REQUEST_PLAYERS,
    filter
  }
}
export const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS'

function receivePlayers(json) {
  let players = json
  return {
    type: RECEIVE_PLAYERS,
    players
  }
}

export function fetchPlayers() {
  return dispatch => {
    return fetch(`players`)
      .then(response => response.json())
      .then(json => dispatch(receivePlayers(json)))
  }
}

