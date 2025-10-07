export const makeKeysToValues = (state, key) => {
  return Object.keys(state).reduce((acc, curr) => {
    acc[curr] = state[curr][key];
    return acc;
  }, {});
};
