import constants from './../constants';
const { types } = constants;

export default (state = {}, action)=> {
  let newState;
  const { toPlace, fromPlace, departOrArrive, date, distance, id } = action

  switch (action.type) {
    case types.ADD_SEARCH_PARAMS:
    newState = Object.assign({}, state, {
      [id] : {
        toPlace: toPlace,
        fromPlace: fromPlace,
        departOrArrive: departOrArrive,
        date: date,
        distance: distance,
        id: id
      }
    });
    return newState;
  default:
    return state;
  }
}
