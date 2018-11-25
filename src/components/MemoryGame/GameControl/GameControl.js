import React from 'react';
import PropTypes from 'prop-types'; 

import { Button, Switch } from "@blueprintjs/core";
import styles from './GameControl.scss';

export class GameControl extends React.Component {
  render() {
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
      </div>
    );
  }
}

GameControl.propTypes = {
  showAll: PropTypes.bool,
  clickCount: PropTypes.number,
  startGame: PropTypes.func
};

export default GameControl;
