import API from './core/Foundation'
var app = API.create({
    id: 'test',
    // template
    scope: {
        msg: 'hello',
        hello: 'hello Foundation JS',
        something: true,
        changeMessage: function () {
            app.scope.msg = 'hola'
            alert('click')
        }
    }
})
