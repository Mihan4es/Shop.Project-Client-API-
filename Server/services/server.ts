import express, {Express} from "express";
import cors from "cors";

const host = process.env.LOCAL_PATH;
const port = Number(process.env.LOCAL_PORT);

export function initServer(): Express {
  const app = express();

  const jsonMiddleware = express.json();
  app.use(jsonMiddleware);

  app.use(cors());

  app.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', 'http://localhost:3002');
    //res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  app.listen(port, host, () => {
    console.log(`Server running on port ${port}`);
  });

  return app;
}