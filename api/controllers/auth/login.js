module.exports = {
  friendlyName: "Login",

  description: "Login user.",

  inputs: {
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
      statusCode: 200,
      description: "Login Successfully",
    },
    invalid: {
      statusCode: 400,
      description: "Invalid email or password",
    },
    error: {
      description: "Something went wrong",
    },
  },

  fn: async function (inputs, exits) {
    const user = await sails.models.user.findOne({
      email: inputs.email,
    });

    if (!user) {
      return exits.invalid({
        message: "Email not exist",
      });
    }

    try {
      await sails.helpers.passwords.checkPassword(
        inputs.password,
        user.password
      );
      return exits.success({ message: "Login Successfully", user: user });
    } catch (error) {
      console.error(error);
      return exits.invalid({ message: "Invalid password" });
    }
  },
};
