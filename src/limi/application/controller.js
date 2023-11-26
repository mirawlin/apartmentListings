import { getApartments as usecases } from '../domain/usecase/get-apartements.js';

const getAllApartments = async function(request, h, dependencies = { usecases }) {

    const blah = await dependencies.usecases.getApartments();
    return blah;
}

const apartmentController = { getAllApartments }

export { apartmentController }