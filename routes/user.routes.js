import { Router } from "express";

const userRouter = Router();

// GET all users
userRouter.get('/', (req, res) => {
    res.send('GET all users');
});

// GET user by ID
userRouter.get('/:id', (req, res) => {
    res.send(`GET user details for ID: ${req.params.id}`);
});

// CREATE new user
userRouter.post('/', (req, res) => {
    res.send('CREATE new user');
});

// UPDATE user by ID
userRouter.put('/:id', (req, res) => {
    res.send(`UPDATE user with ID: ${req.params.id}`);
});

// DELETE user by ID
userRouter.delete('/:id', (req, res) => {
    res.send(`DELETE user with ID: ${req.params.id}`);
});

export default userRouter;
