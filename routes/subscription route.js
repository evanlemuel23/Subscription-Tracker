import { Router } from "express";
const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send( {title: 'GET all subscriptions'}));
subscriptionRouter.get('/:id', (req, res) => res.send( {title: 'GET all subscriptions details'}));
subscriptionRouter.post('/', (req, res) => res.send( {title: 'CREATE all subscriptions'}));
subscriptionRouter.put('/:id', (req, res) => res.send( {title: 'UPDATE all subscriptions'}));
subscriptionRouter.delete('/:id', (req, res) => res.send( {title: 'DELETE all subscriptions'}));
subscriptionRouter.get('/:id', (req, res) => res.send( {title: 'GET all subscriptions'}));
subscriptionRouter.get('/:id/cancel', (req, res) => res.send( {title: 'CANCEL subscription'}));
subscriptionRouter.get('/upcoming renewals', (req, res) => res.send( {title: 'GET upcoming renewals'}));

export default subscriptionRouter