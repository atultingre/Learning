import React, { memo } from 'react'

const Button = ({handleClick, children}) => {
    console.log(`Rendering Button -`, children)
  return (
    <button onClick={handleClick}>
        {children}
    </button>
  )
}

export default memo(Button)