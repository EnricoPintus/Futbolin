import fetch from 'cross-fetch'

export const REQUEST_PLAYERS = 'REQUEST_PLAYERS'
export function requestPlayers(filter) {
  return {
    type: REQUEST_PLAYERS,
    filter
  }
}
export const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS'

export function receivePlayers(json) {
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

export const SHOW_EDIT_PLAYER_DIALOG = 'SHOW_EDIT_PLAYER_DIALOG'
export function showEditPlayerDialog(showEditDialog, mode) {
  return {
    type: SHOW_EDIT_PLAYER_DIALOG,
    showEditDialog,
    mode
  }
}

export function insertPlayer(player) {
  return dispatch => {
    return fetch(`players`, {
        method: 'POST',
        body: JSON.stringify({
          name: player.name,
          surname: player.surname
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
			  }
		  })
      .then(response => response.json())
      .then(dispatch(fetchPlayers()))
  }
}

export const SELECT_PLAYER_FOR_PARTICIPATION = 'SELECT_PLAYER_FOR_PARTICIPATION'
export function selectPlayerForParticipation(playerId, select) {
  return {
    type: SELECT_PLAYER_FOR_PARTICIPATION,
    playerId,
    select
  }
}

export const CONFIRM_PLAYERS_SELECTION = 'CONFIRM_PLAYERS_SELECTION'
export function confirmPlayersSelection()
{
  return {
    type: CONFIRM_PLAYERS_SELECTION
  }
}

export const SELECT_TEAM_FOR_PLAYER = 'SELECT_TEAM_FOR_PLAYER'
export function selectTeamForPlayer(team, player)
{
  return {
    type: SELECT_TEAM_FOR_PLAYER,
    team,
    player
  }
}
