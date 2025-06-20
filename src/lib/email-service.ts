'use server'
import emailjs from '@emailjs/nodejs';

async function initEmailService() {
    try {
        emailjs.init({
            publicKey: process.env.NEXT_EMAIL_PUBLIC_KEY,
            privateKey: process.env.NEXT_EMAIL_PRIVATE_KEY,
            // blockHeadless: true,
            // limitRate: {
            //     id: 'app',
            //     throttle: 10000,
            // },
        });
        console.log('SMS service initialized successfully');
    } catch (error) {
        console.error('Error initializing SMS service:', error);
        throw error;
    }

}

export async function sendEmail(name: string, from: string, message: string) {

    try {
        initEmailService();
        await emailjs.send(process.env.NEXT_EMAIL_SERVICE_ID as string, process.env.NEXT_EMAIL_TEMPLATE_ID as string, {
            name,
            from,
            message,
        })
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                },
                (error) => {
                    console.log('FAILED...', error);
                },
            );

    } catch (error) {
        console.error('Error sending SMS:', error);
        throw error;
    }
}