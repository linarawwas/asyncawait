import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import storyRouter from './routes/story.js';
import cors from 'cors';

dotenv.config();
await connectDB();

const PORT = process.env.PORT || 5000;

const app = new express();
app.use(express.json());
app.use(cors())

if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'));
}


app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...')
})
app.use('/api/story', storyRouter);


app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}!!!`))
