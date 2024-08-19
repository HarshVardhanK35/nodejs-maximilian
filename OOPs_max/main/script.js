const arr = [5, 10]

const mul = arr.reduce((prev, curr) => {
  return prev * curr
}, 1)

console.log(mul)