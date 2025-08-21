module.exports = {
  friendlyName: "Register",

  description: "Register user.",

  inputs: {
    firstName: {
      type: "string",
      required: true,
    },
    lastName: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
      isEmail: true,
    },
    password: {
      type: "string",
      required: true,
      minLength: 6,
    },
  },

  exits: {
    success: {
      statusCode: 201,
      description: "New user created",
    },
    emailAlreadyInUse: {
      statusCode: 400,
      description: "Email address already in use",
    },
    error: {
      description: "Something went wrong",
    },
  },

  fn: async function (inputs, exits) {
    const email = inputs.email.toLowerCase().trim();

    if (await sails.models.user.findOne({ email })) {
      return exits.emailAlreadyInUse({
        message: "Email address already in use",
      });
    }

    const user = await sails.models.user
      .create({
        firstName: inputs.firstName.trim(),
        lastName: inputs.lastName.trim(),
        email: email,
        password: inputs.password.trim(),
      })
      .fetch();

    return exits.success(user);
  },
};
