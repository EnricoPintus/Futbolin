import fetch from 'cross-fetch'

export const REQUEST_TOURNAMENTS = 'REQUEST_TOURNAMENTS'
export function requestTournaments(filter) {
  return {
    type: REQUEST_TOURNAMENTS,
    filter
  }
}

export const RECEIVE_TOURNAMENTS = 'RECEIVE_TOURNAMENTS'
function receiveTournaments(filter, json) {
  let tournaments = json
  return {
    type: RECEIVE_TOURNAMENTS,
    filter,
    tournaments,
    receivedAt: Date.now()
  }
}
export function fetchTournaments(filter) {
  return dispatch => {
    return fetch(`tournaments`)
      .then(response => response.json())
      .then(json => dispatch(receiveTournaments(filter, json)))
  }
}

export const SHOW_PLAY_TOURNAMENT = 'SHOW_PLAY_TOURNAMENT'
export function showPlayTournament(tournament)
{
  return {
    type: SHOW_PLAY_TOURNAMENT,
    tournament
  }
}