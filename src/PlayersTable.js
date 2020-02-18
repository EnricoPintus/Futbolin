import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

import './App.css';

class PlayersTable extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
    return (
      <div>
        <Button variant="light"> Create new player </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox"/>
              </td>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <DropdownButton title="Random team">
                  <Dropdown.Item href="#/action-1">Team A</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Team B</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Team C</Dropdown.Item>
                </DropdownButton>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
    }
}

export default PlayersTable;
