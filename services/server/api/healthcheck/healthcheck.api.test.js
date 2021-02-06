const app = require('../../server');
const request = require('supertest');
const { assert } = require('chai');

describe('The Healthchecker', function () {
  it('checks the health of the app', function (done) {
    request(app)
      .get('/v1/healthcheck')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        assert.equal(res.body.hello, 'hello from inside healthcheck');
        done();
      });
  });
});