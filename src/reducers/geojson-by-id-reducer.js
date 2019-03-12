import constants from './../constants';
const { types, initialState } = constants;

const geojsonByIdReducer = (state = initialState.geojsonById, action) => {
  let newState;
  const { id, geojson } = action;
  switch (action.type) {
    case types.ADD_GEOJSON:
    newState = Object.assign({}, state, {
      [id]: {
        geojson: geojson
      }
    });
    return newState;
  default:
    return state;
  }
}

export default geojsonByIdReducer;
