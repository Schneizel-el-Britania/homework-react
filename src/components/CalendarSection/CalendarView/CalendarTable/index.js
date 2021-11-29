import React from 'react'
import PropTypes from 'prop-types';
import Head from './Head'
import Body from './Body';
import styles from './CalendarTable.module.scss'

export default function CalendarTable(props) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.calendarTable}>
        <Head />
        <Body date={props.date} />
      </table>
    </div>
  )
}

CalendarTable.propTypes = {
  date: PropTypes.object.isRequired,
}
