import React, { ReactNode } from 'react'

function ScreenWrapper({ children }: {children:ReactNode}) {
  return (
      <div className='main-container'>
          { children}
    </div>
  )
}

export default ScreenWrapper