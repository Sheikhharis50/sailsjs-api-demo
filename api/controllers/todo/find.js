module.exports = {
  friendlyName: "Find Todos",
  description: "Fetch all todos from the database.",

  inputs: {},

  exits: {
    success: {
      description: "Request was successful.",
      responseType: "ok",
    },
    serverError: {
      description: "Something went wrong.",
      responseType: "serverError",
    },
  },

  fn: async function (inputs, exits) {
    try {
      const todos = await sails.models.todo.find();
      return exits.success(todos);
    } catch (error) {
      return exits.serverError(error);
    }
  },
};
