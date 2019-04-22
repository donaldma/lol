const moment = require('moment')
const { Kayn, BasicJSCache } = require('kayn')

const handleServerError = (res, err) => {
  const { status, message } = err
  const code = status ? status : 500
  const errorMessage = message ? message : 'Unknown Error'

  res.status(code).send({
    status: code,
    message: errorMessage
  })
}

const cleanString = (string) => {
  return string.trim().toLowerCase()
}

const addIds = (arr) => {
  return arr.map((x, i) => ({ id: i, ...x }))
}

const getTs = () => moment().format('X')

const basicCache = new BasicJSCache()

const kayn = Kayn(process.env.RIOT_KEY)({
  cacheOptions: {
    cache: basicCache,
    timeToLives: {
      useDefault: true
    }
  }
})

module.exports = {
  handleServerError,
  cleanString,
  addIds,
  getTs,
  kayn
}
