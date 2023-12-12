import {MessageProviderPact, providerWithMetadata} from '@pact-foundation/pact';

const createApartmentClient = {
    createApartment: () => {
        return new Promise((resolve, reject) => {
            resolve({
                id: "fc02a23a-c711-45ab-97c4-00c00c327fd2",
                name: "Apartment name",
                description: "large T4",
                address: "123 rue rivoli",
                city: "Paris",
                postcode: 75001,
                energyRating: "E",
            })
        })
    },
}
describe('Pact Verification', () => {
    describe("Message provider tests", () => {
        // 2 Pact setup
        const p = new MessageProviderPact({
            messageProviders: {
                'New Apartment created': providerWithMetadata(
                    () => createApartmentClient.createApartment(), {
                    queue: 'apartments-created',
                }),
            },
            provider: "apartment-listings",
            providerVersion: "1.0.0",
            pactBrokerUrl: 'http://localhost:9292',
            consumerVersionTags: ['latest'],
            publishVerificationResult: true,
        })

        // 3 Verify the interactions
        describe("Create Apartment listing", () => {
            it("successful_apartment_creation", () => {
                return p.verify()
            })
        })
    })
});
