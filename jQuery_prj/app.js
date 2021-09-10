const express = require("express");
const path = require("path");
const app = express();
const UserRouter = require("./routers/userRouter");
const IndexRouter = require("./routers/indexRouter");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/public", express.static(path.join(__dirname, "./publics")));

app.use("/user", UserRouter);
app.use("/", IndexRouter);

app.listen(3000);
