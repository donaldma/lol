import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMatchHistory, getMoreMatchHistory } from '../actions'
import MatchItem from '../components/MatchItem'

class MatchHistory extends Component {
  state = {
    startIndex: 0
  }

  async componentDidMount() {
    const { region, name } = this.props.match.params
    await this.props.getMatchHistory(region, name)
  }

  handleShowMore = async () => {
    const { region, name } = this.props.match.params
    await this.setState({ startIndex: this.state.startIndex + 20 })
    await this.props.getMoreMatchHistory(region, name, this.state.startIndex)
  }

  render() {
    const data = this.props.matchHistoryReducer.data
    const staticData = this.props.getStaticDataReducer.data
    if (!data || !staticData) return <div>Loading...</div>
    console.log(data)
    return (
      <div className='container'>
        <div className='container text-center'>
          <h1>{data.summoner.name}</h1>
          <h5>Level {data.summoner.level}</h5>
          {data.matches.map((x, i) => {
            return <MatchItem key={i} match={x} staticData={staticData} />
          })}
          {this.props.matchHistoryReducer.isFetching ? (
            <button className='btn btn-outline-secondary mb-3' disabled>
              Loading..
            </button>
          ) : (
            <button
              className='btn btn-outline-secondary mb-3'
              onClick={() => this.handleShowMore()}
            >
              Show More
            </button>
          )}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  getMatchHistory,
  getMoreMatchHistory
}

const mapStateToProps = ({ matchHistoryReducer, getStaticDataReducer }) => ({
  matchHistoryReducer,
  getStaticDataReducer
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchHistory)
