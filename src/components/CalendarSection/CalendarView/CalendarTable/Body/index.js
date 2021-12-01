import React, { Component } from 'react'
import { format, getDaysInMonth, startOfMonth } from 'date-fns';
import daysOfWeek from '../data';
import styles from './Body.module.scss'

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.currentDate = this.props.date;
  }

  formTableBody = () => this.formCalendar(getDaysInMonth(this.props.date)).map((week) =>
    <tr key={week}>
      {
        week.map((day) =>
          <th
            key={day + Math.random()}
            className={this.currentDayClass(day)}>{day}
          </th>)
      }
    </tr>
  );

  formCalendar = (days) => {
    const shift = daysOfWeek.indexOf(format(startOfMonth(this.props.date), 'EEEEEE'));

    const allDays = [].concat(
      Array(shift).fill(''),
      Array.from({ length: days }, (_, i) => i + 1)
    );

    const weeks = [];
    while (allDays.length) { weeks.push(allDays.splice(0, 7)); }
    return weeks;
  }

  currentDayClass = (day) => {
    if (this.currentDate) {
      return Number(format(this.currentDate, 'd')) === day &&
        format(this.props.date, 'MMMM uuuu') === format(this.currentDate, 'MMMM uuuu') ?
        styles.currentDay : undefined
    }
  }

  render() {
    return (
      <tbody>
        {this.formTableBody()}
      </tbody>
    )
  }

}
