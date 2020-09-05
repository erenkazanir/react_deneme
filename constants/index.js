import * as Icon from '../components/icons'
import React from 'react'
export default {
  TABLET_SIZE: 980,
  DESKTOP_SIZE: 1270
}

export const MENU = [
  {
    key: 'twitter',
    path: '/',
    icon: <Icon.Twitter style={{ fontSize: 30, color: 'white' }} />,
    iconSelected: <Icon.Twitter style={{ fontSize: 30, color: 'white' }} />,
    title: '',
    notify: 0
  },
  {
    key: 'home',
    path: '/',
    icon: <Icon.Home />,
    iconSelected: <Icon.HomeFill />,
    title: 'Home',
    notify: 0
  },
  {
    key: 'explore',
    path: '/explore',
    icon: <Icon.Explore />,
    iconSelected: <Icon.ExploreFill />,
    title: 'Explore',
    notify: 0
  },
  {
    key: 'notifications',
    path: '/notifications',
    icon: <Icon.Notification />,
    iconSelected: <Icon.NotificitaionFill />,
    title: 'Notifications',
    notify: 17
  },
  {
    key: 'messages',
    path: '/messages',
    icon: <Icon.Message />,
    iconSelected: <Icon.MessageFill />,
    title: 'Messages',
    notify: 0
  },
  {
    key: 'bookmark',
    path: '/bookmarks',
    icon: <Icon.Bookmark />,
    iconSelected: <Icon.Bookmark />,
    title: 'Bookmarks',
    notify: 0
  },
  {
    key: 'lists',
    path: '/lists',
    icon: <Icon.Lists />,
    iconSelected: <Icon.ListFill />,
    title: 'Lists',
    notify: 0
  },
  {
    key: 'profile',
    path: '/profile',
    icon: <Icon.More />,
    iconSelected: <Icon.More />,
    title: 'Profile',
    notify: 0
  },
  {
    key: 'more',
    path: '/more',
    icon: <Icon.More />,
    iconSelected: <Icon.More />,
    title: 'More',
    notify: 0
  }
]
