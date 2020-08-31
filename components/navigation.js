import React from 'react'

import NavigationButton from './navigation-button'
import {
  Twitter,
  Home,
  Explore,
  Notification,
  Message,
  Bookmark,
  Lists,
  More
} from './icons'

import styles from './navigation.module.css'

function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavigationButton>
        <Twitter />
      </NavigationButton>

      <NavigationButton>
        <Home />
        <span>Home</span>
      </NavigationButton>

      <NavigationButton>
        <Explore />
        <span>Explore</span>
      </NavigationButton>

      <NavigationButton>
        <Notification />
        <span>Notification</span>
      </NavigationButton>

      <NavigationButton>
        <Message />
        <span>Message</span>
      </NavigationButton>

      <NavigationButton>
        <Bookmark />
        <span>Bookmark</span>
      </NavigationButton>

      <NavigationButton>
        <Lists />
        <span>Lists</span>
      </NavigationButton>

      <NavigationButton>
        <Twitter />
        <span>Profile</span>
      </NavigationButton>

      <NavigationButton>
        <More />
        <span>More</span>
      </NavigationButton>
    </nav>
  )
}

export default Navigation
