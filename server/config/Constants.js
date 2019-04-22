const { addIds } = require('../utils/Helpers')

const roles = [
  {
    name: 'mid',
    key: 'mid',
    riot: 'MID'
  },
  {
    name: 'top',
    key: 'top',
    riot: 'TOP'
  },
  {
    name: 'jungle',
    key: 'jungle',
    riot: 'JUNGLE'
  },
  {
    name: 'adc',
    key: 'adc',
    riot: 'DUO_CARRY'
  },
  {
    name: 'support',
    key: 'support',
    riot: 'DUO_SUPPORT'
  }
]

const regions = [
  {
    name: 'na',
    key: 'na'
  },
  {
    name: 'eune',
    key: 'eune'
  },
  {
    name: 'euw',
    key: 'euw'
  },
  {
    name: 'tr',
    key: 'tr'
  },
  {
    name: 'lan',
    key: 'lan'
  },
  {
    name: 'las',
    key: 'las'
  },
  {
    name: 'jp',
    key: 'jp'
  },
  {
    name: 'oce',
    key: 'oce'
  },
  {
    name: 'br',
    key: 'br'
  },
  {
    name: 'kr',
    key: 'kr'
  },
  {
    name: 'ru',
    key: 'ru'
  }
]

const queues = [
  {
    name: 'ranked solo/duo',
    key: 'rankedSoloDuo',
    riot: 420
  },
  {
    name: 'ranked flex',
    key: 'rankedFlex',
    riot: 440
  },
  {
    name: 'normal draft',
    key: 'normalDraft',
    riot: 400
  },
  {
    name: 'normal blind',
    key: 'normalBlind',
    riot: 430
  }
]

module.exports = {
  roles: addIds(roles),
  regions: addIds(regions),
  queues: addIds(queues)
}
