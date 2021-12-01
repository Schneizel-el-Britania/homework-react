import React from 'react'
import { format } from 'date-fns';
import { WithDate } from '../../HOCs';
import styles from './CurrentDate.module.scss'

function CurrentDate(props) {
  const { date } = props;
  return (
    <article className={styles.currentDate}>
      <p className={styles.dayOfWeek}>{format(date, ('eeee'))}</p>
      <p className={styles.dayOfMonth}>{format(date, ('d'))}</p>
    </article>
  )
}

export default WithDate(CurrentDate);
