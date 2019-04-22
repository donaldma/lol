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

const runes = [
  {
    riot: 8100,
    key: 'Domination',
    icon: 'perk-images/Styles/7200_Domination.png',
    name: 'Domination'
  },
  {
    riot: 8300,
    key: 'Inspiration',
    icon: 'perk-images/Styles/7203_Whimsy.png',
    name: 'Inspiration'
  },
  {
    riot: 8000,
    key: 'Precision',
    icon: 'perk-images/Styles/7201_Precision.png',
    name: 'Precision'
  },
  {
    riot: 8400,
    key: 'Resolve',
    icon: 'perk-images/Styles/7204_Resolve.png',
    name: 'Resolve'
  },
  {
    riot: 8200,
    key: 'Sorcery',
    icon: 'perk-images/Styles/7202_Sorcery.png',
    name: 'Sorcery'
  }
]

module.exports = {
  roles: addIds(roles),
  regions: addIds(regions),
  queues: addIds(queues),
  runes: addIds(runes)
}
