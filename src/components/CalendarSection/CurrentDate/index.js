import { format } from 'date-fns';
import React from 'react'
import styles from './CurrentDate.module.scss'

export default function CurrentDate(props) {
  const { date } = props;
  return (
    <article className={styles.currentDate}>
      <p className={styles.dayOfWeek}>{format(date, ('eeee'))}</p>
      <p className={styles.dayOfMonth}>{format(date, ('d'))}</p>
    </article>
  )
}
