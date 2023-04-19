import { Router } from 'express'
import * as flightsController from '../controllers/flights.js'

const router = Router()
// GET localhost:3000/flights
router.get('/', flightsController.index)
// GET localhost:3000/flights/new
router.get('/new', flightsController.new)
// GET localhost:3000/flights/:flightId
router.get('/:flightId', flightsController.show)
// GET localhost:3000/flights/:flightId/edit
router.get('/:flightId/edit', flightsController.edit)
// GET localhost:3000/flights
router.post('/', flightsController.create)
// GET localhost:3000/flights/:flightId/tickets
router.post('/:flightId/tickets', flightsController.createTickets)
router.post('/:flightId/meals', flightsController.addToMenu)
// GET localhost:3000/flights/:flightId
router.delete('/:flightId', flightsController.delete)
// GET localhost:3000/flights/:flightId
router.put('/:flightId', flightsController.update)

export { router }