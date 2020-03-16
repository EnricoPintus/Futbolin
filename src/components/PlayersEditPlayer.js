import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'


import './App.css';

class PlayersEditPlayer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
      return (
        <Modal show={this.props.show} >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Surname</Form.Label>
                <Form.Control type="tet" placeholder="Surname" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.insertPlayer({
                                              name: 'Internal',
                                              surname: 'Property'
                                              })}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      );
    }
}

PlayersEditPlayer.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  insertPlayer: PropTypes.func.isRequired,
  mode: PropTypes.string
}

export default PlayersEditPlayer;
