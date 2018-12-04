import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import PropTypes from 'prop-types'; 
import { Button } from "@blueprintjs/core";

import * as myActions from "../../actions/index";
import { Alignment, Classes, Navbar, NavbarDivider,  NavbarGroup,  NavbarHeading} from "@blueprintjs/core";
import styles from './App.scss';
import * as constants from './constants.js';
import MemoryGameContainer from '../../containers/memory';
import BowlingGameContainer from '../../containers/bowling';
import RappersContainer from '../../containers/rappers';

class App extends Component {

  onComponentDidMount() {

  }
  
  gameSelectionButtons() {
    return (
      <div> 
      {
        constants.AvailableGames.map(g => (
          <Button 
            key={g}
            className={Classes.MINIMAL} 
            active={this.props.selectedGame === g}
            text={g} 
            onClick={()=> this.props.appActions.selectGame(g)} />
        ))
      }
      </div>
    );
  }

  render() {
    return (
      <div className={styles.app}>
        <Navbar>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>Roy's Room</NavbarHeading>
            <NavbarDivider />
            {this.gameSelectionButtons()}
          </NavbarGroup>
        </Navbar>
        <div className={styles.gameContainer}>
          {this.props.selectedGame === constants.MEMORY_GAME &&
            <MemoryGameContainer />
          }
          {this.props.selectedGame === constants.BOWLING_GAME &&
            <BowlingGameContainer />
          }
          {this.props.selectedGame === constants.RAPPERS_DB &&
            <RappersContainer />
          }
          {this.props.selectedGame === constants.MAZE_GAME &&
            <UnderConstruction text={`${this.props.selectedGame} is under construction`} />
          } 
        </div>   
      </div>
    );
  }
}

const UnderConstruction = (props) => (
  <div className={styles.constructionContainer}>
   {props.text}
  </div>
);

App.propTypes = {
  selectedGame: PropTypes.string
};

function mapStateToProps(state) {
  return {
    selectedGame: state.selectedGame
  };
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(myActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);

