Meteor.publish('bars', function(position) {
  var bars;
  if (position === null) {
    bars = Bars.find();
  } else {
    bars = Bars.find({
      'address.loc.coordinates': {
        $nearSphere: {
          $geometry: {
            type: 'Point',
            coordinates: position
          },
          $maxDistance: 5000
        }
      }
    });
  }
  return bars;
});
