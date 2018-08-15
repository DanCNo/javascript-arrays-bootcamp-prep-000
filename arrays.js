var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (array, element) {
  var newArray = array.unshift(element);
  return newArray
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  return array.unshift(element)
}

function addElementToEndOfArray (array, element) {
  var newArray = array.push(element)
  return newArray
}

function destructivelyAddElementToEndOfArray (array, element) {
  return array.push(element)
}

function accessElementInArray (array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  return array.shift()
}

function removeElementFromBeginningOfArray (array) {
  var newArray = array.slice(1)
  return newArray
}

function destructivelyRemoveElementfromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray (array) {
  var newArray = array.slice(0, array.length - 1)
  return newArray
}

