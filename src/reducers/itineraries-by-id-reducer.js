import constants from './../constants';
const { types } = constants;

export default (state = {}, action) => {
  let newState;
  const { id, legs } = action;

  switch (action.type){
    case types.ADD_ITINERARY:

      newState = Object.assign({}, state, {
        [id]: {
          legs: legs
        }
      });
      return newState;
    default:
      return state;
  }
}
