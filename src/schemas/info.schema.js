import { z } from "zod";

const InfoSchema = z.object({
  id_informacion: z.string().uuid(),
  id_informacionTipo: z.number().int().positive(),
  informacion_idPublicador: z.string(),
  id_equipo: z.number().positive().nullable(),

  informacion_fechaPublicacion: z.string().datetime(),
  informacion_fechaExpiracion: z.string().datetime(),
  informacion_titulo: z.string(),
  informacion_cuerpo: z.string(),
})

const CreateInfoSchema = InfoSchema.omit({ id_informacion: true, informacion_fechaPublicacion: true })
const UpdateInfoSchema = CreateInfoSchema.partial()
const InfoSchemaId = InfoSchema.shape.id_informacion

export { InfoSchema, CreateInfoSchema, UpdateInfoSchema, InfoSchemaId }