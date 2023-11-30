// src/server.js
import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      observation: Model,
    },

    routes() {
      this.namespace = "api"

      // Add observation.
      this.post('/observations', (schema, request) => {
        const observation = JSON.parse(request.requestBody);
        console.debug('received add observation request', observation)
        
        // Note that the collection is the pluralized form of the model's model name:
        // https://miragejs.com/docs/main-concepts/models/#creating-models
        const newObservation = schema.observations.create(observation);
        console.debug('new observation created in schema:', newObservation);

        return newObservation;
      });
    },
  })

  return server
}