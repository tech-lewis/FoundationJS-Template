import api from './core/Foundation'
var app = api.create({
  id: 'test',
  // template
  scope: {
    msg: 'hello',
    hello: 'WHWHWHW',
    changeMessage: function () {
        app.scope.msg = 'hola'
    }
  }
})
