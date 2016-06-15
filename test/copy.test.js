const expect = require('chai').expect;
const copy = require('../copy');

describe('copy', function() {
  it('has all the same data', function() {
    const value = copy({foo: 'bar', baz: 'cats'});
    expect(value).to.have.property('foo','bar');
    expect(value).to.have.property('baz','cats');
  });

  it('should not be the same object', function() {
    const original = {foo: 'bar', baz: 'cats'};
    const photo = copy(original);
    expect(original).not.to.equal(photo);
  });

  it('should work for deep properties', function() {
    const original = {foo: { baz: 'cats' }};
    const photo = copy(original);
    expect(original.foo).not.to.equal(photo.foo);
    expect(photo.foo.baz).to.equal('cats');
  });
});