export default {
  text: function (el, value) {
    el.textContent = value || ''
  },
  show: function (el, value) {
    el.style.display = value ? '' : 'none'
  },
  class: function (el, value, classname) {
    el.classList[value ? 'add' : 'remove'](classname)
  },
  on: {
    update: function (el, handler, event, directive) {
      if (!directive.handlers) {
        directive.handlers = {}
      }
      var handlers = directive.handlers
      if (handlers[event]) {
        el.removeEventListener(event, handlers[event])
      }
      if (handler) {
        handler = handler.bind(el)
        el.addEventListener(event, handler)
        handlers[event] = handler
      }
    },
    unbind: function (el, event, directive) {
      if (directive.handlers) {
        el.removeEventListener(event, directive.handlers[event])
      }
    },
    customFilter: function (handler, selectors) {
      return function (e) {
        var match = selectors.every(function (selector) {
          console.log(match)
          console.log(e.target)
          if (e.target.webkitMatchesSelector) {
            return e.target.webkitMatchesSelector(selector)
          } else if (e.target.msMatchesSelector) {
            return e.target.msMatchesSelector(selector)
          } else if (e.target.mozMatchesSelector) {
            return e.target.mozMatchesSelector(selector)
          } else {
            return e.target.matchesSelector(selector)
          }
        })
        if (match) handler.apply(this, arguments)
      }
    }
  }
}
