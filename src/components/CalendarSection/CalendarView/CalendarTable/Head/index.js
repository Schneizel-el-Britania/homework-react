import React from 'react'
import daysOfWeek from '../data';

export default function Head() {
  const formTableHead = (item) => <th key={item}>{item}</th>;
  return (
    <thead>
      <tr>
        {daysOfWeek.map(formTableHead)}
      </tr>
    </thead>
  )
}
