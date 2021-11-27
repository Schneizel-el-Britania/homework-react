import { format } from 'date-fns';
import React, { Component } from 'react'
import styles from './CurrentDate.module.scss'

export default class CurrentDate extends Component {

  render() {
    const { date } = this.props;
    return (
      <article className={styles.currentDate}>
        <p>{format(date, ('eeee'))}</p>
        <p>{format(date, ('d'))}</p>
      </article>
    )
  }
}
