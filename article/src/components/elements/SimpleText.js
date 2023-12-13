import React from 'react';
import styles from './SimpleText.module.scss'

function SimpleText({ children }) {
  return (
    <p className={styles.description}>{children}</p>
  );
}

export default SimpleText;
