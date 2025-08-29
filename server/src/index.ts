import './env';
import express from 'express';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rootRouter from './routes/root';
import { notFound, errorHandler } from './middleware/errorHandler';

const app = express();

let port;
let corsOptions;

if (process.env.NODE_ENV === 'production') {
    port = process.env.PROD_PORT || 8080;
    corsOptions = {
        origin: process.env.PROD_CLIENT,
        optionsSuccessStatus: 200
    };
} else {
    port = process.env.DEV_PORT || 3000;
    corsOptions = {
        origin: process.env.DEV_CLIENT,
        optionsSuccessStatus: 200
    };
}

// Middleware
app.set('strict routing', true);
app.disable('x-powered-by');
app.use(helmet());
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(cors(corsOptions));
app.use(compression());
app.use(express.json());

// Route endpoint handlers
app.use('/', rootRouter);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server listening at ${port} [${process.env.NODE_ENV}]`));
