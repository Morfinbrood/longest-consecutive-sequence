module.exports = function longestConsecutiveLength(array) {
  if (array.length === 0) {
    return 0;
  }
  array.sort(function (a, b) {
    return a - b;
  })

  let counter = 1;
  let maxCounter = counter;
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[i - 1]) {
      if (array[i] - array[i - 1] === 1) {
        counter++;
      }
      else {
        if (counter > maxCounter) {
          maxCounter = counter;
        }
        counter = 1;
      }
    }
  }
  return maxCounter;
}
