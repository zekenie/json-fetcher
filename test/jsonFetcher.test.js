const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-spies'));
const JsonFetcher = require('../jsonFetcher.class');



describe('jsonFetcher', function() {
  let fetchSpy;
  let jsonSpy;

  //setup spies
  beforeEach(function() {
    jsonSpy = chai.spy();
  });

  beforeEach(function() {
    fetchSpy = chai.spy.returns(Promise.resolve({
      json: jsonSpy
    }));
  });

  
})