import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LiveTeamsDescription from './LiveTeamsDescription'
import LiveMatchesDescription from './LiveMatchesDescription'
import LiveTeamsClassification from './LiveTeamsClassification'


import './App.css';

class LiveComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state =
      {
        teams: {
          1: {id: 1, name: 'Team1', player1: 'Player1', player2: 'Player2'},
          2: {id: 2, name: 'Team2', player1: 'Player3', player2: 'Player4'},
          3: {id: 3, name: 'Team3', player1: 'Player5', player2: 'Player6'},
          4: {id: 4, name: 'Team4', player1: 'Player7', player2: 'Player8'},
          5: {id: 5, name: 'Team5', player1: 'Player9', player2: 'Player10'}
        },
        matches: [
          {team1: 1, team2: 2, score1: 0, score2: 0, finished: false},
          {team1: 1, team2: 3, score1: 0, score2: 0, finished: false},
          {team1: 1, team2: 4, score1: 0, score2: 0, finished: false},
          {team1: 1, team2: 5, score1: 0, score2: 0, finished: false},
          {team1: 2, team2: 3, score1: 0, score2: 0, finished: false},
          {team1: 2, team2: 4, score1: 0, score2: 0, finished: false},
          {team1: 2, team2: 5, score1: 0, score2: 0, finished: false},
          {team1: 3, team2: 4, score1: 0, score2: 0, finished: false},
          {team1: 3, team2: 5, score1: 0, score2: 0, finished: false},
          {team1: 4, team2: 5, score1: 0, score2: 0, finished: false}
        ],
        semifinals: [
          {team1: 0, team2: 0, score1: 0, score2: 0, finished: false},
          {team1: 0, team2: 0, score1: 0, score2: 0, finished: false}
        ],
        final: [
          {team1: 0, team2: 0, score1: 0, score2: 0, finished: false}
        ],
        summaryByTeam: {
          1: {wins: 0, losts: 0, even: 0, scoredGoals: 0, recvdGoals: 0},
          2: {wins: 0, losts: 0, even: 0, scoredGoals: 0, recvdGoals: 0},
          3: {wins: 0, losts: 0, even: 0, scoredGoals: 0, recvdGoals: 0},
          4: {wins: 0, losts: 0, even: 0, scoredGoals: 0, recvdGoals: 0},
          5: {wins: 0, losts: 0, even: 0, scoredGoals: 0, recvdGoals: 0}
        }
      };
  }


  render() {
    return (
      <Container>
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
      </Container>
    );
  }
}

export default LiveComponent;
