var proto = Array.prototype
var slice = proto.slice
var mutatorMethods = [
  'pop',
  'push',
  'reverse',
  'shift',
  'unshift',
  'splice',
  'sort'
]

export default function (arr, callback) {
  mutatorMethods.forEach(function (method) {
    arr[method] = function () {
      proto[method].apply(this, arguments)
      callback({
        event: method,
        args: slice.call(arguments),
        array: arr
      })
    }
  })
}
