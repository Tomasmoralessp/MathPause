import { Router } from 'express'
import { ProblemController } from '../controllers/problems.js'

export const problemsRouter = Router()

problemsRouter.get('/', ProblemController.getAll)
problemsRouter.post('/', ProblemController.create)

problemsRouter.get('/random', ProblemController.random)

problemsRouter.get('/:id', ProblemController.getById)
problemsRouter.delete('/:id', ProblemController.delete)
problemsRouter.patch('/:id', ProblemController.update)
