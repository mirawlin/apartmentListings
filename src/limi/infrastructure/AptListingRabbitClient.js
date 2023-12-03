import {Connection} from 'rabbitmq-client'

export class AptListingRabbitClient {
    rabbit;
    #apartmentsListing = 'create-apartments-listing';
    #createAptListingRoutingKey = 'aptsListing.create';
    #apartmentsListingPub;

    constructor() {
        this.rabbit = new Connection('amqp://guest:guest@localhost:5672');
        this.#apartmentsListingPub = this.rabbit.createPublisher({
            confirm: true,
            maxAttempts: 2,
            exchanges: [{exchange: this.#apartmentsListing, type: 'topic'}]
        });
    }

    async publishCreateAptListing(event) {
        console.log(`publishing event ${JSON.stringify(event)}`)
        await this.#apartmentsListingPub.send(
            {exchange: this.#apartmentsListing, routingKey: this.#createAptListingRoutingKey}, // metadata
            event)
    }

    async onShutdown() {
        await this.#apartmentsListingPub.close()
        await this.rabbit.close()
    }
}
