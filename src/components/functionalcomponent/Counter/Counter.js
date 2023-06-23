import React from 'react'
import ClassCounter from './ClassCounter'
import FunctionalCounter from './FunctionalCounter'

const Counter = () => {
  return (
    <div>
        <ClassCounter/>
        <hr />
        <FunctionalCounter/>
    </div>
  )
}

export default Counter