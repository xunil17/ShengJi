export const UPDATE_SEATS = "UPDATE_SEATS";

export function updateSeats(seats) {
  return { type: UPDATE_SEATS, seats };
}
