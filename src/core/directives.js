import Seed from './Foundation'
import watchArray from './watchArray'
import config from './config'

export default {
  text: function (value) {
    this.el.textContent = value || ''
  },
  show: function (value) {
    this.el.style.display = value ? '' : 'none'
  },
  class: function (value) {
    this.el.classList[value ? 'add' : 'remove'](this.arg)
  },
  on: {
    update: function (handler) {
      var event = this.arg
      if (this.handler) {
        this.el.removeEventListener(event, this.handler)
      }
      if (handler) {
        this.el.addEventListener(event, handler)
        this.handler = handler
      }
    },
    unbind: function () {
      var event = this.arg
      if (this.handlers) {
        this.el.removeEventListener(event, this.handlers[event])
      }
    }
  },
  each: {
    bind: function () {
      this.el.removeAttribute(config.prefix + '-each')
      this.prefixRE = new RegExp('^' + this.arg + '.')
      var ctn = this.container = this.el.parentNode
      this.marker = document.createComment('x-each-' + this.arg + '-marker')
      ctn.insertBefore(this.marker, this.el)
      ctn.removeChild(this.el)
      this.childSeeds = []
    },
    update: function (collection) {
      if (this.childSeeds.length) {
        this.childSeeds.forEach(function (child) {
          child.destroy()
        })
        this.childSeeds = []
      }
      watchArray(collection, this.mutate.bind(this))
      var self = this
      collection.forEach(function (item, i) {
        self.childSeeds.push(self.buildItem(item, i, collection))
      })
      console.log('collection creation done.')
    },
    mutate: function (mutation) {
      console.log(mutation)
    },
    buildItem: function (data, index, collection) {
      var node = this.el.cloneNode(true)
      var spore = new Seed(node, data, {
        eachPrefixRE: this.prefixRE,
        parentSeed: this.seed
      })
      console.log('构造函数什么的')
      this.container.insertBefore(node, this.marker)
      // console.log('构造函数什么的2')
      collection[index] = spore.scope
      return spore
    }
  }
}
