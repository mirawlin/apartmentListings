import { apartmentController } from './controller.js';

const register = async function (server) {
    server.route([
        {
            method: 'GET',
            path: '/api/apartments',
            config: {
                auth: false,
                handler: apartmentController.getAllApartments
            }
        }
    ]);
};

const name = 'apartments-api';
export { register, name };