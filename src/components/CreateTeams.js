import React from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';
import Button from 'react-bootstrap/Button';
import PlayersTableContainer from './PlayersTableContainer'

class CreateTeams extends React.Component {

    constructor(props) {
        super(props);
    }

    handleSubmit = (event) => {
      event.preventDefault()
    }

    render() {
    return (
        <PlayersTableContainer/>
    );
    }
}

export default CreateTeams;
