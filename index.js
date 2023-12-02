import Hapi from '@hapi/hapi';
import {register, name} from './src/limi/application/index.js'

'use strict';

const createServer = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

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
            register,
            name, // Use the name from the imported module
        },
    }

    await server.register(configuration);
};

createServer();
