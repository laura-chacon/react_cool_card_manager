export const addCard = card => ({ type: "ADD_CARD", payload: card });
export const removeCard = card => ({ type: "REMOVE_CARD", payload: card });
export const editCard = card => ({ type: "EDIT_CARD", payload: card });
