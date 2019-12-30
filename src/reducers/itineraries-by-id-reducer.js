import constants from './../constants';
const { types, initialState } = constants;

const itinerariesByIdReducer = (state = initialState.itinerariesById, action) => {
  let newState;
  const { id, legs } = action;
  switch (action.type) {
  case types.ADD_ITINERARY:
    newState = Object.assign({}, state, {
      [id]: {
        legs: legs
      }
    });
    return newState;
  case types.CLEAR_ITINERARY:
    newState = {};
    return newState;
  default:
    return state;
  }
};

export default itinerariesByIdReducer;
