import React, { useEffect, useState } from 'react'

function useCheckMobile() {
    const [isMobile, setIsMobile] = useState(false)
    const handleResize = () => {
      if (window.innerWidth < 720) {
          setIsMobile(true)
      } else {
          setIsMobile(false)
      }
    }
    useEffect(() => {
      window.addEventListener("resize", handleResize)
    })

    return {
        isMobile
    }
}

export default useCheckMobile
