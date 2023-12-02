import sinon  from 'sinon';
import { expect } from 'chai';
import {apartmentController} from "../../../../src/limi/application/controller.js";
describe(' Unit Apartment Controller', function () {
    describe('#getAllApartments', function () {
        it('should call getAllApartments use-case and return all apartments', async function () {
            const slug = 'slug';
            const serializedModule = Symbol('serialized modules');
            const apartments = Symbol('a apartment');
            const getApartments = {
                getApartments: sinon.stub(),
            };
            getApartments.getApartments.returns(apartments);
            // const moduleSerializer = {
            //     serialize: sinon.stub(),
            // };
            // moduleSerializer.serialize.withArgs(module).returns(serializedModule);

            const result = await apartmentController.getAllApartments({ }, null, { getApartments });

            expect(result).to.equal(apartments);
        });
    });
});