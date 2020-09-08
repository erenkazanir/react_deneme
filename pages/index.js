import React from 'react'

import Layout from '../components/layout/'
import Tweet from '../components/tweet'

function HomePage() {
  return (
    <Layout>
      <Tweet
        name="Eren KAZANIR"
        slug="erenkazanir"
        datetime={new Date('2020-07-01')}
        text={`Bu bir deneme yazısıdır        
                     Deneme`}
      />
      <Tweet
        name="Eren KAZANIR"
        slug="erenkazanir"
        datetime={new Date('2020-07-01')}
        text={`Deneme amaçlı`}
      />
    </Layout>
  )
}

export default HomePage
