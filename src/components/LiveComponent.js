import React from 'react';
import ShowTournamentsContainer from './ShowTournamentsContainer'
import PropTypes from 'prop-types'



import './App.css';

class LiveComponent extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    let mainComponent
    if (this.props.liveView.tournament === "empty")
      mainComponent = <ShowTournamentsContainer/>
    return (
      <div>{mainComponent}</div>

    );
  }
}


LiveComponent.propTypes = {
  tournaments: PropTypes.array.isRequired,
  mode: PropTypes.string.isRequired,
  liveView: PropTypes.object.isRequired
}

export default LiveComponent;


/* <Container>
<Row>
  <Col sm={2}> <LiveTeamsDescription teams={this.state.teams}/> </Col>

  <Col sm={6}> <LiveMatchesDescription
                                      matches={this.state.matches}
                                      teams={this.state.teams}
                                      />
  </Col>

  <Col sm={4}> <LiveTeamsClassification
                        teams={this.state.teams}
                        summaryByTeam={this.state.summaryByTeam}
                        />
  </Col>
</Row>
</Container> */