import { UPDATE_SEATS } from "./actions";

function rootReducer(state, action) {
  switch (action.type) {
    case UPDATE_SEATS:
      let id = document.cookie.substring(3);
      return Object.assign({}, state, {
        seats: action.seats,
        seat: action.seats.includes(id) ? action.seats.indexOf(id) + 1 : -1,
      });
    default:
      return state;
  }
}

export default rootReducer;
