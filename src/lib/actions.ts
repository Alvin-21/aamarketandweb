'use server';

import { Resend } from "resend";
import { z } from "zod";
import { EmailTemplate } from "@/components/email/EmailTemplate";

const FormSchema = z.object({
    fullName: z.string().min(1, "Please enter your name"),
    email: z.string().email('Invalid email address'),
    message: z.string().min(1, "Please enter your message"),
});

export type State = {
    errors?: {
        fullName?: string[];
        email?: string[];
        message?: string[];
    };
    message?: string | null;
};

export async function sendEmail(prevState: State | undefined, formData: FormData) {
    
    const validatedFields = FormSchema.safeParse({
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        message: formData.get('message'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Send Message.',
        };
    }

    const { fullName, email } = validatedFields.data;

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { data } = await resend.emails.send({
            from: 'Client <onboarding@resend.dev>',
            to: process.env.MY_EMAIL as string,
            subject: `General Enquiry from ${fullName}`,
            react: await EmailTemplate(validatedFields.data),
            replyTo: email,
            text: `General Enquiry from ${fullName}. Please view this email in an HTML-compatible email client.`,
        });
        return {
            message: 'success',
            errors: {},
        };
    } catch (error) {
        console.error(error);
    }
}