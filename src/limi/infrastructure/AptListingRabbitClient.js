import {Connection} from 'rabbitmq-client'

export class AptListingRabbitClient {
    rabbit;
    #apartmentsListingExchange = 'apartments-listing';
    #createAptListingRoutingKey = 'aptsListing.create';
    #apartmentsListingPub;

    constructor() {
        this.rabbit = new Connection('amqp://publisher:guest@localhost:5672');
        this.#apartmentsListingPub = this.rabbit.createPublisher({
            confirm: true,
            maxAttempts: 2,
            exchanges: [{exchange: this.#apartmentsListingExchange, type: 'topic', durable: true}]
        });
    }

    async publishCreateAptListing(event) {
        console.log(`publishing event ${JSON.stringify(event)}`)
        await this.#apartmentsListingPub.send(
            {
                exchange: this.#apartmentsListingExchange,
                routingKey: this.#createAptListingRoutingKey
            },
            event
        )
    }

    async onShutdown() {
        await this.#apartmentsListingPub.close()
        await this.rabbit.close()
    }
}
