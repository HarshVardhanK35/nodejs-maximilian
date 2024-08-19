const arr = [{ name: 'one' }, { name: 'two' }]

const one = arr.findIndex((person) => {
  return person.name === 'one'
})

console.log(one)