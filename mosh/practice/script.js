const CreateCircle = function (radius) {
  this.radius = radius

  let defaultLocation = { x: 0, y: 0 }

  Object.defineProperty(this, 'defaultLocation', {

    get: function () {
      return defaultLocation
    },

    set: function (value) {
      // to set the value for the property .. we use setters (1st perform validation)
      if (!value.x || !value.y) {
        throw new Error('Invalid values given for x and y')
      }
      defaultLocation = value
    }
  })

  this.draw = function() {
    this.optimumLocation()
    console.log('draw')
  }
}

const circle = new CreateCircle(1)
let location = circle.defaultLocation = { x: 1, y: 1 }
console.log(location)