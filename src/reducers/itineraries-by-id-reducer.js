import constants from './../constants';
const { types, initialState } = constants;

const itinerariesByIdReducer = (state = initialState.itinerariesById, action) => {
  let newState;
  const { id, legs, error } = action;
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
  case types.ERROR_ITINERARY:
    newState = Object.assign({}, state, {
      error: error
    });
    return newState;
  default:
    return state;
  }
};

export default itinerariesByIdReducer;
