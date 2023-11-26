import { getApartments } from '../domain/usecase/get-apartements.js';

const getAllApartments = async function(request, h, dependencies = { getApartments }) {

    const blah = await dependencies.getApartments();
    return blah;
}

export const apartmentController = { getAllApartments }

