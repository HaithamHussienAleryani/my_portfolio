"use server"
import { sendEmail } from '@/lib/email-service';
import { FormSchema, type FormState } from './schema'
export async function onSubmit(
    previousState: FormState,
    data: FormData,
): Promise<FormState> {
    try {
        await sendEmail(data.get("full_name")!.toString(), data.get("email")!.toString(), data.get("message")!.toString());
        return { success: true };
    } catch (error) {
        console.error("Error sending SMS:", error);
        return { success: false, };
    }
}