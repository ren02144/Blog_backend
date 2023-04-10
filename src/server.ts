import express from 'express';
import bodyParser from 'body-parser';
import userRouter from "./routes/userRoutes";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
