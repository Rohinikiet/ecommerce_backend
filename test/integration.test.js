const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.should();
chai.use(chaiHttp);

describe('Integration Testing', () => {
    it('should fetch products and display them on the Home page', (done) => {
        chai.request(app)
            .get('/api/products')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                const products = res.body;
                products[0].should.have.property('name');
                done();
            });
    });
});
