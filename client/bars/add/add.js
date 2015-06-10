Template.add.helpers({
  'submit': function(event, template) {
    event.preventDefault();
    var name = template.$('[name=name]').val();
    var line1 = template.$('[name=line1]').val();
    var line2 = template.$('[name=line2]').val();
    var zipcode = template.$('[name=zipcode]').val();
    var city = template.$('[name=city]').val();
    var state = template.$('[name=state]').val();
    var country = template.$('[name=country]').val();

    var bar = {
      name: name,
      address: {
        line1:line1,
        line2: line2,
        zipcode: zipcode,
        city: city,
        state: state,
        country: country
      }
    }

    //Meteor.call()
  }
});
