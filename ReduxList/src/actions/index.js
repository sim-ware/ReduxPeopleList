export function getNames(data) {
  console.log('in getNames');
  console.log(data);
  // selectBook is an ActionCreator, it needs to return an Action,
  // an object with a Type Property.
  // Actions usually have 2 values - a type, and a payload
  // Type describes the purpose of the Action. Usually a String, always
  // UpperCase.
  return {
    type: 'GET_NAMES',
    payload: data
  };
}
