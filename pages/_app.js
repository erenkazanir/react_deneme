import React, { useState, useEffect, useLayoutEffect } from 'react'

import '../styles/app.css'
import StoreContext from '../store'

export default function MyApp({ Component, pageProps }) {
  const [theme, themeSet] = useState(null)

  //sayfa henüz virtualDom oluştuğunda devreye girer
  useLayoutEffect(() => {
    const theme = localStorage.getItem('THEME') || 'light'
    themeSet(theme)
  }, [])

  const changeTheme = (theme) => {
    themeSet(theme)
    localStorage.setItem('THEME', theme)
  }

  useEffect(() => {
    if (!theme) return
    const $html = document.querySelector('html')
    $html.classList.remove('light') //$ element
    $html.classList.remove('dark') //$ element
    $html.classList.remove('dim') //$ element
    $html.classList.add(theme.toString())
  }, [theme])

  return (
    <StoreContext.Provider value={{ theme, changeTheme }}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  )
}
