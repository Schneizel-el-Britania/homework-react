import React from 'react'
import { daysOfWeek } from '../data';
import styles from './Head.module.scss'

export default function Head() {
  const formTableHead = (item) => <div key={item}>{item}</div>;
  return (
    <div className={styles.header}>
      {daysOfWeek.map(formTableHead)}
    </div>
  )
}
