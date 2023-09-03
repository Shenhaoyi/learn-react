import ACTION_TYPES from './const';
const countActionCreator = {
  [ACTION_TYPES.ADD]: (data) => ({
    type: ACTION_TYPES.ADD,
    data,
  }),
  [ACTION_TYPES.MINUS]: (data) => ({
    type: ACTION_TYPES.MINUS,
    data,
  }),
};
export default countActionCreator;
