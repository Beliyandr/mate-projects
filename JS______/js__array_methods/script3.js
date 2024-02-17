'use strict';
function transformState(state, actions) {
  const addProperties = 'addProperties';
  const removeProperties = 'removeProperties';
  const clear = 'clear';

  for (const object of actions) {
    const { type } = object;

    if (type === addProperties) {
      state = { ...state, ...object.extraData };
      // Object.assign(state, object.extraData);
    }

    if (type === removeProperties) {
      for (const removeKey of object.keysToRemove) {
        delete state[removeKey];
      }
    }

    if (type === clear) {
      for (const removeKey in state) {
        delete state[removeKey];
      }
    }
  }


  console.log(state);

}

const state = { foo: 'bar', bar: 'foo' };

transformState(state, [
  {
    type: 'addProperties',
    extraData: {
      name: 'Jim',
      hello: 'world',
    }
  },
  {
    type: 'removeProperties',
    keysToRemove: ['bar', 'hello'],
  },
  {
    type: 'addProperties',
    extraData: { another: 'one' },
  }
]);

// console.log(state); // { foo: 'bar', name: 'Jim', another: 'one' }
