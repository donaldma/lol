'use strict'

const express = require('express')
const router = express.Router()
const db = require('../database/db')
const Constants = require('../config/Constants')
const { getTs, kayn } = require('../utils/Helpers')
const { getMatches } = require('../utils/MatchHistoryHelper')
const createError = require('http-errors')

router.get('/ping', async (req, res, next) => {
  try {
    res.json({ status: 200 })
  } catch (err) {
    next(err)
  }
})

router.get('/static-data', async (req, res, next) => {
  try {
    const kaynChamps = await kayn.DDragon.Champion.list()
    const kaynChampsData = kaynChamps.data
    const champs = Object.keys(kaynChampsData).map((key) => {
      return {
        key: kaynChampsData[key].id,
        riot: kaynChampsData[key].key,
        name: kaynChampsData[key].name,
        image: kaynChampsData[key].image
      }
    })
    res.json({
      roles: Constants.roles,
      regions: Constants.regions,
      queues: Constants.queues,
      champs,
      created: getTs()
    })
  } catch (err) {
    err.error ? next(err.error) : next(err)
  }
})

router.get('/summoner/:region/:name/match-history', async (req, res, next) => {
  try {
    if (!req.params.name) throw createError(400, 'Summoner name is required')

    let startIndex = null
    let endIndex = null
    const queryStartIndex = req.query.startIndex
    const queryEndIndex = req.query.endIndex
    const queryRole = req.query.role

    if (queryStartIndex && !queryEndIndex) {
      startIndex = parseInt(queryStartIndex)
      endIndex = parseInt(queryStartIndex) + 20
    }
    if (queryEndIndex && !queryStartIndex) {
      if (parseInt(queryEndIndex) < 20)
        throw createError(400, 'End index must be greater or equal to 20')
      startIndex = parseInt(queryEndIndex) - 20
      endIndex = parseInt(queryEndIndex)
    }
    if (queryEndIndex && queryStartIndex) {
      if (queryEndIndex - queryStartIndex > 20)
        throw createError(400, 'Index range must not exceed 20')
      if (queryEndIndex <= queryStartIndex)
        throw createError(400, 'End index must be greater than start index')
      startIndex = parseInt(queryStartIndex)
      endIndex = parseInt(queryEndIndex)
    }
    if (queryRole) {
      if (!Constants.roles.find((x) => x.key === queryRole)) throw createError(400, 'Invalid role')
    }

    const matches = await getMatches(req, startIndex, endIndex)

    res.json(matches)
  } catch (err) {
    err.error ? next(err.error) : next(err)
  }
})

module.exports = router
