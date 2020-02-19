import React from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';
import Button from 'react-bootstrap/Button';
import PlayersTable from './PlayersTable'

class CreateTeams extends React.Component {

    constructor(props) {
        super(props);
    }

    handleSubmit = (event) => {
      event.preventDefault()
    }

    render() {
    return (
      <div>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1"/>
          <input type="date" class="form-control" aria-label="Date" aria-describedby="basic-addon1"/>
        </div>
        <PlayersTable/>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1"/>
          <input type="date" class="form-control" aria-label="Date" aria-describedby="basic-addon1"/>
        </div>
      </div>
    );
    }
}

export default CreateTeams;
