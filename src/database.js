const mongoose = require('mongoose');

const URI = 'mongodb+srv://Love:L.22o11v1996e@cluster0.vxiud.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;