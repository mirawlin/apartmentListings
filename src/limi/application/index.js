const register = async function (server) {
    server.route([
        {
            method: 'GET',
            path: '/',
            handler: (request, h) => {
                return 'Hello World!';
            }
        }
    ]);
};

const name = 'apartments-api';
export { register, name };