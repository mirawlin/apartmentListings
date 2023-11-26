import { getAllApartments } from '../../infrastructure/repository/apartment-repository.js';
const getApartments = async function (dependencies = { getAllApartments }) {
    return dependencies.getAllApartments();
}

export { getApartments };
