import React from 'react'
import { useRouter } from 'next/router'
import cn from 'classnames'

import { MENU } from '../../constants'
import styles from './navigation.module.css'

import Button from './button'
import Title from '../text/title'

function Navigation({ flat = false }) {
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {
        const showTitle = !flat && menu.title.length > 0
        const selected = router.pathname === menu.path
        return (
          <Button
            key={menu.key}
            notify={menu.notify}
            selected={selected}
            href={menu.path}
            className={cn(styles.navButton, menu.key)}
          >
            {selected ? menu.iconSelected : menu.icon}
            {showTitle > 0 && <Title>{menu.title}</Title>}
          </Button>
        )
      })}
    </nav>
  )
}

export default Navigation
