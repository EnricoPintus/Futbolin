import { connect } from 'react-redux'
import PlayersEditPlayer from './PlayersEditPlayer';
import {showEditPlayerDialog, insertPlayer} from '../actions/PlayersActions'


const mapStateToProps = (state) => ({
  show: state.editPlayersView.show,
  mode: state.editPlayersView.mode
})

const mapDispatchToProps = dispatch => ({
  handleClose: () => dispatch(showEditPlayerDialog(false)),
  insertPlayer: player => dispatch(insertPlayer(player))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayersEditPlayer)
