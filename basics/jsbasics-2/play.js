const person = {
  name: "harsha",
  age: 23,
  greet () {
    console.log(`hi! my name is: ${this.name}`)
  }
}
// person.greet()

const hobbies = ['writing', 'reading']
const hobbiesMap = hobbies.map((hobby) => {
  return (`hobby at index ${hobbies.indexOf(hobby)} is: ${hobby}`)
})
// console.log(hobbiesMap)

const arr = new Array('hell', 'despair', 'hate')
// console.log(arr)
// const res = arr.map()

const hobbies1 = ['writing', 'reading']
const hobbies2 = [...hobbies1, 'program'];
// console.log(hobbies2)
// console.log(hobbies1)


// object destructuring

const { name, age } = person
const greet = (userName, userAge) => {
  return `hello, user: ${userName} with age: ${userAge}`
}
// console.log(greet(name, age))


// array destructuring

const [ hob1,hob2 ] = hobbies
// console.log(hob1, hob2)


// asynchronous code

setTimeout(() => {
  // console.log("Done!")
}, 2000)
// console.log("1")
// console.log("2")


// nested asynchronous calls

const fetchData = (cb) => {
  setTimeout(() => {
    cb('Done!')
  }, 1500)
}
setTimeout(() => {
  fetchData((data) => {
    // console.log(data)
  })
}, 2000)
// console.log("1")


// promises
const fetchData1 = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolved successfully!')
    }, 1500)
  })
  return promise
}
setTimeout(() => {
  console.log('Promise resolving started...')

  fetchData1()
  .then((res) => {
    console.log("1 "+res)
    return fetchData1()
  })
  .then ((res1) => {
    console.log('2 '+res1)
  })
}, 2000)

console.log("Outside asynchronous!")