/**
 * ProblemModel
 *
 * This model provides methods to manage mathematical problems stored in a JSON file.
 * It supports CRUD (Create, Read, Update, Delete) operations on problems, allowing
 * retrieval of problems with optional filters, creating new problems with unique IDs,
 * deleting, and updating existing problems.
 *
 * Methods:
 * - getAll(filters = {})                           : Retrieves all problems, applying optional filters for problem_type, grade_level, or topic.
 * - getById({ id })                                 : Returns a specific problem by its ID.
 * - create(input)                                   : Creates and saves a new problem with a unique ID.
 * - delete({ id })                                  : Deletes a problem based on its ID.
 * - update({ id, input })                           : Updates a problem's data and saves the changes.
 *
 * Usage of `getAll(filters = {})`:
 * Pass an object with any combination of `problem_type`, `grade_level`, and `topic` as keys to filter the problems.
 * Example: `getAll({ problem_type: 'Immediate Integral', grade_level: 'Undergraduate' })`
 *
 * Dependencies:
 * - `randomUUID` from 'node:crypto' for unique problem IDs.
 * - `readJSON` function from '../../utils' for reading the problems JSON file.
 */

import { randomUUID } from 'node:crypto'
import { readJSON } from '../../utils.js'

const problems = readJSON('./problems.json')

export class ProblemModel {
  static async getAll ({ id, topic, problemType, gradeLevel } = {}) {
    let filteredProblems = problems

    // Apply filters if they are present as parameters
    if (id) {
      filteredProblems = filteredProblems.filter(problem => problem.id === id)
    }

    if (problemType) {
      filteredProblems = filteredProblems.filter(problem =>
        problem.problemType.toLowerCase() === problemType.toLowerCase()
      )
    }

    if (gradeLevel) {
      filteredProblems = filteredProblems.filter(problem =>
        problem.gradeLevel.toLowerCase() === gradeLevel.toLowerCase()
      )
    }

    if (topic) {
      filteredProblems = filteredProblems.filter(problem =>
        problem.topic.toLowerCase() === topic.toLowerCase()
      )
    }

    return filteredProblems
  }

  static async getById ({ id }) {
    const problem = problems.filter(problem => problem.id === id)
    if (problem) return problem
  }

  static async random ({ id, topic, problemType, gradeLevel } = {}) {
    let filteredProblems = problems

    // Apply filters if they are present as parameters
    if (id) {
      filteredProblems = filteredProblems.filter(problem => problem.id === id)
    }

    if (problemType) {
      filteredProblems = filteredProblems.filter(problem =>
        problem.problemType.toLowerCase() === problemType.toLowerCase()
      )
    }

    if (gradeLevel) {
      filteredProblems = filteredProblems.filter(problem =>
        problem.gradeLevel.toLowerCase() === gradeLevel.toLowerCase()
      )
    }

    if (topic) {
      filteredProblems = filteredProblems.filter(problem =>
        problem.topic.toLowerCase() === topic.toLowerCase()
      )
    }

    // select a random problem from the filtered problem
    const randomProblem = filteredProblems[Math.floor(Math.random() * filteredProblems.length)]
    return randomProblem
  }

  static async create (input) {
    const newProblem = {
      id: randomUUID(),
      ...input
    }
    problems.push(newProblem)

    return newProblem
  }

  static async delete ({ id }) {
    const problemIndex = problems.findIndex(problem => problem.id === id)
    if (problemIndex < 0) return false

    problems.splice(problemIndex, 1)
    return true
  }

  static async update ({ id, input }) {
    const problemIndex = problems.findIndex(problem => problem.id === id)
    if (problemIndex < 0) return false

    problems[problemIndex] = {
      ...problems[problemIndex],
      ...input
    }

    return problems[problemIndex]
  }
}
