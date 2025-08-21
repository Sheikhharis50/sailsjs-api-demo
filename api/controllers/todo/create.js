module.exports = {
  friendlyName: "Create Todo",
  description: "Create a new todo item.",

  inputs: {
    title: {
      type: "string",
      required: true,
    },
    completed: {
      type: "boolean",
      defaultsTo: false,
    },
  },

  exits: {
    success: {
      statusCode: 201,
      description: "New todo created",
    },
  },

  fn: async function (inputs, exits) {
    const newTodo = await sails.models.todo.create(inputs).fetch();
    return exits.success(newTodo);
  },
};
