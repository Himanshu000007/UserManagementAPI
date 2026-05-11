const { z } = require("zod");


exports.createUserSchema = z.object({

  name: z
    .string()
    .min(3, "Name must be at least 3 characters"),

  email: z
    .string()
    .email("Invalid email format")

});