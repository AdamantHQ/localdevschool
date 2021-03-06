module.exports = {
  name: {
    type: 'string',
    maxLength: 200
  },

  email: {
    type: "string",
    email: true,
    unique: true
  },

  passwordHash: {
    type: 'string'
  }
};
