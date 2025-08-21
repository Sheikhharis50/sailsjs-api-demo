/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "users",
  attributes: {
    firstName: {
      type: "string",
      required: true,
      columnName: "first_name",
    },
    lastName: {
      type: "string",
      required: true,
      columnName: "last_name",
    },
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
    },
  },

  customToJSON: function () {
    return _.omit(this, ["password"]);
  },

  beforeCreate: async function (values, proceed) {
    // Hash password
    const hashedPassword = await sails.helpers.passwords.hashPassword(
      values.password
    );
    values.password = hashedPassword;
    return proceed();
  },
};
