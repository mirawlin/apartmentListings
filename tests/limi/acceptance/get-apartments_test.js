import { expect } from 'chai';
import

describe('Acceptance | Controller | controller-getApartments', function () {
    let server;

    beforeEach(async function () {
        server = await createServer();
    });

    describe('GET /api/apartments', function () {
        context('when there are apartments', function () {
            it('should return all apartments', async function () {
                const options = {
                    method: 'GET',
                    url: `/api/apartements`,
                };

                const response = await server.inject(options);

                expect(response.statusCode).to.equal(200);
            });
        });
    });
});