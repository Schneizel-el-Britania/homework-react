import React, { Component } from 'react'
import CalendarView from './CalendarView'
import CurrentDate from './CurrentDate'
import styles from './CalendarSection.module.scss'
import { add } from 'date-fns';

export default class CalendarSection extends Component {
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
    return (
      <section className={styles.calendarSection}>
        <CurrentDate date={date} />
        <CalendarView date={date} setDate={this.setDate} />
      </section>
    )
  }

}
