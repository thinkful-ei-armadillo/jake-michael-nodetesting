'use strict';

const expect = require('chai').expect;
const request = require('supertest');
const app = require('../app');

describe('GET /books', () => {
  it('should return an array of books', () => {
    return request(app)
      .get('/book')
      .expect(200)
      .expect('Content-Type', /json/);
  });
});