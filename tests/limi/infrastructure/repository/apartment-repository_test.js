import {getAllApartments} from "../../../../src/limi/infrastructure/repository/apartment-repository.js";
import { expect } from 'chai';
import {Apartment} from "../../../../src/limi/domain/model/apartment.js";

describe('Unit Test', function () {
    describe('getApartments', function () {
        it('should return all apartments in datasource', async function () {
            // given
            const appartment1 = new Apartment( {
                id: 1,
                name: "sunny apartment",
                description: "north facing 2 bedroom apartment",
                address: "42 Wallaby Way",
                city : "Sydney",
                postcode: 2000,
                energyRating : "C"
            })

            const appartment2 = new Apartment( {
                id: 2,
                name: "parisian chambre de bon",
                description: "small studio in the heart of paris",
                address: "123 Rue des Archives",
                city : "Paris",
                postcode: 75004,
                energyRating : "F"
            })

            const expected = [
                appartment1,
                appartment2
            ]

            // when
            const allAppartments = await getAllApartments();

            // then
            expect(allAppartments).to.deep.equal(expected)
        })
    })
});