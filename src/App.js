import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import PropTypes from 'prop-types'; 
import { Button } from "@blueprintjs/core";

import * as myActions from "./actions/index";
import {MemoryGame} from "./components/MemoryGame/MemoryGame.js";
import {BowlingGame} from "./components/BowlingGame/BowlingGame.js"
import { Alignment, Classes, Navbar, NavbarDivider,  NavbarGroup,  NavbarHeading} from "@blueprintjs/core";
import styles from './App.scss';
import * as constants from './constants.js';

class App extends Component {
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
            <NavbarHeading>Game Room</NavbarHeading>
            <NavbarDivider />
            {this.gameSelectionButtons()}
          </NavbarGroup>
        </Navbar>
        <div className={styles.gameContainer}>
          {this.props.selectedGame === constants.MEMORY_GAME &&
            <div>
             <MemoryGame {...this.props}/>
            </div>
          }
          {this.props.selectedGame === constants.BOWLING_GAME &&
            <div>
             <BowlingGame {...this.props}/>
            </div>
          }
          {this.props.selectedGame === constants.MAZE_GAME &&
            <div className={styles.constructionContainer}>
             <UnderConstruction text={`${this.props.selectedGame} is under construction`} />
            </div>
          } 
        </div>   
      </div>
    );
  }
}

const UnderConstruction = (props) => (
  <div>
   {props.text}
  </div>
);

App.propTypes = {
  selectedGame: PropTypes.string
};

function mapStateToProps(state) {
  return {
    ...state,
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

