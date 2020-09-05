import React from 'react'

import Title from '../components/text/title'

export default {
  title: 'Typography'
}

export const Title = () => (
  <div>
    <Title>Merhaba Dünya</Title>
    <Title bold={false}>Merhaba Dünya</Title>
  </div>
)
