import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { getStaticData } from '../actions'
import Home from '../components/Home'
import MatchHistory from '../containers/MatchHistory'
import ToastWrapper from '../components/ToastWrapper'
import ScrollToTop from '../components/ScrollToTop'

class App extends Component {
  componentDidMount() {
    this.props.getStaticData()
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className='main-container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/summoner/:region/:name/match-history' component={MatchHistory} />
              <Route component={Home} />
            </Switch>
            <ToastWrapper />
          </div>
        </ScrollToTop>
      </Router>
    )
  }
}

const mapDispatchToProps = {
  getStaticData
}

export default connect(
  null,
  mapDispatchToProps
)(App)
