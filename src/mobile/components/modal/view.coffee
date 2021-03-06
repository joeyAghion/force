_ = require 'underscore'
Backbone = require 'backbone'
{ mediator } = require '../../../lib/mediator'
template = -> require('./template.jade') arguments...

module.exports = class ModalView extends Backbone.View
  className: 'modal-view'

  events:
    "click .modal__close": "fadeOut"

  initialize: ->
    mediator.on 'modal:close', @fadeOut

  render: ->
    @$el.html template
    this

  insertModalContent: (el) ->
    @$('.modal__content').html el

  fadeOut: ->
    @$('.modal').addClass('is-fadeout')
    _.delay(_.bind(@remove, @), 500)
