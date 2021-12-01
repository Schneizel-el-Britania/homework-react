import { format } from 'date-fns'
import React from 'react'
import PropTypes from 'prop-types';
import ListMonthButtons from '../ListMonthButtons'
import styles from './CalendarHeader.module.scss'

export default function CalendarHeader(props) {
  const { date, setDate } = props;
  return (
    <span className={styles.headerConatiner}>
      <ListMonthButtons setDate={setDate} onDirection />
      <h2 className={styles.calendarHeader}>{format(date, ('LLLL yyyy'))}</h2>
      <ListMonthButtons setDate={setDate} />
    </span>
  )
}

CalendarHeader.propTypes = {
  date: PropTypes.object.isRequired,
  setDate: PropTypes.func.isRequired,
}