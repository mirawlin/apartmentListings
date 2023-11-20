import {getApartments} from "../../../../src/limi/domain/usecase/get-apartements.js";
import { expect } from 'chai';
import sinon  from 'sinon';

describe('Unit Test', function () {
    describe('get apartements use case', function () {
        it('should get and return all apartments', async function () {
            // given
            const mockedApartementRepository = {
                getAllApartments: sinon.stub(),
            };
            const expected = Symbol("Les Apartements");

            mockedApartementRepository.getAllApartments.resolves(expected);

            // when
            const result = await getApartments({ mockedApartementRepository });

            // then
            expect(result).to.equal(expected)
        })
    })
})