'use strict';

const expect = require('chai').expect;
const request = require('supertest');
const app = require('../index');

describe('GET /apps', () => {
    it('should return an array of apps', () => {
      return request(app)
        .get('/apps')
        .query({sort: '', genres: 'Action'})
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
          expect(res.body).to.be.an('array');
          expect(res.body).to.have.lengthOf.at.least(1);
          const app = res.body[0];
          expect(app).to.include.all.keys(
            'App',
            'Category',
            'Rating',
            'Reviews',
            'Size',
            'Installs',
            'Type',
            'Price',
            'Content Rating',
            'Genres',
            'Last Updated',
            'Current Ver',
            'Android Ver');
        });
    });
    it('should be 400 if sort is incorrect', () => {
      return request(app)
        .get('/apps')
        .query({sort: 'MISTAKE'})
        .expect(400, 'Must be rating or app...');
    });
    it('should sort by app', () => {
      return request(app)
        .get('/apps')
        .query({sort: 'App', genres: 'Action'})
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
          expect(res.body).to.be.an('array');
          let i = 0;
          let sorted = true;
          while(sorted && i < res.body.length - 1) {
            sorted = sorted && res.body[i].App < res.body[i + 1].App;
            i++;
          }
          expect(sorted).to.be.true;
        });
    });
  });