module.exports = {
  friendlyName: "Destroy",

  description: "Destroy user.",

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
    const deletedUser = await sails.models.user.destroyOne({ id: inputs.id });

    if (!deletedUser) {
      return exits.notFound();
    }

    return exits.success({ message: "User deleted successfully." });
  },
};
