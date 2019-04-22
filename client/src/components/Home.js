import React, { Component } from 'react'
import MainSearchBar from '../containers/MainSearchBar'

class Home extends Component {
  render() {
    return (
      <div className='container text-center'>
        <h1>LoL</h1>
        <div className='row'>
          <MainSearchBar />
        </div>
      </div>
    )
  }
}

export default Home
