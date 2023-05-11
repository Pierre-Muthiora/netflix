import React from 'react'
import requests from '../Requests'
import Main from '../components/Main'
import Row from '../components/Row'

const Home = () => {
  return (
    <div>
        <Main />
        <Row rowID="1" title="Now Playing" fetchURL={requests.requestNowPlaying}/>
        <Row rowID="2" title="Popular" fetchURL={requests.requestPopular}/>
        <Row rowID="3" title="Top Rated" fetchURL={requests.requestTopRated}/>
        <Row rowID="4" title="UpComing" fetchURL={requests.requestUpcoming}/>
        <Row rowID="5" title="Airing Today" fetchURL={requests.requestAiringToday}/>
    </div>
  )
}

export default Home