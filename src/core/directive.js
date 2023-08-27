import Directives from './directives'
import Filters from './filters'

var KEY_RE = /^[^\|]+/
var FILTERS_RE = /\|[^\|]+/g

function Directive (def, attr, arg, key) {

    if (typeof def === 'function') {
        this._update = def
    } else {
        for (var prop in def) {
            if (prop === 'update') {
                this['_update'] = def.update
                continue
            }
            this[prop] = def[prop]
        }
    }

    this.attr = attr
    this.arg = arg
    this.key = key
    var filters = attr.value.match(FILTERS_RE)
    if (filters) {
        this.filters = filters.map(function (filter) {
            // TODO test performance against regex
            var tokens = filter.replace('|', '').trim().split(/\s+/)
            return {
                apply: Filters[tokens[0]],
                args: tokens.length > 1 ? tokens.slice(1) : null
            }
        })
    }
}

Directive.prototype.update = function (value) {
    // apply filters
    if (this.filters) {
        value = this.applyFilters(value)
    }
    this._update(value)
}

Directive.prototype.applyFilters = function (value) {
    var filtered = value
    this.filters.forEach(function (filter) {
        filtered = filter.apply(filtered, filter.args)
    })
    return filtered
}

export default {
    // make sure the directive and value is valid
    parse: function (attr, prefix) {
        if (attr.name.indexOf(prefix) === -1) return null
        var noprefix = attr.name.slice(prefix.length + 1)
        var argIndex = noprefix.indexOf('-')
        var arg = argIndex === -1 ? null : noprefix.slice(argIndex + 1)
        var name = arg ? noprefix.slice(0, argIndex) : noprefix
        var def = Directives[name]
        var key = attr.value.match(KEY_RE)
        return def && key ? new Directive(def, attr, arg, key[0].trim()) : null
    }
}
