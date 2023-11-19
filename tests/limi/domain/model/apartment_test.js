import { Apartment } from '../../../../src/limi/domain/model/apartment.js';
import { expect } from 'chai';

describe('Apartment #constructor', function () {
    it('should create an apartment and with the correct attributes', function () {
        // given
        const id = 1;
        const name = 'sunny apartment';
        const description = 'north facing 2 bedroom sunny apartment with a balcony';
        const address = '42 Wallaby Way';
        const city = 'Sydney';
        const postcode = 2000;
        const energyRating = 'C';


        // when
        const apartment = new Apartment({id, name, description, address, city, postcode, energyRating});

        // then
        expect(apartment.id).to.equal(id);
        expect(apartment.name).to.equal(name);
        expect(apartment.description).to.equal(description);
        expect(apartment.address).to.equal(address);
        expect(apartment.city).to.equal(city);
        expect(apartment.postcode).to.equal(postcode);
        expect(apartment.energyRating).to.equal(energyRating);
    });
});