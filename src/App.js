import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { Button } from "@blueprintjs/core";
import {MemoryGame} from "./components/MemoryGame/MemoryGame.js"
import { Alignment, Classes, Navbar, NavbarDivider,  NavbarGroup,  NavbarHeading} from "@blueprintjs/core";
import './App.scss';

const MEMORY_GAME = 'Memory';
const BOWLING_GAME = 'Bowling';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     game: MEMORY_GAME
  };
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>Game Room</NavbarHeading>
            <NavbarDivider />
            <Button 
              className={Classes.MINIMAL} 
              active={this.state.game === MEMORY_GAME}
              text={MEMORY_GAME} 
              onClick={()=> this.setState({game: MEMORY_GAME})} />
            <Button 
              className={Classes.MINIMAL} 
              active={this.state.game === BOWLING_GAME}
              text={BOWLING_GAME} 
              onClick={()=> this.setState({game: BOWLING_GAME})} />
          </NavbarGroup>
        </Navbar>
        <div className="GameContainer">
          {this.state.game === MEMORY_GAME &&
            <div>
             <MemoryGame />
            </div>

          }
           {this.state.game === BOWLING_GAME &&
            <div className="ConstructionContainer">
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

