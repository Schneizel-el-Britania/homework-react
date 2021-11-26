import React, { Component } from 'react'
import CalendarView from './CalendarView'
import CurrentDate from './CurrentDate'
import styles from './CalendarView.module.scss'

export default class CalendaSection extends Component {
  render() {
    return (
      <section className={styles.calendarSection}>
        <CurrentDate />
        <CalendarView />
      </section>
    )
  }
}
