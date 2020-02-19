import React from 'react';
import Toast from 'react-bootstrap/Toast'


import './App.css';

class ShowTournaments extends React.Component {

  constructor(props) {
    super(props);

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

export default ShowTournaments;
