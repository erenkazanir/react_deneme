import React from 'react'

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import Index from '../components/button'
import Button from '../components/navigation/button'
import Navigation from '../components/navigation/navigation'
import { Home } from '../components/icons'
import Title from '../components/text/title'
import Index from '../components/theme-button'
import Index from '../components/stack'

export default {
  title: 'Buttons',
  decorators: [withKnobs]
}

export const Normal = () => <Index>Save</Index>
export const Theme = () => (
  <Index column gap={20}>
    <Index>Tweet</Index>
    <Index full>Tweet Full</Index>
    <Index full={true} big>
      Tweet Full Big
    </Index>
  </Index>
)

export const NavButton = () => (
  <Button>
    <Home />
    <Title>Home</Title>
  </Button>
)

export const Nav = () => {
  const flat = boolean('Flat', false)
  return <Navigation flat={flat} selectedKey="home" />
}
