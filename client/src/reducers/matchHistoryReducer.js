import { GET_MATCH_HISTORY, GET_MORE_MATCH_HISTORY } from '../actions/actionTypes'
import ReduxHelpers from '../utils/ReduxHelpers'

const getMatchHistoryTypes = ReduxHelpers.createRequestTypes(GET_MATCH_HISTORY)
const getMoreMatchHistoryTypes = ReduxHelpers.createRequestTypes(GET_MORE_MATCH_HISTORY)

const initialState = {
  isFetching: null,
  data: null,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case getMatchHistoryTypes.REQUEST:
    case getMoreMatchHistoryTypes.REQUEST:
      return { ...state, isFetching: true, error: null }
    case getMatchHistoryTypes.SUCCESS:
      return { ...state, isFetching: false, data: action.payload.data, error: null }
    case getMoreMatchHistoryTypes.SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: {
          ...state.data,
          ...action.payload.data
        },
        error: null
      }
    case getMatchHistoryTypes.FAILURE:
      return { ...state, isFetching: false, data: null, error: action.payload.message }
    case getMoreMatchHistoryTypes.FAILURE:
      return { ...state, isFetching: false, error: action.payload.message }
    default:
      return state
  }
}
