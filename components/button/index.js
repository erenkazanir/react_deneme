import React from 'react'
import cn from 'classnames'
import styles from './style.module.css'
import Link from 'next/link'

function LinkButton({ href, children, ...props }) {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  )
}

function BaseButton({ children, ...props }) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  )
}

function Index({ big = false, full = false, children, className, ...props }) {
  const Comp = props.href ? LinkButton : BaseButton

  return (
    <Comp
      className={cn(
        styles.button,
        big && styles.bigButton,
        full && styles.fullWidth,
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

export default Index
