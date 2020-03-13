import React from 'react';
import Toast from 'react-bootstrap/Toast'
import PropTypes from 'prop-types'

import './App.css';

class ShowTournaments extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestTournaments("NO_FILTER")
  }


  render() {
    let tournamentsToastsList = this.props.tournaments.map((tournament) =>
      <Toast>
        <Toast.Header>
          <strong>{tournament.id}</strong>
        </Toast.Header>
        <Toast.Body>{tournament.name}</Toast.Body>
      </Toast>
    )
    return (
      <div>
        {tournamentsToastsList}
      </div>
    );
  }
}

ShowTournaments.propTypes = {
  requestTournaments: PropTypes.func.isRequired,
  tournaments: PropTypes.array.isRequired
}

export default ShowTournaments;
