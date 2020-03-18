import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
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

    let tournamentsRows = this.props.tournaments.map((tournament) =>
      <tr>
        <td>
          <input type="checkbox"/>
        </td>
        <td>{tournament.name}</td>
        <td>{tournament.date}</td>
        <td>{tournament.finished ? "View" : "Play"}</td>
      </tr>
    )
  return (
    <div>
      <Button variant="light" > Create new tournament </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tournamentsRows}
        </tbody>
      </Table>
    </div>
    );
  }
}

ShowTournaments.propTypes = {
  requestTournaments: PropTypes.func.isRequired,
  tournaments: PropTypes.array.isRequired
}

export default ShowTournaments;
