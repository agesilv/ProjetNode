/* /* const express = require("express");
const userRouter = require("./routes/users");

/* const app = express();

app.use(express.json());

app.get("/", (request, response, next) => {
  response.send("Hello world !!");
});

app.use(userRouter);
app.use(require("./routes/animals"));
app.use(require("./routes/security"));

app.listen(process.env.PORT, () =>
  console.log("Server listening on port " + process.env.PORT)
); */


require("dotenv").config();
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const loanRoutes = require('./routes/loanRoutes');

const app = express();
app.use(express.json());
// Route de test
app.get("/", (request, response) => {
  response.send("Hello world !!");
});

// Routes
app.use('/users', userRoutes);
app.use('/books', bookRoutes);
app.use('/categories', categoryRoutes);
app.use('/loans', loanRoutes);

// Error handling for unmatched routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
