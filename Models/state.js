var mongoose = require('mongoose');
var StateSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  active: {
    type: Number,
    require: true,
  },
  cured: {
    type: Number,
    require: true,
  },
  death: {
    type: Number,
    require: true,
  },
  total: {
    type: Number,
    require: true,
  },
});

module.exports = State = mongoose.model('State', StateSchema);
