const per1 = {name: 'har'}
const per2 = {name: 'var'}
const personData = new Map([[per1, [{age: 30}]]])
personData.set(per2, [{ age: 29 }])

for(let entry of personData.entries()) {
  console.log(entry)
}