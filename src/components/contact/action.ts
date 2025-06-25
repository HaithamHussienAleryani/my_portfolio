"use server"
import { sendEmail } from '@/lib/email-service';
import { FormSchema, type FormState } from './schema'

export async function onSubmit(
    previousState: FormState,
    data: FormData,
): Promise<FormState> {
    try {
        await sendEmail(data.get("full_name")!.toString(), data.get("email")!.toString(), data.get("message")!.toString());



        return { success: true, message: `Thank you for your message, ${data.get("full_name")!.toString()}!.\n You will hear from me soon` };
    } catch (error) {
        console.error("Error sending SMS:", error);
        return { success: false, message: "There was an error sending your message. Please try again later." };
    }
}