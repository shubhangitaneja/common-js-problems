// Space complexity: O(n)
// Time complexity: O(n)
function flattenArrayRecursive1(arr) {
  const flatArray = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      flatArray.push(...flattenArray(item, flatArray));
    } else {
      flatArray.push(item);
    }
  }
  return flatArray;
}

function flattenArrayRecursive2(arr, flatArray=[]) {
  for (const item of arr) {
    if (Array.isArray(item)) {
      flattenArray(item, flatArray);
    } else {
      flatArray.push(item);
    }
  }
  return flatArray;
}

function flattenArrayRecursive3(arr) {
  const flatArray = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      Array.prototype.push.apply(flatArray, flattenArrayRecursive3(item));
    } else {
      flatArray.push(item);
    }
  });
  return flatArray;
}

function flattenArrayRecursive4(arr) {
  return arr.reduce((flatArray, item) => {
    if (Array.isArray(item)) {
      flatArray.push(...flattenArrayRecursive4(item));
    } else {
      flatArray.push(item);
    }
    return flatArray;
  }, []);
}

function flattenArrayIterative2(arr) {
  const flatArray = [];
  while (arr.length) {
    const firstElement = arr.shift();
    if (Array.isArray(firstElement)) {
      arr.unshift(...firstElement); 
    } else {
      flatArray.push(firstElement);
    }
  }
  return flatArray;
}

function flattenArrayIterative2(arr) {
  const flatArray = [];
  while (arr.length) {
    const lastElem = arr.pop();
    if (Array.isArray(lastElem)) {
      arr.push(...lastElem); // Or in ES5 Array.prototype.push.apply(arr, lastElem);
    } else {
      flatArray.push(lastElem);
    }
  }
  return flatArray.reverse();
}
