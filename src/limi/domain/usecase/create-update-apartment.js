import {insertApartment} from '../../infrastructure/repository/apartment-repository.js';

const createApartment = async function (newApartment, dependencies = {insertApartment}) {
    // const [isValid, errMsg] = validateApartment(newApartment);
    // if (!isValid) {
    //     throw new Error(errMsg);
    // }
    return await dependencies.insertApartment(newApartment);
}

const validateApartment = (newApartment) => {
    if (newApartment.postcode < 1001 || newApartment.postcode > 99138) {
        return (false, 'Invalid postcode')
    }
    if (newApartment.address === '') {
        return (false, 'Address cannot be empty');
    }
    if (newApartment.description.length > 999) {
        return (false, 'Description cannot be longer than 999 characters');
    }
    if (newApartment.name === '') {
        return (false, 'Name cannot be empty');
    }
    if (newApartment.name.length > 100) {
        return (false, 'Name cannot be longer than 100 characters');
    }
    if (newApartment.energyRating !== '' && !['A', 'B', 'C', 'D', 'E', 'F'].includes(newApartment.energyRating)) {
        return (false, 'Energy rating must be one of the following [A, B , C, D, E, F] or empty');
    }
}

export {createApartment};
