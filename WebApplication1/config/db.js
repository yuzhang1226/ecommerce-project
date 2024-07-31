const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://zyu2818:zy%401234A@cluster0.ni3evew.mongodb.net/cluster0?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
