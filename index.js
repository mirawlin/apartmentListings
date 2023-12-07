import Hapi from '@hapi/hapi';
import {registerRoutes, name} from './src/limi/application/index.js'
import {AptListingRabbitClient} from "./src/limi/infrastructure/AptListingRabbitClient.js";

'use strict';


let aptListingRabbitClient;
const createServer = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
        debug: {
            request: ['error']
        }
    });

    aptListingRabbitClient = new AptListingRabbitClient();
    await setupRoutesAndPlugins(server);
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

const setupRoutesAndPlugins = async function (server) {
    const configuration = {
        plugin: {
            register: registerRoutes,
            name, // Use the name from the imported module
        },
    }
    await server.register(configuration);
};

createServer();

export {aptListingRabbitClient};
