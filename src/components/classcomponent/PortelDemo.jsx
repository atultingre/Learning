import React from "react";
import ReactDOM from 'react-dom/client'

const PortelDemo = () => {
return ReactDOM.createPortal(document.getElementById('portal-root')).render(
    <div>
      <h1>Portels Demo</h1>
    </div>
  )
}

export default PortelDemo