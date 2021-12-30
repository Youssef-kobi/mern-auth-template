
   
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import bodyParser from "body-parser"; // npm remove body-parser
import connectDB from "./config/db.js";
import AuthRoutes from "./Routes/api/users/AuthRoutes.js";

const app = express();
// .env 
dotenv.config();
// Connecting to mongodb
connectDB();
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });
// var whitelist = ['http://localhost:3000']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
app.use(cors());

app.use(express.json());

// //
app.get("/", (req, res) => {
  res.status(201).json({ success: true, message: "Hello " });
});

// AUTH ROUTE
app.use("/api/users", AuthRoutes);


const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server is running on ${PORT} PORT`));