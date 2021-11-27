import { format } from 'date-fns';
import React, { Component } from 'react'
import CalendarTable from './CalendarTable';
import styles from './CalendarView.module.scss'

export default class CalendarView extends Component {
  render() {
    const { date } = this.props;
    return (
      <article className={styles.calendarView}>
        <p>{format(date, ('LLLL'))}</p>
        <p>{format(date, ('yyyy'))}</p>
        <CalendarTable date={date} />
      </article>
    )
  }
}
