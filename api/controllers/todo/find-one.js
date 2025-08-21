module.exports = {
  friendlyName: "Find One Todo",
  description: "Fetch a single todo by ID.",

  inputs: {
    id: {
      type: "string",
      required: true,
    },
  },

  exits: {
    notFound: {
      description: "No todo with the specified ID was found.",
      responseType: "notFound",
    },
  },

  fn: async function (inputs, exits) {
    const todo = await sails.models.todo.findOne({ id: inputs.id });

    if (!todo) {
      return exits.notFound();
    }

    return exits.success(todo);
  },
};
