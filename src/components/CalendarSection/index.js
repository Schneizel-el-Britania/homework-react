import React, { Component } from 'react'
import { add } from 'date-fns';
import { CalendarContext } from '../../context';
import CalendarView from './CalendarView'
import CurrentDate from './CurrentDate'
import styles from './CalendarSection.module.scss'


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
      <CalendarContext.Provider value={[date, this.setDate]}>
        <section className={styles.calendarSection}>
          <CurrentDate />
          <CalendarView />
        </section>
      </CalendarContext.Provider>
    )
  }
}
