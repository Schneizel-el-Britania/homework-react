import React from 'react'
import CalendarHeader from './CalendarHeader';
import CalendarTable from './CalendarTable';
import styles from './CalendarView.module.scss'

export default function CalendarView(props) {
  const { date, setDate } = props;
  return (
    <article className={styles.calendarView}>
      <CalendarHeader date={date} setDate={setDate} />
      <CalendarTable date={date} />
    </article>
  )
}
