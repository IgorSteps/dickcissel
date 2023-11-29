// src/server.js
import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      users: Model,
      observation: Model,
    },

    routes() {
      this.namespace = "api"

       // Login
       this.post('/login', (schema, request) => {
        const { username, password } = JSON.parse(request.requestBody);
        // Authentication logic here
        // Return user data or error
      });

      // Register
      this.post('/register', (schema, request) => {
        const newUser = JSON.parse(request.requestBody);
        // Registration logic here
        // Return user data or error
      });

      // Add observation
      this.post('/observations', (schema, request) => {
        const observation = JSON.parse(request.requestBody);
        console.debug('received add observation request', observation)
        return schema.observations.create(observation);
      });

      // View observation
      this.get('/observations/:id', (schema, request) => {
        let id = request.params.id;
        // Fetch observation logic here
        return schema.observations.find(id);
      });

      // Edit observation
      this.put('/observations/:id', (schema, request) => {
        let id = request.params.id;
        const newObservation = JSON.parse(request.requestBody);
        // Update observation logic here
        return schema.observations.find(id).update(newObservation);
      });
    },
  })

  return server
}