import { connect } from 'react-redux'
import PlayersEditPlayer from './PlayersEditPlayer';
import {showEditPlayerDialog, insertPlayer} from '../actions/PlayersActions'


const mapStateToProps = (state) => ({
  showEditPlayerDialog: state.uiItems.playersView.showEditPlayerDialog,
  mode: state.uiItems.playersView.mode
})

const mapDispatchToProps = dispatch => ({
  handleClose: () => dispatch(showEditPlayerDialog(false)),
  insertPlayer: player => dispatch(insertPlayer(player))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayersEditPlayer)
