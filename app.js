import express from "express";
import { port } from "./config/env.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription route.js";
const app = express();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);
app.get('/', (req, res) => {
    res.send('Welcome to the Subscription Tracker API yoo!');
});

app.listen(3000, () => {
    console.log('Subscription Tracker API is running on http://localhost:5500');
});

export default app;
