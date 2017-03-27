import {
  moduleFor,
  test
} from 'ember-qunit';

//https://guides.emberjs.com/v1.10.0/testing/unit-test-helpers/
moduleFor('route:index', 'Unit | Route | index', {
  //https://github.com/emberjs/ember-qunit | https://api.qunitjs.com/QUnit.module/\
  /*
  needs: [
    'service:i18n',
    'locale:en/translations',
    'util:i18n/missing-message',
    'util:i18n/compile-template',
    'config:environment'
  ],
  beforeEach() {
    this.container.lookup('service:i18n').set('locale', 'en');
    this.registry.register('locale:en/config', localeConfig);
    this.registry.register('helper:t', tHelper);
    this.inject.service('i18n');
  }
  */
});

//Orther sample : https://guides.emberjs.com/v2.12.0/testing/unit-testing-basics/
test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});

test('compute property', function(assert){
  const someThing = this.subject();
  someThing.set('foo', 'baz');
  assert.equal(someThing.get('computedFoo'), 'computed baz');
});

test('model', function(assert){
  assert.expect(1);
  let route = this.subject();
  route.set('doSomething', function(){
    assert.ok(true);
  });
  route.model.apply(route);

});


test('correct promise test', function(assert){
  assert.expect(1);
  let done = assert.async();
  let route = this.subject();
  route.set('doSomething', function(){
    assert.ok(true);
    done();
  });
  route.model.apply(route);

});
