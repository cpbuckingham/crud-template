'use strict';

process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');
const app = require('../server');
const knex = require('../knex');


describe('***SUITE HEADER***', () => {

    xdescribe('suite subheader', () => {

        it('User Story 1', (done) => {
            done();
        })

        it('User Story 2', (done) => {
            done();
        })

    });

});

describe('GET /', () => {

  it('responds with JSON', done => {
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
 });
