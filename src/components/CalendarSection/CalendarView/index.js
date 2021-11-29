import { add } from 'date-fns';
import React, { Component } from 'react'
import CalendarHeader from './CalendarHeader';
import CalendarTable from './CalendarTable';
import styles from './CalendarView.module.scss'

export default class CalendarView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    }
  }

  /**
   * Set new date
   * @param {object} options
   */
  setDate = (options) => this.setState({ date: add(this.state.date, options) })

  render() {
    const { date } = this.state;
    console.log(date);
    return (
      <article className={styles.calendarView}>
        <CalendarHeader date={date} setDate={this.setDate} />
        <CalendarTable date={date} />
      </article>
    )
  }
}
