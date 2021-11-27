import React, { Component } from 'react'
import CalendarView from './CalendarView'
import CurrentDate from './CurrentDate'
import styles from './CalendarView.module.scss'
import { format } from 'date-fns';

export default class CalendaSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    }
  }

  // dateOptions = {
  //   currentDayOfWeek: format(this.state.date, 'eeee'),
  //   currentDayOfMonth: format(this.state.date, 'd'),
  // }

  // viewOptions = {
  //   month: format(this.state.date, 'LLLL'),
  //   year: format
  //   currentDayOfMonth: format(this.state.date, 'd'),
  // }

  render() {
    const { date } = this.state;
    return (
      <section className={styles.calendarSection}>
        <CurrentDate date={date} />
        <CalendarView date={date} />
      </section>
    )
  }
}
