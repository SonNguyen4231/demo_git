const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/K14_1', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

module.exports = mongoose;
