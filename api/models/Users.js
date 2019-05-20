/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    id: { type: 'number', columnName: 'user_id', required : true },
    name: { type: 'string' },
    first_name: { type: 'string' },
    email: { type: 'string'},
    login: { type: 'string'},
    pw: { type: 'string'}
  },
};

