/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  "GET /": "home/index",

  "POST /auth/register": { action: "auth/register" },
  "POST /auth/login": { action: "auth/login" },

  "GET /users/": { action: "user/find" },
  "GET /users/:id": { action: "user/find-one" },
  "DELETE /users/:id": { action: "user/destroy" },

  "GET /todos": { action: "todo/find" },
  "GET /todos/:id": { action: "todo/find-one" },
  "POST /todos": { action: "todo/create" },
  "PUT /todos/:id": { action: "todo/update" },
  "DELETE /todos/:id": { action: "todo/destroy" },
};
