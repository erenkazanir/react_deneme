import React from 'react'

import * as Icons from '../components/icons'
import Index from '../components/photo'
import Index from '../components/profile-box'

export default {
  title: 'Icons'
}

export const Icon = () => (
  <div className="icons">
    <Icons.ArrowBottom />
    <Icons.Bookmark />
    <Icons.Emoji />
    <Icons.Explore />
    <Icons.ExploreFill />
    <Icons.Gif />
    <Icons.Home />
    <Icons.HomeFill />
    <Icons.Like />
    <Icons.ListFill />
    <Icons.Lists />
    <Icons.Media />
    <Icons.Message />
    <Icons.MessageFill />
    <Icons.More />
    <Icons.Notification />
    <Icons.NotificitaionFill />
    <Icons.Question />
    <Icons.Reply />
    <Icons.Retweet />
    <Icons.Share />
    <Icons.TimelineProp />
    <Icons.Twitter />
  </div>
)

export const ProfilePhoto = () => <Index />
export const Box = () => <Index />
