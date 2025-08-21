module.exports = {
  friendlyName: "Find One User",
  description: "Fetch a single user by ID.",

  inputs: {
    id: {
      type: "string",
      required: true,
    },
  },

  exits: {
    notFound: {
      description: "No user with the specified ID was found.",
      responseType: "notFound",
    },
  },

  fn: async function (inputs, exits) {
    const user = await sails.models.user.findOne({ id: inputs.id });

    if (!user) {
      return exits.notFound();
    }

    return exits.success(user);
  },
};
