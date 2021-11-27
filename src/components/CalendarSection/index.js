import React from 'react'
import CalendarView from './CalendarView'
import CurrentDate from './CurrentDate'
import styles from './CalendarView.module.scss'

export default function CalendaSection() {
  return (
    <section className={styles.calendarSection}>
      <CurrentDate />
      <CalendarView />
    </section>
  )
}
