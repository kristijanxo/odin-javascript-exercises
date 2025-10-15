const sumAll = function (a, b) {
  if (Number.isInteger(a) === false || Number.isInteger(b) === false) {
    return "ERROR";
  } else if (a < 0 || b < 0) {
    return "ERROR";
  } else {
    const sortedArgs = [a, b].sort((a, b) => a - b);
    let range = [];
    for (let i = sortedArgs[0]; i <= sortedArgs[1]; i++) {
      range.push(i);
    }
    return range.reduce((sum, currentValue) => sum + currentValue, 0);
  }
};

// Do not edit below this line
module.exports = sumAll;
