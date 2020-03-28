import React from 'react';
import PropTypes from 'prop-types'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import './App.css';

class Navigation extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <Nav defaultActiveKey="/home" className="flex-column">
        <Button className="NavigationButton" variant="outline-dark"
                onClick={() => this.props.toggleView("Tournaments")}>
                Tournaments
        </Button>
        <Button className="NavigationButton" variant="outline-dark"
                onClick={() => this.props.toggleView("Players")}>
                Players
        </Button>
        <Button className="NavigationButton" variant="outline-dark"
                onClick={() => this.props.toggleView("Live")}>
                Live
        </Button>
      </Nav>
    );
  }
}

Navigation.propTypes = {
  toggleView: PropTypes.func.isRequired
}

export default Navigation;
