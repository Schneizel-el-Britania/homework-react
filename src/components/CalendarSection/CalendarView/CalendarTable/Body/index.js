import React from 'react'
import { format, getDaysInMonth, startOfMonth } from 'date-fns';
import daysOfWeek from '../data';
import styles from './Body.module.scss'

export default function Body(props) {
  const formTableBody = () => formCalendar(getDaysInMonth(props.date)).map((week) =>
    <tr key={week}>
      {
        week.map((day) =>
          <th
            key={day + Math.random()}
            className={currentDayClass(day)}>{day}
          </th>)
      }
    </tr>
  );

  const formCalendar = (days) => {
    const shift = daysOfWeek.indexOf(format(startOfMonth(props.date), 'EEEEEE'));

    const allDays = [].concat(
      Array(shift).fill(''),
      Array.from({ length: days }, (_, i) => i + 1)
    );

    const weeks = [];
    while (allDays.length) { weeks.push(allDays.splice(0, 7)); }
    return weeks;
  }

  const currentDayClass = (day) => {
    const currentDate = new Date();
    return Number(format(currentDate, 'd')) === day &&
      format(props.date, 'MMMM uuuu') === format(currentDate, 'MMMM uuuu') ?
      styles.currentDay : undefined
  }

  return (
    <tbody>
      {formTableBody()}
    </tbody>
  )
}
