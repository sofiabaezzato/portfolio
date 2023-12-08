'use client'

import React, { useState } from 'react'

const MobileHeader = () => {
  const [isToggle, setIsToggle] = useState(false)

  return (
    <header className='z-[999] relative select-none'>
      {isToggle ? (
        <button
          onClick={() => setIsToggle(!isToggle)}
        >
          opened
        </button>
      ) : (
        <button
          onClick={() => setIsToggle(!isToggle)}
        >
          closed
        </button>
      )}
    </header>
  )
}

export default MobileHeader