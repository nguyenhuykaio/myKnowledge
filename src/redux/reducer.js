import { SET_VISIBILITY_FILTER } from "./types";
const initialState = {
    filter: 'hehehe'
}
export const  reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_VISIBILITY_FILTER:
        return Object.assign({}, state, {
          visibilityFilter: action.filter
        })
      default:
        return state
    }
  }