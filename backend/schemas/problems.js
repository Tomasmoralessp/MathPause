import z from 'zod'

// Definición del esquema del Problema con constantes en snake_case para los valores
const problemSchema = z.object({
  id: z.string().uuid().optional(),
  instructions: z.string({ invalid_type_error: 'Problem instructions must be a string' }),
  expression: z.string({ invalid_type_error: 'Problem expression must be a string' }).max(100),
  gradeLevel: z.enum(['elementary', 'middle_school', 'high_school', 'undergraduate', 'graduate']),
  topic: z.enum(['calculus', 'algebra', 'arithmetic']),
  problemType: z.enum([
    'immediate_integral',
    'immediate_derivative',
    'definite_integral',
    'limits',
    'continuity',
    'series',
    'factorization',
    'expansion',
    'simplification',
    'basic_operations',
    'percentages',
    'fractions'
  ]),
  created: z.string().datetime({ invalid_type_error: 'Created must be a valid datetime' }),
  updated: z.string().datetime({ invalid_type_error: 'Updated must be a valid datetime' }),
  solution: z.string({ invalid_type_error: 'Solution must be a string' }).max(100)
})

// Función para validar la entrada completa
export function validateProblem (object) {
  return problemSchema.safeParse(object)
}

// Función para validar la entrada parcial
export function validatePartialProblem (object) {
  return problemSchema.partial().safeParse(object)
}
