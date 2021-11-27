import { format, startOfMonth, getDaysInMonth } from 'date-fns'
import React, { Component } from 'react'

export default class CalendarTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    }
    this.daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  }

  formTableHead = (item) => <th>{item}</th>;
  formTableBody = () => this.formCalendar(getDaysInMonth(this.state.date)).map((week) =>
    <tr>{
      week.map((day) =>
        <th>{day}</th>
      )
    }</tr>
  );

  formCalendar = (days) => {
    const { date } = this.state;
    const shift = this.daysOfWeek.indexOf(format(startOfMonth(date), 'EEEEEE'));

    let allDays = [].concat(
      Array(shift).fill(''),
      Array.from({ length: days }, (_, i) => i + 1)
    );

    const weeks = [];
    while (allDays.length) {
      weeks.push(allDays.splice(0, 7));
    }
    return weeks;
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            {this.daysOfWeek.map(this.formTableHead)}
          </tr>
        </thead>
        <tbody>
          {this.formTableBody()}
        </tbody>
      </table>
    )
  }
}
