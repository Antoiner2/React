const mongoose = require ('mongoose')
const connectionString = 'mongodb+srv://admin:dkXKuSawzi3z9HiB@cluster0.oratgak.mongodb.net/weatherapp-part3';

module.exports = connectionString; 

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database connected'))

  .catch(error => console.error(error));