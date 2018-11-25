import React from 'react';
import { Button, Collapse } from "@blueprintjs/core";
import * as styles from './Rules.scss';

export class Rules extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.btnContainer}>
          <Button onClick={this.handleClick}>
            {this.state.isOpen ? "Hide" : "Show"} Rules
          </Button>
        </div>
        <Collapse isOpen={this.state.isOpen}>
          <div className={styles.content}>{this.props.content}</div>
        </Collapse>
      </div>
    );
  }
}



// export const Rules = (props) => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.heading}>Game Rules:</div>
//       <div className={styles.content}>{props.content}</div>
//     </div> 
//   )
// }

