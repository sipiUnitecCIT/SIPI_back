import { z } from "zod"

const EmailSchema = z.object({
  emails: z.array(z.string().email()),
})

export default EmailSchema;