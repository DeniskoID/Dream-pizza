// eslint-disable-next-line no-unused-vars
import React from 'react';

import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Ничего не&nbsp;найдено
      </h1>
      <p className={styles.description}>В данный момент страница не&nbsp;доступна</p>
    </div>
  );
};

export default NotFoundBlock;
