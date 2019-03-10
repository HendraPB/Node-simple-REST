'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Name can\'t be empty'
  },
  add: String,
  leader: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  member: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
    }]
  }
});


module.exports = mongoose.model('User', UserSchema);