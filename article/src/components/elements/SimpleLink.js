import React from 'react';
import styles from './SimpleLink.module.scss'

function SimpleLink(props) {
  return (
    <a className={styles.link} href={props.to}>{props.text}</a>
  );
}

export default SimpleLink;
