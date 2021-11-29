import React from 'react'
import styles from './ListMonthButtons.module.scss'

export default function ListMonthButtons(props) {
  const { onDirection, setDate } = props;
  return (
    <button
      className={styles.button}
      onClick={() => { setDate({ months: onDirection ? -1 : 1 }) }}
    >
      {
        onDirection ?
          <span className="material-icons-round">arrow_circle_left</span> :
          <span className="material-icons-round">arrow_circle_right</span>
      }
    </button>
  )
}
