import { add, format } from 'date-fns';
import React, { Component } from 'react'
import CalendarTable from './CalendarTable';
import styles from './CalendarView.module.scss'
import ListMonthButtons from './ListMonthButtons';

export default class CalendarView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    }
  }

  setDate = (options) => this.setState({ date: add(this.state.date, options) })

  render() {
    const { date } = this.state;
    return (
      <article className={styles.calendarView}>
        <span className={styles.headerConatiner}>
          <ListMonthButtons setDate={this.setDate} onDirection={true} />
          <h2 className={styles.calendarHeader}>{format(date, ('LLLL yyyy'))}</h2>
          <ListMonthButtons setDate={this.setDate} />
        </span>
        <CalendarTable date={date} />
      </article>
    )
  }
}
