import types from './types'

export default {
  [types.GET_PEOPLES](state, peoples) {
    state.peoples = peoples;
  }
}