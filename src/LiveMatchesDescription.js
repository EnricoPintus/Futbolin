import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import MatchesSection from './MatchesSection'

import './App.css';

class LiveMatchesDescription extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <MatchesSection
          matches={this.props.matches}
          teams={this.props.teams}
          title="First phase"
          />
    );
  }
}

export default LiveMatchesDescription;
