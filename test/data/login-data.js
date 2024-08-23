module.exports = {
  validCredentials: {
      username: 'standard_user',
      password: 'secret_sauce'
  },
  invalidCredentials: {
      empty: { username: '', password: '' },
      usernameOnly: { username: 'standard_user', password: '' },
      passwordOnly: { username: '', password: 'secret_sauce' }
  }
};