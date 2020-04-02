import React from 'react';
import ShowTournamentsContainer from './ShowTournamentsContainer'
import PreparationContainer from './PreparationContainer'
import PropTypes from 'prop-types'



import './App.css';

class LiveComponent extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    let mainComponent
    const liveTournament = this.props.liveView.tournament;
    if ( liveTournament === "empty")
      mainComponent = <ShowTournamentsContainer/>
    else {
      if (liveTournament.status == "2") //Preparation
      {
        mainComponent = <PreparationContainer/>
      }
    }
    return (
      <div>{mainComponent}</div>

    );
  }
}


LiveComponent.propTypes = {
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