import { z } from "zod"

const PersonSchema = z.object({
  id_persona: z.string(),
  persona_tipoIdentificacion: z.string(),
  persona_nacionalidad: z.string(),
  persona_cedula: z.string(),
  persona_nombres: z.string(),
  persona_apellidos: z.string(),
  persona_correo: z.string(),
  persona_genero: z.string(),
  persona_fechaNacimiento: z.string().datetime(),
  persona_fechaCreacion: z.string().datetime(),
})

const CreatePersonSchema = PersonSchema.omit({ id_persona: true, persona_fechaCreacion: true})
const UpdatePersonSchema = CreatePersonSchema.partial()
const PersonIdSchema = PersonSchema.shape.id_persona

export { PersonIdSchema, CreatePersonSchema, UpdatePersonSchema };