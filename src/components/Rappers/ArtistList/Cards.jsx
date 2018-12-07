import React from 'react';
import PropTypes from 'prop-types'; 
import moment from 'moment';
import {isValidDate} from '../../../shared/utils';
import styles from './Cards.scss';


export const Card = (props) => {
  const age = isValidDate(props.birthDate) 
    ? `${moment().diff(props.birthDate, 'years')}` 
    : `?`;

  const status = props.active === true ? 'Active' 
    : props.active === false ? 'Inactive' : 'Unknown';

  return (
    <div className={styles.container}>
      <div className={styles.topLine}>
        <div className={styles.name}>
          {`${props.name} ` }
        </div>
        <div className={styles.other}>
          <div>
            {`${status}`}
          </div>
          <div>
            {`Age:${age}`}
          </div>
         
        </div>
      </div>
      <ul className={styles.songList}>
        {props.songs.map(s => (<li key={s}>{s}</li>))}
      </ul>
    </div>
  )
};

Card.propTypes = {
  name: PropTypes.string,
  birthDate: PropTypes.object,
  active: PropTypes.bool
}

