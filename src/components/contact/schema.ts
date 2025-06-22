import z from "zod";

export const FormSchema = z.object({
    full_name: z.string().min(2, {
        message: "Full name must be at least 2 characters.",
    }),
    email: z.string().email(),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
});

export type FormState = {
    success: boolean;
    errors?: z.inferFlattenedErrors<typeof FormSchema>["fieldErrors"];
    data?: z.infer<typeof FormSchema>;
};