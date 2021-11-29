import React from 'react'
import CalendarView from './CalendarView'
import CurrentDate from './CurrentDate'
import styles from './CalendarSection.module.scss'

export default function CalendarSection() {
  return (
    <section className={styles.calendarSection}>
      <CurrentDate />
      <CalendarView />
    </section>
  )
}
