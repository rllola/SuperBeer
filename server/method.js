Meteor.methods({
    'location': getLocation
});

//////

function getLocation(address) {
  var location;
  var method = 'GET';
  console.log(address);
  var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=SecretKey';
  if (address) {
    location = HTTP.call(method, url);
    console.log(location);
  }
}
