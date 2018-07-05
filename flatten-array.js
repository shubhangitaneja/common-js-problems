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

function flattenArrayIterative(arr) {
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