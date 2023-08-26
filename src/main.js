import API from './core/Foundation'
var app = API.create({
    id: 'test',
    // template
    scope: {
        msg: 'hello',
        hello: 'hello Foundation JS',
        changeMessage: function () {
            app.scope.msg = 'hola'
            alert('click')
        }
    }
})
