async function getApartments({ apartementRepository }) {
    return apartementRepository.getAllApartments();
}

export { getApartments };