import React from 'react'

const Toast = ({ message, type }) => {
  return (
    <div className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-md shadow-lg text-white text-sm transition-all duration-500
      ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
      {message}
    </div>
  )
}

export default Toast
