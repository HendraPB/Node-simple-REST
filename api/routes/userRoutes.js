'use strict';
module.exports = function(app) {
  var user = require('../controllers/userController');

  // user Routes
  app.route('/user')
    .get(user.index)
    .post(user.create);

  app.route('/user/:userId')
    .get(user.show)
    .post(user.create_member)
    .put(user.update)
    .delete(user.delete);
};