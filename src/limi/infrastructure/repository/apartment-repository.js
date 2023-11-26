import datasource from '../datasource/apartmentList.json' assert {type: 'json'};
import {Apartment} from '../../domain/model/apartment.js';
import {v4 as uuidv4} from 'uuid';


const getAllApartments = async function () {
    const apartments = datasource.apartments;
    return toDomain(apartments);
}

const insertApartment = async function (apartment) {
    let newApartment = new Apartment(
        {
            id: uuidv4(),
            name: apartment.name,
            description: apartment.description,
            address: apartment.address,
            city: apartment.city,
            postcode: apartment.postcode,
            energyRating: apartment.energyRating,
        }
    )
    return newApartment;
}

function toDomain(apartments) {
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

export { getAllApartments, insertApartment }
