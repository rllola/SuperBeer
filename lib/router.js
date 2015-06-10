Router.route('/', function () {
  this.render('home');
});

Router.route('/login', {
  template: 'login',
  onAfterAction: function(){
    /*toastr.success('You\'re logged in', 'Welcome');*/
  }
});

Router.route('/register', function () {
  this.render('register');
});

Router.route('/bars',{
	template: 'bars',
	onBeforeAction: function() {
	  if (! Meteor.userId()) {
      console.log('User not logged in');
	    Router.go('login');
	  } else {
      if (! Session.get('currentPosition')) {
        navigator.geolocation.getCurrentPosition(function(position) {
          Session.set('currentPosition', [position.coords.latitude, position.coords.longitude]);
          console.log(Session.get('currentPosition'));
        });
      }
	    this.next();
	  }
	}
});

Router.route('/bar/:_id',{
	template: 'bar',
	onBeforeAction: function() {
	  if (! Meteor.userId()) {
	    Router.go('login');
	  } else {
	    this.next();
	  }
	},
	data: function () {
    	return Bars.findOne({_id: this.params._id});
  	}
});

Router.route('/bars/add', function () {
  this.render('add');
});
