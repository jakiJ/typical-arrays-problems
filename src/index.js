
exports.min = function min (array) {

  if (array) {
      if (array.length == 0 ) {
        return 0;
      }

    let minValue = 0;

    for (let i = 0; i < array.length; i++) {

        if (array[i] < minValue) {
          minValue = array[i];
        }
    }

      return minValue;
  };

  return 0;
}

exports.max = function max (array) {

  if (array) {

      if (array.length == 0) {
        return 0;
      }

    let maxValue = 0;

    for (let i = 0; i < array.length; i++) {

        if (array[i] > maxValue) {
          maxValue = array[i];
        }
    }

      return maxValue;
  };

  return 0;
}



exports.avg = function avg (array) {

  if (array) {

    if (array.length == 0) {
      return 0;
    }

    let varNumber = 0;
    let sumValue = 0;

    for (let i = 0; i < array.length; i++) {

      if (typeof array[i] == 'number') {
        sumValue += array[i];
        varNumber++;
      }
    }

    let avrNumber = sumValue / varNumber;

    return  avrNumber;
  }

return 0;

};


