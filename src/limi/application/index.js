import { apartmentController } from './controller.js';

const registerRoutes = async function (server) {
    server.route([
        {
            method: 'GET',
            path: '/api/apartments',
            config: {
                auth: false,
                handler: apartmentController.getAllApartments
            }
        },
        {
            method: 'POST',
            path: '/api/apartments',
            config: {
                auth: false,
                handler: apartmentController.addApartment
            }
        }
    ]);
};

const name = 'apartments-api';
export { registerRoutes, name };
