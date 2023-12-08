'use client'

import React, { useState } from 'react'

const MobileHeader = () => {
  const [isToggle, setIsToggle] = useState(false)

  return (
    <header className='z-[999] relative select-none'>
      {isToggle ? (
        <div>open</div>
      ) : (
        <button
          onClick={() => setIsToggle(!isToggle)}
        >closed</button>
      )}
    </header>
  )
}

export default MobileHeader