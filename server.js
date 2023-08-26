const express = require('express');
const mongoose = require('mongoose');


const app = express();


const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(require('./routes'));

// Connect to MongoDB using mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Set mongoose to log queries for debugging
mongoose.set('debug', true);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });