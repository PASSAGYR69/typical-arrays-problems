exports.min = function min (arr) {
  if (arr == undefined || arr.length == 0) {return 0};
  let num = arr[0];

  for(i = 1; i < arr.length; i++) {
    if (arr[i] < num) {num = arr[i]}
  }
    return num;
  
}

exports.max = function max (arr) {
  if (arr == undefined || arr.length == 0) {return 0};
  let num = arr[0];
  
  for(i = 1; i < arr.length; i++) {
    if (arr[i] > num) {num = arr[i]}
    }
    return num;
}

exports.avg = function avg (arr) {
  if (arr == undefined || arr.length == 0) {return 0};
  let sum = 0;
  for(i=0; i < arr.length; i++) {
      sum += arr[i]
  }
  return sum / arr.length
}
