import { getApartments } from "../../../../../src/limi/domain/usecase/get-apartments.js";
import { expect } from 'chai';
import sinon  from 'sinon';

describe('Unit Test', function () {
    describe('get apartements use case', function () {
        it('should get and return all apartments', async function () {
            // given
            const apartementRepository = {
                getAllApartments: sinon.stub(),
            };
            const expected = Symbol("Les Apartements");

            apartementRepository.getAllApartments.resolves(expected);

            // when
            const result = await getApartments({ apartementRepository });

            // then
            expect(result).to.equal(expected)
        })
    })
})
