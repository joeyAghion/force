_                 = require 'underscore'
benv              = require 'benv'
sinon             = require 'sinon'
Backbone          = require 'backbone'
{ fabricate }     = require 'antigravity'
{ resolve }       = require 'path'
SaleArtworkView   = require '../views/sale_artwork'
Artwork           = require '../../../models/artwork'
Sale              = require '../../../models/sale'
CurrentUser       = require '../../../models/current_user'

describe 'SaleArtworks', ->
  beforeEach (done) ->
    benv.setup =>
      benv.expose $: benv.require 'jquery'
      Backbone.$ = $

      @artwork  = new Artwork fabricate 'artwork', acquireable: true, sale_artwork: fabricate('sale_artwork')
      @sale     = new Sale fabricate 'sale', is_auction: true

      benv.render resolve(__dirname, '../templates/artwork.jade'), { artwork: @artwork, displayPurchase: true }, =>
        @view = new SaleArtworkView
          el    : $('body')
          model : @artwork
        done()

  afterEach ->
    benv.teardown()

  describe '#appendAuctionId', ->
    it 'appends auction id to all the links to the artwork', ->
      @view.sale = @sale
      @view.appendAuctionId()
      artworkLinks = _.map @view.$('a'), (a) -> $(a).attr('href')
      artworkLinks.should.match(new RegExp("auction_id=#{@sale.id}"))

  xit 'should alter the template to reflect the state of the auction'

  xit 'should set up the save controls'

  xit 'should have a working buy button'

  xit 'should have a working contact seller button'
