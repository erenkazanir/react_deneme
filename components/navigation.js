import React from 'react'

import styles from './navigation.module.css'

import NavigationButton from './navigation-button'
import TextTitle from './text-title'
import {
  Twitter,
  Home,
  Explore,
  Notification,
  Message,
  Bookmark,
  Lists,
  More,
  HomeFill,
  ListFill,
  MessageFill,
  NotificitaionFill,
  ExploreFill
} from './icons'

const MENU = [
  {
    key: 'twitter',
    icon: <Twitter />,
    iconSelected: <Twitter />,
    title: '',
    notify: 0
  },
  {
    key: 'home',
    icon: <Home />,
    iconSelected: <HomeFill />,
    title: 'Home',
    notify: 0
  },
  {
    key: 'explore',
    icon: <Explore />,
    iconSelected: <ExploreFill />,
    title: 'Explore',
    notify: 0
  },
  {
    key: 'notification',
    icon: <Notification />,
    iconSelected: <NotificitaionFill />,
    title: 'Notification',
    notify: 17
  },
  {
    key: 'message',
    icon: <Message />,
    iconSelected: <MessageFill />,
    title: 'Messages',
    notify: 0
  },
  {
    key: 'bookmark',
    icon: <Bookmark />,
    iconSelected: <Bookmark />,
    title: 'Bookmark',
    notify: 0
  },
  {
    key: 'lists',
    icon: <Lists />,
    iconSelected: <ListFill />,
    title: 'lists',
    notify: 0
  },
  {
    key: 'profile',
    icon: <More />,
    iconSelected: <More />,
    title: 'Profile',
    notify: 0
  },
  {
    key: 'more',
    icon: <More />,
    iconSelected: <More />,
    title: 'More',
    notify: 0
  }
]

function Navigation({ flat = false, selectedKey = 'home' }) {
  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {
        const showTitle = !flat && menu.title.length > 0
        const selected = selectedKey === menu.key
        return (
          <NavigationButton
            key={menu.key}
            notify={menu.notify}
            selected={selected}
          >
            {selected ? menu.iconSelected : menu.icon}
            {showTitle > 0 && <TextTitle>{menu.title}</TextTitle>}
          </NavigationButton>
        )
      })}
    </nav>
  )
}

export default Navigation
