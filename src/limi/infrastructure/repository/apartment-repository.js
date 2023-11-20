import datasource from '../datasource/apartmentList.json' assert {type: 'json'};
import {Apartment} from '../../domain/model/apartment.js';

async function getAllApartments() {
    const apartments = datasource.apartments;
    return _toDomain(apartments);
}

function _toDomain(apartments) {
    return apartments.map(apartment => new Apartment(
        {
            id: apartment.id,
            name: apartment.name,
            description: apartment.description,
            address: apartment.address,
            city: apartment.city,
            postcode: apartment.postcode,
            energyRating: apartment.energyRating,
        }
    ))
}

export {getAllApartments}