import { z } from "zod";

const StudentSchema = z.object({
  id_estudiante: z.string(),
  id_persona: z.string(),
  id_carrera: z.string(),
  estudiante_cohorte: z.string().nullable(),
  estudiante_cantMateria: z.number().int().positive().nullable(),
  estudiante_periodo: z.string().nullable(),
  id_programaFormacion: z.string().nullable(),
})

const StudentIdSchema = StudentSchema.shape.id_estudiante

export { StudentIdSchema }