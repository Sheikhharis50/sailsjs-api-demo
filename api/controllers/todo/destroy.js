module.exports = {
  friendlyName: "Delete Todo",
  description: "Delete a todo by ID.",

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
    const deletedTodo = await sails.models.todo.destroyOne({ id: inputs.id });

    if (!deletedTodo) {
      return exits.notFound();
    }

    return exits.success({ message: "Todo deleted successfully." });
  },
};
