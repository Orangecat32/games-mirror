import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './RapperInfo.scss';
import {Card} from './Cards';


export class RapperInfo extends React.Component {
  render() {
    const { filteredArtists } = this.props;
    return (
      <div className={styles.container} >
        {(filteredArtists || []).map(a => (<Card {...a}  key={a.id}/>))}
      </div>
    );
  }
}

RapperInfo.propTypes = {
  filteredArtists: PropTypes.array,
};

export default RapperInfo;
