import { z } from "zod";

const TeamSchema = z.object({
  id_equipo: z.number().int(),
  equipo_nombre: z.string(),
  equipo_siglas: z.string(),
  equipo_objetivoGeneral: z.string(),
  equipo_objetivoEspecifico: z.string(),
  equipò_correo: z.string().email(),
  equipo_whatapp: z.string().url(),
  equipo_canalYoutube: z.string().url(),
})

const TeamIdSchema = TeamSchema.shape.id_equipo;

export { TeamSchema, TeamIdSchema }