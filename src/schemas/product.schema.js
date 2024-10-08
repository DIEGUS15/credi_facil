import { z } from "zod";

export const createProductSchema = z.object({
  reference: z
    .number({
      required_error: "La referencia es obligatoria",
    })
    .positive("La referencia debe ser un número positivo"),

  type: z
    .string({
      required_error: "El tipo es obligatorio",
    })
    .nonempty("El tipo no puede estar vacío"),

  name: z
    .string({
      required_error: "El nombre es obligatorio",
    })
    .nonempty("El nombre no puede estar vacío"),

  value: z
    .number({
      required_error: "El valor es obligatorio",
    })
    .positive("El valor debe ser un número positivo"),

  stock: z
    .number({
      required_error: "El stock es obligatorio",
    })
    .int("El stock debe ser un número entero")
    .positive("El stock debe ser positivo"),

  status: z.enum(["disponible", "agotado"], {
    required_error: "El estado es obligatorio",
  }),

  description: z.string().optional(),

  user: z
    .string({
      required_error: "El ID del usuario es obligatorio",
    })
    .refine((value) => mongoose.Types.ObjectId.isValid(value), {
      message: "El ID de usuario debe ser un ObjectId válido",
    }),
});
