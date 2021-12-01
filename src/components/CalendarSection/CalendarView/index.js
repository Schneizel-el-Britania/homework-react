import React from 'react'
import CalendarHeader from './CalendarHeader';
import CalendarTable from './CalendarTable';
import styles from './CalendarView.module.scss'

export default function CalendarView() {
  return (
    <article className={styles.calendarView}>
      <CalendarHeader />
      <CalendarTable />
    </article>
  )
}
