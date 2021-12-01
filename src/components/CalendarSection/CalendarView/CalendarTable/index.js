import React from 'react'
import Head from './Head'
import Body from './Body';
import styles from './CalendarTable.module.scss'

export default function CalendarTable(props) {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.calendarTable}>
        <Head />
        <Body />
      </div>
    </div>
  )
}
