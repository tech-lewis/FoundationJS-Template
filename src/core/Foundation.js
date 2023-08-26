import config from './config'
import filters from './filters'
import UX from './UX'
import directives from './directives/index'

var controllers = config.controllers
var datum = config.datum
var api = {}
// API
api.data = function (id, data) {
	if (!data) return datum[id]
	if (datum[id]) {
		console.warn('data object "' + id + '"" already exists and has been overwritten.')
	}
	datum[id] = data
}

api.controller = function (id, extensions) {
	if (!extensions) return controllers[id]
	if (controllers[id]) {
		console.warn('controller "' + id + '" already exists and has been overwritten.')
	}
	controllers[id] = extensions
}

api.directive = function (name, fn) {
	if (!fn) return directives[name]
	directives[name] = fn
}

api.filter = function (name, fn) {
	if (!fn) return filters[name]
	filters[name] = fn
}

api.bootstrap = function (opts) {
	if (opts) {
		config.prefix = opts.prefix || config.prefix
	}
	var app = {}
	var n = 0
	var el
	var seed
	var selector = '[' + config.prefix + '-controller]'
	/* jshint boss: true */
	var data = (el = document.querySelector(selector))
	while (data) {
		seed = new UX(el)
		if (el.id) {
			app['$' + el.id] = seed
		}
		n++
	}
	return n > 1 ? app : seed
}

export default api
