import { ADD_CARD } from "../constants/action-types";
import { REMOVE_CARD } from "../constants/action-types";
import { EDIT_CARD } from "../constants/action-types";
export const addCard = card => ({ type: ADD_CARD, payload: card });
export const removeCard = card => ({ type: REMOVE_CARD, payload: card });
export const editCard = card => ({ type: EDIT_CARD, payload: card });
