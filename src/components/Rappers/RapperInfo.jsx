import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './RapperInfo.scss';
import { Spinner, Button } from "@blueprintjs/core";


export class RapperInfo extends React.Component {
  render() {
    const { isLoading, artists } = this.props;
    return (
      <div className={styles.container} >
        { isLoading && 
          <div  className={styles.loading}>
            <Spinner intent=""/>
          </div>
        }
       <Button text="Refresh" onClick={() => this.props.appActions.requestRappers()} />
        {` rappers: ${(artists || []).length}`}
      </div>
    );
  }
}

RapperInfo.propTypes = {
  artists: PropTypes.array,
};

export default RapperInfo;
