import { connect } from 'react-redux'
import MainApp from './MainApp'
import { toggleView } from '../actions/ViewActions'

import './App.css';

const mapStateToProps = (state) => ({
  view: state.activeView,
  tournaments: state.tournaments
})

const mapDispatchToProps = dispatch => ({
  toggleView: id => dispatch(toggleView(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainApp)
