const register = async function (server) {
    server.route([
        {
            method: 'GET',
            path: '/',
            config: {
                auth: false,
                handler: (request, h) => {
                    return "helloWorld"
                }
            }
        }
    ]);
};

const name = 'apartments-api';
export { register, name };