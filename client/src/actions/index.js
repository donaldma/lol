import { GET_STATIC_DATA, GET_MATCH_HISTORY, GET_MORE_MATCH_HISTORY } from './actionTypes'
import ReduxHelpers from '../utils/ReduxHelpers'

export const getStaticData = () =>
  ReduxHelpers.createAction(GET_STATIC_DATA, 'get', '/api/static-data')

export const getMatchHistory = (region, name) =>
  ReduxHelpers.createAction(
    GET_MATCH_HISTORY,
    'get',
    `/api/summoner/${region}/${name}/match-history`
  )

export const getMoreMatchHistory = (region, name, startIndex) =>
  ReduxHelpers.createAction(
    GET_MORE_MATCH_HISTORY,
    'get',
    `/api/summoner/${region}/${name}/match-history?startIndex=${startIndex}`
  )
