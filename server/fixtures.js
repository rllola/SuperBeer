Meteor.startup(function () {
  if (Bars.find().count() === 0) {
    var now = new Date;
    var beers = [
      {
        createdAt: now,
        name: 'Stella',
        size: '25'
      },
      {
        createdAt: now,
        name: 'Heineken',
        size: '33'
      }
    ];

    var bars = [
      {
        createdAt: now,
        name: 'Café du Cerf',
        address:
          {
            line1: 'Ancienne Hôtel de Ville 4',
            zipCode: '2000',
            city: 'Neuchâtel',
            country: 'Switzerland',
            loc: {
              type: 'Point',
              coordinates: [46.991339, 6.928326]
            }
          }
      }
    ];

    var prices = [
      {
        createdAt: now,
        bar: 'Café du Cerf',
        beer: 'Stella',
        price: 6
      },
      {
        createdAt: now,
        bar: 'Café du Cerf',
        beer: 'Heineken',
        price: 5.5
      }
    ];

    _.each(beers, function(beer) {
      Beers.insert(beer);
    });

    _.each(bars, function(bar) {
      Bars.insert(bar);
    });

    _.each(prices, function(price) {
      Prices.insert({
        barId: Bars.findOne({name: price.bar})._id,
        beerId: Beers.findOne({name: price.beer})._id,
        price: price.price
      });
    });

    Bars._ensureIndex({'address.loc.coordinates':'2dsphere'});
  }
});