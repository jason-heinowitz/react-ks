import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 5000;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT);

// catch all
app.use('*', (req, res, next) => {
  next({
    code: 404,
    message: 'Sorry - this resource cannot be found.',
    log: `User failed request: ${req.method} - ${req.originalUrl}`,
  });
});

app.use((err, req, res, next) => {
  // err MUST be in format:
  // { code: status code, message: message to user, log: message to server operator }
  console.log(err.log);
  return res.status(err.code).json({ message: err.message });
});

module.exports = app;
