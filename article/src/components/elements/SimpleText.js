import React from 'react';
import styles from './SimpleText.module.scss'

function SimpleText(props) {
  return (
    <p className={styles.description}>{props.text}</p>
  );
}

export default SimpleText;
