import { format, startOfMonth, getDaysInMonth } from 'date-fns'
import React from 'react'
import styles from './CalendarTable.module.scss'

export default function CalendarTable(props) {
  const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const formTableHead = (item) => <th key={item}>{item}</th>;
  const formTableBody = () => formCalendar(getDaysInMonth(props.date)).map((week) =>
    <tr key={week}>{
      week.map((day) =>
        <th key={day}>{day}</th>
      )
    }</tr>
  );

  const formCalendar = (days) => {
    const shift = daysOfWeek.indexOf(format(startOfMonth(props.date), 'EEEEEE'));

    const allDays = [].concat(
      Array(shift).fill(''),
      Array.from({ length: days }, (_, i) => i + 1)
    );

    const weeks = [];
    while (allDays.length) {
      weeks.push(allDays.splice(0, 7));
    }
    return weeks;
  }

  return (
    <table className={styles.calendarTable}>
      <thead>
        <tr>
          {daysOfWeek.map(formTableHead)}
        </tr>
      </thead>
      <tbody>
        {formTableBody()}
      </tbody>
    </table>
  )

}
