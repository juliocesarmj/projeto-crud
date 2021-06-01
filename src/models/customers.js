const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String,
});
const Model = mongoose.model('customers', schema);
// nome do banco de dados com os dados em schema
module.exports = Model;
