const numbers = [10, 20, 30]

numbers.reduce2 = function (callback, initialValue) {
  if (this.length === 1 && !initialValue) {
    return this[0];
  }

  debugger

  if (!this.length && initialValue) {
    return initialValue;
  }

  debugger
  let result;
  let previousValue = initialValue;

  for (let i = 0; i < this.length; i++) {

    if (!initialValue && initialValue !== '' && initialValue !== 0) {
      if (i === 0) {
        previousValue = this[i];
        i++;
      }
      result = callback(previousValue, this[i], i, this);
      previousValue = result;
    }

    if (initialValue || initialValue === '' || initialValue === 0) {
      result = callback(previousValue, this[i], i, this);
      previousValue = result;
    }
  }

  return result;
  // previousValue, currentValue, index, array
};


console.log(numbers.reduce2(
  (sum, x, i, arr) => arr === numbers ? sum + 1 : 0,
  0,
));
