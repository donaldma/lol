import { combineReducers } from 'redux'
import { GET_STATIC_DATA } from '../actions/actionTypes'
import ReduxHelpers from '../utils/ReduxHelpers'
import matchHistoryReducer from './matchHistoryReducer'

const getStaticDataReducer = ReduxHelpers.createReducer(GET_STATIC_DATA)

export default combineReducers({
  getStaticDataReducer,
  matchHistoryReducer
})
