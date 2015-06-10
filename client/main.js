Tracker.autorun(function () {
  Meteor.subscribe('bars', Session.get('currentPosition'));
});
