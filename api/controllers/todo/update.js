module.exports = {
  friendlyName: "Update Todo",
  description: "Update an existing todo by ID.",

  inputs: {
    id: {
      type: "string",
      required: true,
    },
    title: {
      type: "string",
    },
    completed: {
      type: "boolean",
    },
  },

  exits: {
    notFound: {
      description: "No todo with the specified ID was found.",
      responseType: "notFound",
    },
  },

  fn: async function (inputs, exits) {
    const updatedTodo = await sails.models.todo
      .updateOne({ id: inputs.id })
      .set(inputs);

    if (!updatedTodo) {
      return exits.notFound();
    }

    return exits.success(updatedTodo);
  },
};
