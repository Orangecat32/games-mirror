import React from 'react';
import PropTypes from 'prop-types'; 

import { Button, Switch } from "@blueprintjs/core";
import styles from './GameControl.scss';
//import {gameScore} from '../utils.js';

export class GameControl extends React.Component {
  render() {
  //gameScore(this.props.history);
    return (
      <div className={styles.memoryGameControls}>
        <Button text="Restart" onClick={() => this.props.appActions.startGame()} />
        {`Click Count: ${this.props.clickCount}`}
        <Switch 
          checked={this.props.showAll} 
          label="Show All" 
          style={{marginTop:'6px'}}
          onChange={() => this.props.appActions.showAll()}
        />
         {/* <Switch 
          checked={this.props.autoplayMode} 
          label="Autoplay" 
          style={{marginTop:'6px'}}
          onChange={() => this.props.appActions.autoplayMode()}
        /> */}
      </div>
    );
  }
}

GameControl.propTypes = {
  showAll: PropTypes.bool,
  clickCount: PropTypes.number,
  autoplayMode: PropTypes.bool,
  startGame: PropTypes.func
};

export default GameControl;
