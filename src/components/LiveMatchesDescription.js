import React from 'react';
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
