const { z } = require("zod");

const CareerSchema = z.object({
  id_carrera: z.string(),
  carrera_nombre: z.string(),
  carrera_descripcion: z.string(),
  carrera_siglas: z.string(),
})

module.exports = { CareerSchema }