import fetch from 'cross-fetch'

export const REQUEST_TOURNAMENTS = 'REQUEST_TOURNAMENTS'
function requestTournaments(filter) {
  return {
    type: REQUEST_TOURNAMENTS,
    filter
  }
}
export const RECEIVE_TOURNAMENTS = 'RECEIVE_TOURNAMENTS'
function receiveTournaments(filter, json) {
  let tournaments = filter === 'test' ? json : json.data.children.map(child => child.data)
  return {
    type: RECEIVE_TOURNAMENTS,
    filter,
    tournaments,
    receivedAt: Date.now()
  }
}

// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchPosts('reactjs'))
export default function fetchTournaments(filter) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.
  return function(dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(requestTournaments(filter))
    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.
    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
    /*
    return fetch(`https://www.localhost.com/filter=${filter}`)
      .then(
        response => response.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
        dispatch(receiveTournaments(filter, json))
      )
      */
      let json = [{id: 1, name: 'Torneo 1'}]
      dispatch(receiveTournaments('test',json))
  }
}
