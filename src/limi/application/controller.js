import {getApartments} from '../domain/usecase/get-apartments.js';
import {Apartment} from "../domain/model/apartment.js";
import {createApartment} from "../domain/usecase/create-update-apartment.js";

const getAllApartments = async function (request, h, dependencies = {getApartments}) {
    return await dependencies.getApartments();
}

const addApartment = async function (request, h, dependencies = {createApartment}) {
    const newApiApartment = request.payload;
    try {
        return dependencies.createApartment(
            new Apartment({
                name: newApiApartment.name,
                description: newApiApartment.description,
                address: newApiApartment.address,
                city: newApiApartment.city,
                postcode: newApiApartment.postcode,
                energyRating: newApiApartment.energyRating
            })
        );
    } catch (e) {
        return h.response(e.message).code(400);
    }
}

export const apartmentController = {
    getAllApartments,
    addApartment
}

