import Ember from 'ember';

export default Ember.Component.extend({
  comment: '',
  actions: {
    submitComment() {
      let promise = new Ember.RSVP.Promise(function(resolve) {
        setTimeout(function() {
          resolve(rentals);
        }, 2000);
      });
      var component = this;
      return promise.then(function(model) {
        component.set('comment', 'My comment');
      });
    }
  }
});
