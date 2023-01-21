const express = require('express');
const app = express();

const postRoutes = require('./routes/apis');

app.use('/', postRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
