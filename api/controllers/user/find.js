module.exports = {
  friendlyName: "Find Users",
  description: "Fetch all users from the database.",

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
      const todos = await sails.models.user.find();
      return exits.success(todos);
    } catch (error) {
      return exits.serverError(error);
    }
  },
};
