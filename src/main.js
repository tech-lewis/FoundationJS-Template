import API from './core/Foundation'
var app = API.create({
    id: 'test',
    // template
    scope: {
        msg: 'hello',
        hello: 'Power by Foundation JS',
        something: true,
        changeMessage: function () {
            app.scope.msg = 'clicked hello'
            alert('click')
        }
    }
})

window.UIKit = API
// class UIKit {
//     create (options) {
//         return API.create(options)
//     }
// }
// var kit = new UIKit()
// export default kit
