import React from 'react';
import { format } from 'date-fns';
import ListMonthButtons from '../ListMonthButtons';
import styles from './CalendarHeader.module.scss';
import { WithDate } from '../../../HOCs';

function CalendarHeader(props) {
  const { date, setDate } = props;
  return (
    <span className={styles.headerConatiner}>
      <ListMonthButtons setDate={setDate} onDirection />
      <h2 className={styles.calendarHeader}>{format(date, ('LLLL yyyy'))}</h2>
      <ListMonthButtons setDate={setDate} />
    </span>
  )
}

export default WithDate(CalendarHeader);