import { useEffect, useState } from 'react'

function useDarkMode() {
  const defaultTheme = typeof window !== 'undefined' ? (localStorage.theme === undefined ? 'light' : localStorage.theme) : 'light'
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme)
    }
  }, [theme])
  return { theme, setTheme }
}
export default useDarkMode
