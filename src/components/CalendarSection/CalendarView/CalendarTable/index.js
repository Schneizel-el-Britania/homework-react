import React from 'react'
import Body from './Body';
import styles from './CalendarTable.module.scss'
import Head from './Head'

export default function CalendarTable(props) {
  return (
    <table className={styles.calendarTable}>
      <Head />
      <Body date={props.date} />
    </table>
  )
}
