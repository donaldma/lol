import React, { Component } from 'react'
import moment from 'moment'

class MatchItem extends Component {
  render() {
    const match = this.props.match
    const staticData = this.props.staticData
    const queueType = staticData.queues.find((x) => x.riot === match.queueType)
    const champion = staticData.champs.find((x) => parseInt(x.riot) === match.champion.id)
    const kills = match.kda.kills
    const deaths = match.kda.deaths
    const assists = match.kda.assists
    const ratio = match.kda.ratio
    const spell1 = staticData.spells.find((x) => parseInt(x.riot) === match.spells[0])
    const spell2 = staticData.spells.find((x) => parseInt(x.riot) === match.spells[1])
    const items = match.items.map((it) => {
      const item = staticData.items.find((x) => parseInt(x.riot) === it)
      return item ? item.name : null
    })
    const items1 = items.slice(0, 2)
    const items2 = items.slice(2, 4)
    const items3 = items.slice(4, 6)
    const gameCompletion = moment(match.gameCreation).add(match.gameDuration, 'seconds')
    const date = moment(gameCompletion).format('dddd, MMMM Do YYYY')
    const time = moment(gameCompletion).format('h:mm a')
    const perk1 = staticData.runes.find((x) => parseInt(x.riot) === match.perks.perkPrimaryStyle)
    const perk2 = staticData.runes.find((x) => parseInt(x.riot) === match.perks.perkSubStyle)

    return (
      <div className='container match-item'>
        <div className='row mb-3'>
          <div className='col-md-3'>
            <div className='vert-align'>
              <div>{match.outcome}</div>
              <div>{match.gameDuration}</div>
              <div>{queueType.name}</div>
              <div>{champion.name}</div>
              <div>{match.role}</div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='vert-align'>
              <div>{match.champion.level}</div>
              <div>
                {match.creepScore}({match.creepScorePm})CS
              </div>
              <div>
                {kills}/{deaths}/{assists}
              </div>
              <div>{ratio} KDA</div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='vert-align'>
              <div>{perk1.name}</div>
              <div>{perk2.name}</div>
              <div>{spell1.name}</div>
              <div>{spell2.name}</div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='vert-align'>
              <div>{date}</div>
              <div>{time}</div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <div className='vert-align'>
              {items1.map((x, i) => {
                return <div key={i}>{x}</div>
              })}
            </div>
          </div>
          <div className='col-md-4'>
            <div className='vert-align'>
              {items2.map((x, i) => {
                return <div key={i}>{x}</div>
              })}
            </div>
          </div>
          <div className='col-md-4'>
            <div className='vert-align'>
              {items3.map((x, i) => {
                return <div key={i}>{x}</div>
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MatchItem
