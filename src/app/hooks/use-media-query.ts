import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query)

    const updateMatch = () => {
      setMatches(mediaQueryList.matches)
    }

    updateMatch() // set initial value

    mediaQueryList.addEventListener("change", updateMatch)

    return () => {
      mediaQueryList.removeEventListener("change", updateMatch)
    }
  }, [query])

  return matches
}
