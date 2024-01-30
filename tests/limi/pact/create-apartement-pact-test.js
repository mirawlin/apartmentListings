import {MessageProviderPact, providerWithMetadata} from '@pact-foundation/pact';
import {execSync} from 'child_process';
import {Apartment} from "../../../src/limi/domain/model/apartment.js";

const createApartmentClient = {
    createApartment: () => {
        return new Promise((resolve, reject) => {
            resolve( new Apartment ({
                id: "fc02a23a-c711-45ab-97c4-00c00c327fd2",
                name: "Apartment name",
                description: "large T4",
                address: "123 rue rivoli",
                city: "Paris",
                postcode: 75001,
                energyRating: "E",
            }))
        })
    },
}

const exec = command =>
    execSync(command)
        .toString()
        .trim()

describe('Pact Verification', () => {
    describe("Message provider tests", () => {
        const p = new MessageProviderPact({
            messageProviders: {
                // Name should match the 'expects to receive' in the consumer pact
                'New Apartment created': providerWithMetadata(
                    () => createApartmentClient.createApartment(), {
                    queue: 'apartments-created',
                }),
            },
            provider: "apartment-listings",
            providerVersion: exec('git rev-parse HEAD'),
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
