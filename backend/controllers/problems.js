import { ProblemModel } from '../models/local-file-system/problem.js'
import { validateProblem, validatePartialProblem } from '../schemas/problems.js'

export class ProblemController {
  static async getAll (req, res) {
    const { id, topic, problemType, gradeLevel } = req.query
    const problems = await ProblemModel.getAll({ id, topic, problemType, gradeLevel })

    // Controlamos que es lo que se renderiza
    res.json(problems)
  }

  static async random (req, res) {
    const { id, topic, problemType, gradeLevel } = req.query
    const problem = await ProblemModel.random({ id, topic, problemType, gradeLevel })
    if (!problem) return res.status(404).json({ message: 'No problem found with the specified filters' })
    res.json(problem)
  }

  static async getById (req, res) {
    const { id } = req.params
    const problem = await ProblemModel.getById({ id })

    // Controlamos que es lo que se renderiza
    if (problem) return res.json(problem)

    res.status(404).json({ message: 'Problem not found' })
  }

  static async create (req, res) {
    const result = validateProblem(req.body)

    if (!result.success) {
      // 422 Unprocessable entity
      return res.status(422).json({ error: result.error.errors })
    }

    const newProblem = await ProblemModel.create({ input: result.data })
    res.status(201).json(newProblem)
  }

  static async delete (req, res) {
    const { id } = req.params
    const result = await ProblemModel.delete({ id })

    if (result === false) {
      return res.status(404).json({ message: 'Problem not found' })
    }

    return res.json({ message: 'Problem deleted' })
  }

  static async update (req, res) {
    const result = validatePartialProblem(req.body)

    if (!result.success) {
      return res.status(404).json({ error: JSON.parse(result.error.message) })
    }

    const { id } = req.params
    const updatedProblem = await ProblemModel.update({ id, input: result.data })
    return res.json(updatedProblem)
  }
}
