/*
https://www.careercup.com/question?id=5156596605779968
*/

function interleaveList(list) {
  let max = 0;
  let result = [];

  // Get the list of max size
  for(let i = 0; i < list.length; i++) {
    max = Math.max(max, list[i].length);
  }

  for(let i = 0; i < max; i++) {
    for(let j = 0; j < list.length; j++) {
      if(typeof list[j][i] !== 'undefined') {
        result.push(list[j][i]);
      }
    }
  }

  return result;
}

array = [[1, 2, 3], [9, 0], [5], [-4, -5, -2, -3, -1]];
console.log(interleaveList(array));