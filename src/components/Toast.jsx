import React from 'react'

const Toast = ({success,flightNumber}) => {
  return (
   <div className={`toast ${success ? 'success' : 'danger'}`}>
    {
        success ? <h1>Sucessfully subscribed to flight({flightNumber})!</h1> : <h1>Sorry! Something went wrong.</h1>
        
    }
   </div>

  )
}

export default Toast
