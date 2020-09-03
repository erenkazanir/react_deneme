import React from 'react'
import cn from 'classnames'
import styles from './photo.module.css'

function Photo({
  src = 'https://media-exp1.licdn.com/dms/image/C4E03AQHWJFy_jXvFmg/profile-displayphoto-shrink_200_200/0?e=1604534400&v=beta&t=OXMoZUA5N1hb4PABmSIVNTC3uRnl4Xm-_Lssg30tL5M',
  alt,
  size = 47
}) {
  return (
    <div className={cn([styles.photo])} style={{ width: size, height: size }}>
      <img src={src} alt={alt}></img>
    </div>
  )
}

export default Photo
