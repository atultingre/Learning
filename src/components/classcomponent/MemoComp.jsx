import React from "react"
const MemoComp = ({name}) => {
console.log("rendering Memo Component")
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComp)