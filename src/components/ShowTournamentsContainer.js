import { connect } from 'react-redux'
import ShowTournaments from './ShowTournaments'
import {fetchTournaments } from '../actions'

import './App.css';

const mapStateToProps = (state) => ({
  tournaments: state.tournaments
})

const mapDispatchToProps = dispatch => ({
  requestTournaments: filter => dispatch(fetchTournaments(filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowTournaments)
