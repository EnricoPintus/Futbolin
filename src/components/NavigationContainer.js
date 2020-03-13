import React from 'react';
import { connect } from 'react-redux'
import Navigation from './Navigation'
import { toggleView } from '../actions/TournamentsActions'

import './App.css';

const mapDispatchToProps = dispatch => ({
  toggleView: id => dispatch(toggleView(id))
})

export default connect(
  null,
  mapDispatchToProps
)(Navigation)
