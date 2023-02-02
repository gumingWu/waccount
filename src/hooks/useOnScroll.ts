import { useState, useEffect } from "react";

export default function useOnScroll(offset=0) {
  const [isOpaque, setIsOpaque] = useState(false)

  useEffect(() => {
    function onScroll() {
      if(!isOpaque && window.scrollY > offset) {
        setIsOpaque(true)
      } else if(isOpaque && window.scrollY <= offset) {
        setIsOpaque(false)
      }
    }
    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [isOpaque])

  return isOpaque
}