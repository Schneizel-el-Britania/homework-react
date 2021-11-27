import { format } from 'date-fns';
import React, { Component } from 'react'
import CalendarTable from './CalendarTable';
import styles from './CalendarView.module.scss'

export default class CalendarView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    }
  }

  render() {
    const { date } = this.state;
    return (
      <article className={styles.calendarView}>
        <h2 className={styles.calendarHeader}>{format(date, ('LLLL yyyy'))}</h2>
        <CalendarTable date={date} />
      </article>
    )
  }
}
