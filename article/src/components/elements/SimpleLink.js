import React from 'react';
import styles from './SimpleLink.module.scss'

function SimpleLink({ to, children }) {
  return (
    <a className={styles.link} href={to}>{children}</a>
  );
}

export default SimpleLink;
