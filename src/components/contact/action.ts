"use server"
import { FormSchema, type FormState } from './schema'
export async function onSubmit(
    previousState: FormState,
    data: FormData,
): Promise<FormState> {
    try {
        console.log("Form data:", data.get("full_name"));
        // Simulate sending an email or performing an action
        // await sendEmail(data.full_name, data.email, data.message);
        // toast.success("SMS sent successfully!");
        return { success: true };
    } catch (error) {
        console.error("Error sending SMS:", error);
        return { success: false, };
    }
}