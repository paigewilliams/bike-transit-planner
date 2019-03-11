import constants from './../constants';
const { types, initialState } = constants;

const searchParamsReducer = (state = initialState.searchParams, action) => {
  let newState;
  const { toPlace, fromPlace, departOrArrive, date, distance, id, time } = action;

  switch (action.type) {
  case types.ADD_SEARCH_PARAMS:
    newState = Object.assign({}, state, {
      [id]: {
        toPlace: toPlace,
        fromPlace: fromPlace,
        departOrArrive: departOrArrive,
        date: date,
        distance: distance,
        time: time,
        id: id
      }
    });
    return newState;
  default:
    return state;
  }
};

export default searchParamsReducer;
