const numbers = [6, 3, 7, 5, 2, 10]

// filter
const numGreat5 = numbers.filter((number) => {
  return number > 5
})
// console.log(numGreat5)

// map
const mapArr = numbers.map((number) => {
  return ({num: number})
})
// console.log(mapArr)

// reduce
const multiply = numbers.reduce((prev, curr) => {
  return prev * curr
}, 1)
// console.log(multiply)

function findMax(...numArr) {
  let maxNum = numArr[0]
  let minNum = numArr[0]
  for (const num of numArr) {
    if (num > maxNum) {
      maxNum = num
    }
    if (num < minNum) {
      minNum = num
    }
  }
  return [maxNum, minNum]
}
const [max, min] = findMax(...numbers)
console.log(max, min)