import { ADD_CARD }    from "../constants/action-types";
import { REMOVE_CARD } from "../constants/action-types";
import { EDIT_CARD }   from "../constants/action-types";
const R = require('ramda');

const initialState = {
  cards: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return { ...state, cards: [...state.cards, action.payload] };
    case REMOVE_CARD:
      return { ...state, cards: R.reject(R.equals(action.payload), state.cards) };
    case EDIT_CARD:
      console.log('payload', action.payload)
      return {};
    default:
      return state;
  }
};
export default rootReducer;
