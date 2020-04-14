import { connect } from 'react-redux'
import LiveComponent from './LiveComponent';

import './App.css';

const mapStateToProps = (state) => ({
  tournaments: state.tournaments.filter (function(tournament) {
    return tournament.status != 1
  }),
  liveView: state.uiItems.liveView
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  null
)(LiveComponent)
