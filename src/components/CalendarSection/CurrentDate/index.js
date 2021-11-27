import { format } from 'date-fns';
import React, { Component } from 'react'
import styles from './CurrentDate.module.scss'

export default class CurrentDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    }
  }

  render() {
    const { date } = this.state;
    return (
      <article className={styles.currentDate}>
        <p>{format(date, ('eeee'))}</p>
        <p>{format(date, ('d'))}</p>
      </article>
    )
  }
}
