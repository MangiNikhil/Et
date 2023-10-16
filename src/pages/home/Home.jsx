import React from 'react'
import "./style.scss"
import { TopRated } from './topRated/TopRated'
import { Popular } from './popular/Popular'
import {Trending}  from './trending/Trending'
import HeroBanner  from './heroBanner/HeroBanner'
export const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner/>
      <Trending />
      <Popular/>
      <TopRated/>
    </div>
  )
}
