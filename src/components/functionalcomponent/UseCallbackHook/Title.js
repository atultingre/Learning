import React, { memo } from 'react'

const Title = () => {
    console.log("Tendering Title")
  return (
    <h1>useCallback Hook & memo</h1>
  )
}

export default memo(Title)