import { Router } from 'express'
import * as mealsController from '../controllers/meals.js'

const router = Router()

// GET http://localhost:3000/meals/new
router.get('/new', mealsController.new)
// POST http://localhost:3000/meals
router.post('/', mealsController.create)

export { router }