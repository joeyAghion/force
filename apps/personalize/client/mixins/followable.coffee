Backbone          = require 'backbone'
SearchBarView     = require '../../../../components/search_bar/view.coffee'
analytics         = require '../../../../lib/analytics.coffee'
followedTemplate  = -> require('../../templates/followed.jade') arguments...

# Common functionality between views with auto-complete/following
module.exports =
  initializeFollowable: ->
    @followed ||= new Backbone.Collection

    @listenTo @followed, 'add', @renderFollowed
    @listenTo @followed, 'remove', @renderFollowed

    throw 'Followable requires a @following collection' unless @following?

  setupSearch: (options={}) ->
    @searchBarView = new SearchBarView
      mode:         options.mode
      restrictType: options.restrictType
      el:           @$('#personalize-search-container')
      $input:       (@$searchInput ||= @$('#personalize-search'))

    @listenTo @searchBarView, 'search:selected', @follow

  renderFollowed: ->
    @$('#personalize-followed').html followedTemplate(models: @followed.models)

  setSkipLabel: ->
    label = if @state.almostDone() then 'Done' else 'Next'
    @$('.personalize-skip').text label
    @_labelSet = true

  follow: (e, model) ->
    @setSkipLabel() unless @_labelSet?
    @$searchInput.val '' # Clear input
    @followed.unshift model.toJSON()
    @following.follow model.id, { notes: 'Followed from /personalize' }

    analytics.track.click @analyticsFollowMessage, label: analytics.modelNameAndIdToLabel(model.get('display_model'), model.get('id'))

  unfollow: (e) ->
    id      = $(e.currentTarget).data 'id'
    model   = @followed.remove id
    @following.unfollow id

    analytics.track.click @analyticsUnfollowMessage, label: analytics.modelNameAndIdToLabel(model.get('display_model'), model.get('id'))
