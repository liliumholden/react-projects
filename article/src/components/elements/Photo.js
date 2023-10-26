import React from 'react';
import styles from './Photo.module.scss';

function Photo(props) {
  return (
    <img className={styles.photo} src={props.src} alt={props.alt} />
  );
}

export default Photo;