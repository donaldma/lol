import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class MainSearchBar extends Component {
  state = {
    region: 'na',
    name: ''
  }
  handleRegionSelect = (region) => {
    this.setState({ region })
  }
  handleSearch = (e) => {
    e.preventDefault()
    this.props.history.push(`/summoner/${this.state.region}/${this.state.name}/match-history`)
  }
  handleNameChange = (e) => {
    this.setState({ name: e.target.value })
  }
  render() {
    if (!this.props.getStaticDataReducer.data) return null
    return (
      <form className='input-group mb-3' onSubmit={(e) => this.handleSearch(e)}>
        <div className='input-group-prepend'>
          <button
            className='btn btn-outline-secondary dropdown-toggle'
            type='button'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
          >
            {this.state.region}
          </button>
          <div className='dropdown-menu'>
            {this.props.getStaticDataReducer.data.regions.map((x, i) => {
              return (
                <a
                  className='dropdown-item cursor'
                  onClick={() => this.handleRegionSelect(x.key)}
                  key={i}
                >
                  {x.name}
                </a>
              )
            })}
          </div>
        </div>
        <input
          type='text'
          className='form-control'
          value={this.state.name}
          onChange={(e) => this.handleNameChange(e)}
        />
        <div className='input-group-append'>
          <button
            className='btn btn-outline-secondary'
            type='submit'
            // onClick={() => this.handleSearch()}
          >
            Search
          </button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = ({ getStaticDataReducer }) => ({
  getStaticDataReducer
})

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(MainSearchBar)
)
