Template.register.helpers({

});

Template.register.events({
  'submit': function(event, template) {
    event.preventDefault();
    var username = template.$('[name=username]').val();
    var email = template.$('[name=email]').val();
    var password = template.$('[name=password]').val();
    var confirm = template.$('[name=confirm]').val();

    Accounts.createUser({
      username: username,
      email: email,
      password: password
    }, function(error) {
      if (error) {
        console.log('Error Bitch');
      }

      Router.go('/');
    });
  }
});
