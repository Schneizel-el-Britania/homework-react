import React, { Component } from 'react'
import { format, getDaysInMonth, startOfMonth } from 'date-fns';
import styles from './Body.module.scss'
import { WithDate } from '../../../../HOCs';
import { maxDaysCount, daysOfWeek } from '../data';

class Body extends Component {
  constructor(props) {
    super(props);
    this.currentDate = this.props.date;
  }

  formTableBody = () => this.formCalendar(getDaysInMonth(this.props.date)).map((day) =>
    <div className={this.currentDayClass(day)}>{day}</div>
  );

  formCalendar = (days) => {
    const shift = daysOfWeek.indexOf(format(startOfMonth(this.props.date), 'EEEEEE'));
    const rest = maxDaysCount - (days + shift);
    return [].concat(
      Array(shift).fill(''),
      Array.from({ length: days }, (_, i) => i + 1),
      Array(rest).fill(''),
    );
  }

  currentDayClass = (day) => {
    const compareDay = Number(format(this.currentDate, 'd')) === day;
    const compareMonth = format(this.props.date, 'MMMM uuuu') === format(this.currentDate, 'MMMM uuuu');
    if (compareDay && compareMonth) return styles.currentDay;
  }

  render() {
    return (
      <div className={styles.body}>
        {this.formTableBody()}
      </div>
    )
  }

}

export default WithDate(Body);