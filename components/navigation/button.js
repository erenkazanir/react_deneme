import React from 'react'
import cn from 'classnames'

import Index from '../button'

import styles from './button.module.css'

function Button({ href, notify, selected, children, className, ...props }) {
  return (
    <Index
      className={cn(styles.navButton, selected && styles.navButtonSelected)}
      href={href}
      {...props}
    >
      {notify > 0 && <span className={styles.notify}> {notify}</span>}
      {children}
    </Index>
  )
}

export default Button
