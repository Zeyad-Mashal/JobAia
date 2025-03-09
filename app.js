const express = require('express')
const mongoose = require("mongoose");
require("dotenv").config();
const app = express()

const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const {AuthRoutes , ApplicationRoutes , FeedbackRoutes , JobPostRoutes} = require("./Routes/routes");

app.get('/hello', (req, res) => res.send('Hello World!'))



app.use(AuthRoutes);
app.use(ApplicationRoutes);
app.use(FeedbackRoutes);
app.use(JobPostRoutes);


const port = process.env.PORT;
mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  }).catch((err) => {
    console.log(err);
  });
