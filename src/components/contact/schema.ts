import z from "zod";

export const FormSchema = z.object({
    full_name: z.string().nonempty({
        message: "Full name is required.",
    }).min(2, {
        message: "Full name must be at least 2 characters.",

    }),
    email: z.string().nonempty({
        message: "Email is required.",
    }).email(),
    message: z.string().nonempty({
        message: "Message is required.",
    }).min(10, {
        message: "Message must be at least 10 characters.",
    }),
});

export type FormState = {
    success: boolean;
    message?: string;
    errors?: z.inferFlattenedErrors<typeof FormSchema>["fieldErrors"];
    data?: z.infer<typeof FormSchema>;
};