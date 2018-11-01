import React, { Component } from 'react';
import { Button } from "@blueprintjs/core";
import {MemoryGame} from "./components/MemoryGame/MemoryGame.js";
import {BowlingGame} from "./components/BowlingGame/BowlingGame.js"
import { Alignment, Classes, Navbar, NavbarDivider,  NavbarGroup,  NavbarHeading} from "@blueprintjs/core";
import styles from './App.scss';
import * as constants from './constants.js';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     game: constants.MEMORY_GAME
    };
  }

  gameSelectionButtons() {
    return (
      <div> 
      {
        constants.AvailableGames.map(g => (
          <Button 
            key={g}
            className={Classes.MINIMAL} 
            active={this.state.game === g}
            text={g} 
            onClick={()=> this.setState({game: g})} />
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
          {this.state.game === constants.MEMORY_GAME &&
            <div>
             <MemoryGame />
            </div>
          }
          {this.state.game === constants.BOWLING_GAME &&
            <div>
             <BowlingGame />
            </div>
          }
          {this.state.game === constants.MAZE_GAME &&
            <div className={styles.constructionContainer}>
             <UnderConstruction text={`${this.state.game} is under construction`} />
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

export default App;

