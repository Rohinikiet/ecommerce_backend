const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); // Your backend entry file

chai.should();
chai.use(chaiHttp);

describe('Products API', () => {
    // Test GET /api/products
    it('should fetch all products', (done) => {
        chai.request(app)
            .get('/api/products')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });

    // Test GET /api/products/:id
    it('should fetch a single product', (done) => {
        const productId = 'exampleProductId';
        chai.request(app)
            .get(`/api/products/${productId}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});
